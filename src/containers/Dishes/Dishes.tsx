import React, {useEffect} from 'react';
import {Box, Container, Typography} from "@mui/material";
import {Link, NavLink} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {selectDishes, selectDishesFetchLoading} from "../../store/dishes/dishesSlice";
import {fetchDishes} from "../../store/dishes/dishesThunk";
import './Dishes.scss';
import Button from "../../UI/Button/Button";
import DishItem from "../../components/DishItem/DishItem";
import {selectTotalPrice} from "../../store/cartSlice";
import Spinner from "../../UI/Spinner/Spinner";

interface Props{
    isAdmin: boolean;
}
const Dishes: React.FC<Props> = ({isAdmin}) => {
    const dispatch = useAppDispatch();
    const dishes = useAppSelector(selectDishes);
    const totalPrice = useAppSelector(selectTotalPrice);
    const dishesLoading = useAppSelector(selectDishesFetchLoading);


    useEffect(() => {
        dispatch(fetchDishes());
    }, [dispatch]);


    return (
        <>
        {dishesLoading ? <Spinner/> : null}
            <Container maxWidth={"xl"}>
            <Box className="dishes-page">
                {isAdmin &&
                <Box className="dishes-page__top">
                    <Typography title="Dishes"
                                className="dishes-page__content"
                                variant="h4"
                    >All types of pizza</Typography>
                    <Button classes={'grey'}><Link to="/admin/new-dish" >Add new Dish</Link></Button>
                </Box> }
            </Box>
            <Box className="dishes-page__content">
                {dishes.length > 0 ?
                    dishes.map(dish => (
                    <DishItem key={dish.id}
                          dish={dish}
                          isAdmin={isAdmin}
                    /> )) : <h4>Список блюд пуст!</h4>
                }
                {totalPrice > 0 &&
                    <div className="container">
                        <hr/>
                        <div className="col border-0 p-2 text-center">
                            <div className="row">
                                <div className="col text-right">
                                    Total:
                                </div>
                                <div className="col-3 text-right">
                                    <strong>{totalPrice}</strong> KGS
                                </div>
                                <Button classes={'grey'}>
                                    <NavLink to='/cart-dishes' style={{width: '100%'}}>Checkout</NavLink>
                                </Button>
                            </div>
                        </div>
                    </div>
                }
            </Box>
        </Container>
        </>
    );
};

export default Dishes;