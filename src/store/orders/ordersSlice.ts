import {AllOrders, ApiOrdersList, CartDish, Customer, Dish, Orders} from "../../types";
import {createSlice} from "@reduxjs/toolkit";
import {fetchOrders} from "./ordersThunk";
import {RootState} from "../../app/store";

interface OrdersState {
    fetchOrdersLoading: boolean,
    orders: AllOrders

}
const initialState: OrdersState = {
    fetchOrdersLoading: false,
    orders: {
        id: '',
        customer: {
            name: '',
            address: '',
            phone: ''
        },
        dishes: []
    }
}


export const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(fetchOrders.pending, (state) => {
            state.fetchOrdersLoading = true;
        });
        builder.addCase(fetchOrders.fulfilled, (state, {payload: order}) => {
            state.fetchOrdersLoading = false;
            state.orders = order;
        });
        builder.addCase(fetchOrders.rejected, (state) => {
            state.fetchOrdersLoading = false;
        });
    }
});
export const orderReducer = ordersSlice.reducer;
export const selectOrders = (state: RootState) => state.orders.orders;
export const selectOrdersLoading = (state: RootState) => state.orders.fetchOrdersLoading;