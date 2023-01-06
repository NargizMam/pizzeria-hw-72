import {configureStore} from "@reduxjs/toolkit";
import {dishesReducer} from "../store/dishes/dishesSlice";
import {orderReducer} from "../store/orders/ordersSlice";
import {cartReducer} from "../store/cartSlice";

export const store = configureStore({
  reducer: {
    orders: orderReducer,
    dishes: dishesReducer,
    carts: cartReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;