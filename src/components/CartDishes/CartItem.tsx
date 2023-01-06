import React from 'react';
import {CartDish} from "../../types";
import {useAppDispatch} from "../../app/hooks";
import {deleteDishFromCart, updateDishes} from "../../store/cartSlice";
import {updateDish} from "../../store/dishes/dishesThunk";

interface Props {
  cartDish: CartDish;
}

const CartItem: React.FC<Props> = ({cartDish}) => {
    const dispatch = useAppDispatch();
    const price = cartDish.amount * cartDish.dish.price;
    const onDeleteFromCart = async () => {
       await dispatch(deleteDishFromCart({id: cartDish.dish.id, price: cartDish.dish.price}));

    };
  return (
    <div className="card col-7 mb-2 p-2">
      <div className="row align-items-center">
        <div className="col">{cartDish.dish.name}</div>
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