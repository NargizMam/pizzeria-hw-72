import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {selectCartDishes} from "../../store/cartSlice";

const Cart = () => {
    const dispatch = useAppDispatch();
    const cartDishes = useAppSelector(selectCartDishes);
    console.log(cartDishes);

    return (
        <>
            <h3>Your order!</h3>

        </>
    );
};

export default Cart;