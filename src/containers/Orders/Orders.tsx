import React, {useEffect} from 'react';
import './Order.scss';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {selectOrders} from "../../store/orders/ordersSlice";
import {fetchOrders} from "../../store/orders/ordersThunk";
import CartItem from "../../components/CartDishes/CartItem";
import OneOrder from "./OneOrder/OneOrder";


const Orders = () => {
    const {id, customer, dishes} = useAppSelector(selectOrders);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchOrders());
    }, [])

    return (
        <>
            <h4>Orders</h4>
            <OneOrder key={id}
                      customer={customer}
                      dishes={dishes}
                      id={id}
            />
        </>
    );
};

export default Orders;