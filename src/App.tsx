import React from 'react';
import {Route, Routes} from "react-router-dom";
import Client from "./containers/Client/Client";
import AdminPage from "./containers/AdminPage/AdminPage";
import Layout from "./UI/Layout/Layout";
import NewDish from "./containers/NewDish/NewDish";
import EditDish from "./containers/EditDish/EditDish";
import Orders from "./containers/Orders/Orders";
import Cart from "./components/CartDishes/CartDishes";


function App() {
  return (
    <Layout>
        <Routes>
            <Route path='/' element={<Client/>}/>
            <Route path='/admin' element={<AdminPage/>}/>
            <Route path='/admin/dishes' element={<AdminPage/>}/>
            <Route path='admin/new-dish' element={<NewDish/>}/>
            <Route path='/edit-dish/:id' element={<EditDish/>}/>
            <Route path='admin/orders' element={<Orders/>}/>
            <Route path='/cart-dishes' element={<Cart/>}/>

        </Routes>
    </Layout>
  );
}

export default App;
