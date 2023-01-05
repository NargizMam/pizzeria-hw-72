import React from 'react';
import './Dish.css';
import {useAppDispatch} from "../../app/hooks";
import {useNavigate} from "react-router-dom";
import Button from "../../UI/Button/Button";
import {deleteDish, fetchDishes} from "../../store/dishes/dishesThunk";

interface Props{
    isAdmin?: boolean,
    name: string,
    image: string,
    price: number,
    id: string
}

const Dish: React.FC<Props> = ({isAdmin, name, image, id, price}) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const onEditClicked = () => {
        navigate('/edit-dish/'+ id);
    };
    const onDelete = async () => {
        await dispatch(deleteDish(id));
        dispatch(fetchDishes());
        navigate('/admin');
    };
    const getOrder = () => {
        if(!isAdmin){
            console.log(id);
        }
    };
    let buttons = (
        <>
        <Button clicked={onEditClicked} classes={'grey'}>Edit</Button>
        <Button clicked={onDelete} classes={'red'}>Delete</Button>
        </>
    );
    if(!isAdmin){
        buttons = (
            <></>
        )
    }
    return (
        <div className="Dish">
            <div className='dish-for-client' onClick={getOrder}>
                <img src={image} alt={name} className="Image"/>
                <h3>{name}</h3>
                <p>KGS <strong>{price}</strong></p>
            </div>
            {buttons}

        </div>
    );
};

export default Dish;