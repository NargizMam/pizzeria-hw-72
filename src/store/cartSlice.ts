import {CartDish, Dish} from "../types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../app/store";

interface CartState {
  cartDishes: CartDish[];
  totalPrice: number
}

const initialState: CartState = {
  cartDishes: [],
  totalPrice: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    getTotalPrice: (state,{payload} ) => {
      state.totalPrice += parseInt(payload);
    },
    addDish: (state, {payload: dish}: PayloadAction<Dish>) => {
      const existingIndex = state.cartDishes.findIndex(item => {
        return item.dish.id === dish.id;
      });

      if (existingIndex !== -1) {
        state.cartDishes[existingIndex].amount++;
      } else {
        state.cartDishes.push({dish, amount: 1});
      }
    },
    resetCart: (state) => {
      state.cartDishes = [];
    },
    updateDishes: (state, {payload: dishes}: PayloadAction<Dish[]>) => {
      const newCartDishes: CartDish[] = [];

      state.cartDishes.forEach(cartDish => {
        const existingDish = dishes.find(dish => dish.id === cartDish.dish.id);

        if (!existingDish) {
          return;
        }
        newCartDishes.push({
          ...cartDish,
          dish: existingDish,
        });
      });
      state.cartDishes = newCartDishes;
    }
  }
});

export const cartReducer = cartSlice.reducer;
export const {addDish, resetCart, updateDishes, getTotalPrice} = cartSlice.actions;
export const selectCartDishes = (state: RootState) => state.carts.cartDishes;
export const selectTotalPrice = (state: RootState) => state.carts.totalPrice;