import React from 'react';
import {Box, Container, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import './Dishes.scss';

interface Props{
    isAdmin: boolean;
}
const Dishes: React.FC<Props> = ({isAdmin}) => {
    return (
        <Container maxWidth={"xl"}>
            <Box className="dishes-page">
                {isAdmin &&
                <Box className="dishes-page__top">
                    <Typography title="Dishes"
                                className="dishes-page__content"
                                variant="h4"
                    >All types of pizza</Typography>
                    <Link to="/dishes/new" >Add new Dish</Link>
                </Box> }
            </Box>
            <Box className="dishes-page__content">
                DISHES
            </Box>
        </Container>
    );
};

export default Dishes;