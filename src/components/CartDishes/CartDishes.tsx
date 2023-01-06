import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {addDish, getTotalPrice, resetCart, selectCartDishes, selectTotalPrice} from "../../store/cartSlice";
import CartItem from "./CartItem";
import Button from "../../UI/Button/Button";
import {useNavigate} from "react-router-dom";
import CustomerForm from "../CustomerForm/CustomerForm";
import {DELIVERY} from "../../delivery";

const CartDishes = () => {
    const cartDishes = useAppSelector(selectCartDishes);
    const total = useAppSelector(selectTotalPrice);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    const onCancel = async () => {
      await  dispatch(resetCart());
      navigate('/dishes');
    };
    const getOpenCustomer = () => {
        setShow(true);
    }
    const getOrder =async () => {
      await  dispatch(getTotalPrice(DELIVERY));
    }
    return (
        <>
            <h3>Your order!</h3>
            {cartDishes.map(cartDish => (
                <CartItem
                    key={cartDish.dishId}
                    cartDish={cartDish}
                />
            ))};
            <div className="card col-5 border-0 p-2">
                <div className="row">
                    <div className="col text-right">
                        Delivery:
                    </div>
                    <div className="col-3 text-right">
                        <strong>{DELIVERY}</strong> KGS
                    </div>
                </div>
            </div>
            <div className="card col-5 border-0 p-2">
                <div className="row">
                    <div className="col text-right">
                        Total:
                    </div>
                    <div className="col-3 text-right">
                        <strong>{total + DELIVERY}</strong> KGS
                    </div>
                </div>
            </div>
            <>
                <Button clicked={onCancel} classes={'red'}>Cancel</Button>
                <Button clicked={getOpenCustomer} classes={'grey'}>Order</Button>
            </>
            <CustomerForm show={show} getOrder={getOrder} onCancel={() => setShow(false)}/>
        </>
   )
};

export default CartDishes;