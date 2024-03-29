import {Dish} from "../../types";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../app/hooks";
import {deleteDish, fetchDishes} from "../../store/dishes/dishesThunk";
import Button from "../../UI/Button/Button";
import './DishItem.css';


interface Props {
    isAdmin: boolean,
     dish: Dish,
    clicked: () => void;
}
const DishItem: React.FC<Props> = ({isAdmin, dish, clicked}) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();


    const onEditClicked = () => {
        navigate('/edit-dish/'+ dish.id);
    };
    const onDelete = async () => {
        await dispatch(deleteDish(dish.id));
        dispatch(fetchDishes());
        navigate('/admin');
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
            <div className='dish-for-client' onClick={clicked}>
                <img src={dish.image} alt={dish.name} className="Image"/>
                <h3>{dish.name}</h3>
                <p>KGS <strong>{dish.price}</strong></p>
            </div>
            {buttons}

        </div>
    );
};

export default DishItem;
