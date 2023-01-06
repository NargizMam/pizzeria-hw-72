import {CartDish, Orders} from "../../types";
import {createSlice} from "@reduxjs/toolkit";
import {fetchOrders} from "./ordersThunk";
import {RootState} from "../../app/store";

interface OrdersState {
    orders: Orders[];
    fetchOrdersLoading: boolean
}
const initialState: OrdersState = {
    orders: [],
    fetchOrdersLoading: false
}


export const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(fetchOrders.pending, (state) => {
            state.fetchOrdersLoading = true;
        });
        builder.addCase(fetchOrders.fulfilled, (state, {payload: orders}) => {
            state.fetchOrdersLoading = false;
            state.orders = orders;
        });
        builder.addCase(fetchOrders.rejected, (state) => {
            state.fetchOrdersLoading = false;
        });
    }
});
export const orderReducer = ordersSlice.reducer;
export const selectOrders = (state: RootState) => state.orders.orders;
export const selectOrdersLoading = (state: RootState) => state.orders.fetchOrdersLoading;