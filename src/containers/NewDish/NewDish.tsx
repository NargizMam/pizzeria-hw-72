import React from 'react';
import DishForm from "../../components/DishForm/DishForm";
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {ApiDish} from "../../types";
import {selectDishCreateLoading} from "../../store/dishes/dishesSlice";
import {createDish} from "../../store/dishes/dishesThunk";

const NewDish: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const createLoading = useAppSelector(selectDishCreateLoading);

  const onSubmit =async (dish: ApiDish) => {
    await dispatch(createDish(dish));
    navigate('/admin');
  };

  return (
    <div className="row mt-2">
      <div className="col">
        <DishForm onSubmit={onSubmit} isLoading={createLoading}/>
      </div>
    </div>
  );
};

export default NewDish;