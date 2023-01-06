import React, {useEffect} from 'react';
import {CartDish} from "../../types";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {deleteDishFromCart} from "../../store/cartSlice";
import {fetchOneDish} from "../../store/dishes/dishesThunk";
import {selectOneDish} from "../../store/dishes/dishesSlice";

interface Props {
  cartDish: CartDish;
}

const CartItem: React.FC<Props> = ({cartDish}) => {
    const dispatch = useAppDispatch();
    const dishForCart = useAppSelector(selectOneDish);

    let price;
    if(dishForCart){
         price = cartDish.amount * dishForCart.price;
    }
    useEffect(() => {
        dispatch(fetchOneDish(cartDish.dishId));
    },[dispatch])

    const onDeleteFromCart = async () => {
        if(dishForCart) {
            await dispatch(deleteDishFromCart({id: cartDish.dishId, price: dishForCart.price}));
        }
    };
  return (
    <div className="card col-7 mb-2 p-2">
      <div className="row align-items-center">
        <div className="col">{dishForCart?.name}</div>
        <div className="col-2">x{cartDish.amount}</div>
        <div className="col-3 text-right">
          {price} KGS
        </div>
      </div>
      <button type="button" className="btn-close position-absolute top-2 end-0"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={onDeleteFromCart}
      />

    </div>
  );
};

export default CartItem;