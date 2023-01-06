import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../../app/hooks";
import {fetchOneDish} from "../../../../store/dishes/dishesThunk";
import {selectOneDish} from "../../../../store/dishes/dishesSlice";
interface Props {
    dishId: string,
    amount: number
}

const OrderDish: React.FC<Props> = ({dishId,amount}) => {
    const dispatch = useAppDispatch();
    const oneOrderDish = useAppSelector(selectOneDish);
    let totalPrice;
    useEffect(() => {
        dispatch(fetchOneDish(dishId));
    },[]);
    if(oneOrderDish){
         totalPrice = oneOrderDish.price * amount
    }

    return (
        <>
            <div className="row align-items-center">
                <div className="col">{oneOrderDish?.name}</div>
                <div className="col-2">x{amount}</div>
                <div className="col-3 text-right">{totalPrice} KGS</div>
            </div>
        </>
    );
};

export default OrderDish;