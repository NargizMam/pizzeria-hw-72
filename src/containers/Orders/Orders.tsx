import React, {useEffect} from 'react';
import './Order.scss';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {selectOrders} from "../../store/orders/ordersSlice";
import {fetchOrders} from "../../store/orders/ordersThunk";
import CartItem from "../../components/CartDishes/CartItem";


const Orders = () => {
    const newAllOrders = useAppSelector(selectOrders);
    const dispatch = useAppDispatch();
    console.log(newAllOrders)
    useEffect(() => {
        dispatch(fetchOrders());
    }, [])

    return (
        <>
            <h4>Orders</h4>

        </>
    );
};

export default Orders;