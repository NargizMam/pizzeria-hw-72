import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {ApiDish} from "../../types";
import DishForm from "../../components/DishForm/DishForm";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {selectFetchOneLoading, selectOneDish, selectUpdateLoading} from "../../store/dishes/dishesSlice";
import {fetchOneDish, updateDish} from "../../store/dishes/dishesThunk";
import Spinner from "../../UI/Spinner/Spinner";


const EditDish = () => {
  const {id} = useParams() as {id: string};
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const updateLoading = useAppSelector(selectUpdateLoading);
  const fetchOneLoading = useAppSelector(selectFetchOneLoading);
  const dish = useAppSelector(selectOneDish);

  useEffect(() => {
    dispatch(fetchOneDish(id as string));
  }, [dispatch, id]);

  const onSubmit = async (dish: ApiDish) => {
    await dispatch(updateDish({id, dish}));
    navigate('/admin');
  };

  const existingDish = dish && {
    ...dish,
  };

  return (
    <div className="row mt-2">
      <div className="col">
        {fetchOneLoading && <Spinner/>}
        {existingDish && (
          <DishForm
            onSubmit={onSubmit}
            existingDish={existingDish}
            isEdit
            isLoading={updateLoading}
          />
        )}
      </div>
    </div>
  );
};

export default EditDish;