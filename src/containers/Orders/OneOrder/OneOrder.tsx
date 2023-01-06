import React from 'react';
import {CartDish, Customer} from "../../../types";
import {useAppSelector} from "../../../app/hooks";
import {selectTotalPrice} from "../../../store/cartSlice";
import Button from "../../../UI/Button/Button";
import {DELIVERY} from "../../../delivery";
import OrderDish from "./OrderDish/OrderDish";

interface Props {
   id: string,
   customer: Customer,
   dishes: CartDish[]
}

const OneOrder: React.FC<Props> = ({id, customer, dishes}) => {
    const totalPrice = useAppSelector(selectTotalPrice);

    const onDelete = () => {
        console.log(id)
    }
    const orderDishes = (
        dishes.map(orderDish => (
            <OrderDish key={orderDish.dishId}
                        dishId={orderDish.dishId}
                       amount={orderDish.amount}
            />
        ))
    )
    return (
        <div className="dish-for-client">
            {orderDishes}
            <p>KGS <strong>{totalPrice}</strong></p>
            <p>Delivery <strong>{DELIVERY}</strong> KGS</p>
            <Button clicked={onDelete} classes={'red'}>Complete order</Button>
        </div>
    );
};

export default OneOrder;
