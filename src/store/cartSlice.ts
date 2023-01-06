import {CartDish, Dish} from "../types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../app/store";
import cartDishes from "../components/CartDishes/CartDishes";
import dishes from "../containers/Dishes/Dishes";

interface CartState {
  cartDishes: CartDish[];
  totalPrice: number
}

const initialState: CartState = {
  cartDishes: [],
  totalPrice: 0,
}
interface DishDelete {
  id: string,
  price: number
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
    deleteDishFromCart: (state, {payload}: PayloadAction<DishDelete>) =>{
        const existingDish = state.cartDishes.find(dish => dish.dish.id === payload.id);
        if(existingDish && existingDish.amount >1 ){
          existingDish.amount -=  1;
        }else{
          state.cartDishes = state.cartDishes.filter(dish => dish.dish.id === payload.id)
        }
        state.totalPrice = state.totalPrice - payload.price;
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
export const {addDish, resetCart, updateDishes, getTotalPrice, deleteDishFromCart} = cartSlice.actions;
export const selectCartDishes = (state: RootState) => state.carts.cartDishes;
export const selectTotalPrice = (state: RootState) => state.carts.totalPrice;