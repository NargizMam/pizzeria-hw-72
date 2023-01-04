import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    // orders: orderReducer,
    // dishes: dishesReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;