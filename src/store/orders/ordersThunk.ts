import {createAsyncThunk} from "@reduxjs/toolkit";
import {ApiOrdersList, CartDish, Orders} from "../../types";
import axiosApi from "../../axiosApi";
import {RootState} from "../../app/store";


export const fetchOrders = createAsyncThunk<CartDish[], undefined, { state: RootState }>(
    'orders/fetch',
    async (_, thunkAPI) => {
        const response = await axiosApi.get<ApiOrdersList | null>('/orders.json');
        const orders = response.data;
        let newOrders: Orders[] = [];
        if (orders !== null) {
            newOrders = Object.keys(orders).map(orderId => {
                const order: Orders = orders[orderId];
                const data = {
                    id: orderId,
                    dishes: order
                };
                Object.keys(orders).forEach(dishId => {
                    const dish = thunkAPI.getState().dishes.items.find(dish => dish.id = dishId);
                    console.log(dish)
                })
            })
        }
        return newOrders;
    }
);