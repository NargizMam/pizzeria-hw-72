import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {resetCart, selectCartDishes, selectTotalPrice} from "../../store/cartSlice";
import CartItem from "./CartItem";
import Button from "../../UI/Button/Button";
import {useNavigate} from "react-router-dom";

const CartDishes = () => {
    const cartDishes = useAppSelector(selectCartDishes);
    const total = useAppSelector(selectTotalPrice);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const onCancel = async () => {
      await  dispatch(resetCart());
      navigate('/dishes');
    };
    const getOrder = () => {

    }

    return (
        <>
            <h3>Your order!</h3>
            {cartDishes.map(cartDish => (
                <CartItem
                    key={cartDish.dish.id}
                    cartDish={cartDish}
                />
            ))}
            <div className="card col-5 border-0 p-2">
                <div className="row">
                    <div className="col text-right">
                        Total:
                    </div>
                    <div className="col-3 text-right">
                        <strong>{total}</strong> KGS
                    </div>
                </div>
            </div>
            <>
                <Button clicked={onCancel} classes={'red'}>Cancel</Button>
                <Button clicked={getOrder} classes={'grey'}>Order</Button>
            </>
        </>
   )
};

export default CartDishes;