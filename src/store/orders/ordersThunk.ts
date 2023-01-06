import {createAsyncThunk} from "@reduxjs/toolkit";
import {AllOrders, ApiOrdersList} from "../../types";
import axiosApi from "../../axiosApi";
import {AppDispatch} from "../../app/store";
import {fetchOneDish} from "../dishes/dishesThunk";


export const fetchOrders = createAsyncThunk<AllOrders, undefined, {dispatch: AppDispatch}>(
    'orders/fetch',
    async (_, thunkAPI) => {
        let allOrders: AllOrders = {
            id: '',
            customer: {
                name: '',
                address: '',
                phone: ''
            },
            dishes: [
                {dishId: '',
                amount: 0}
                ]
        };
        const response = await axiosApi.get<ApiOrdersList | null>('/orders.json');
        const orders = response.data;

        if (orders) {
           Object.keys(orders).map(orderId => {
                allOrders.id = orderId;
                allOrders.customer = orders[orderId].customer;
                allOrders.dishes = orders[orderId].dishes;
               orders[orderId].dishes.map(dishOrder => {
                  thunkAPI.dispatch(fetchOneDish(dishOrder.dishId));
               })
            });

        }
        return allOrders;

    }
);