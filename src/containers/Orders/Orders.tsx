import React, {useEffect} from 'react';
import './Order.scss';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {selectOrders} from "../../store/orders/ordersSlice";
import {fetchOrders} from "../../store/orders/ordersThunk";


const Orders = () => {
    const orders = useAppSelector(selectOrders);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchOrders());
        console.log(orders)
    }, [])

    return (
        <div>
            
        </div>
    );
};

export default Orders;