import React, {useEffect} from 'react';
import {Box, Container, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {selectDishes} from "../../store/dishes/dishesSlice";
import {fetchDishes} from "../../store/dishes/dishesThunk";
import Dish from "../../components/Dish/Dish";
import './Dishes.scss';
import Button from "../../UI/Button/Button";

interface Props{
    isAdmin: boolean;
}
const Dishes: React.FC<Props> = ({isAdmin}) => {
    const dishes = useAppSelector(selectDishes);
    const dispatch = useAppDispatch();
    const total = cartDishes.reduce((sum, cartDish) => {
        return sum + cartDish.amount * cartDish.dish.price;
    }, 0);


    useEffect(() => {
        dispatch(fetchDishes());
    }, [dispatch]);



    return (
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
                    <Dish key={dish.id}
                          name={dish.name}
                          image={dish.image}
                          id={dish.id}
                          price={dish.price}
                          isAdmin={isAdmin}
                    /> )) : <h4>Список блюд пуст!</h4>
                }
                {!isAdmin ?
                    <div className="card border-0 p-2">
                        <div className="row">
                            <div className="col text-right">
                                Total:
                            </div>
                            <div className="col-3 text-right">
                                <strong>{total}</strong> KGS
                            </div>
                        </div>
                    </div>
                }
            </Box>
        </Container>
    );
};

export default Dishes;