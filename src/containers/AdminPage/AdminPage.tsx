import React from 'react';
import Dishes from "../Dishes/Dishes";
import {NavLink} from "react-router-dom";
import Button from "../../UI/Button/Button";

const AdminPage = () => {
    return (
        <>
            <div>
                <Button classes={'grey'}><NavLink to='/admin/dishes'>Dishes</NavLink></Button><br/>
                <Button  classes={'grey'}><NavLink to='/admin/orders'>Orders</NavLink></Button>
            </div>
            <Dishes isAdmin/>
        </>
    );
};

export default AdminPage;