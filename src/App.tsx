import React from 'react';
import {Route, Routes} from "react-router-dom";
import Client from "./containers/Client/Client";
import AdminPage from "./containers/AdminPage/AdminPage";
import Layout from "./UI/Layout/Layout";


function App() {
  return (
    <Layout>
        <Routes>
            <Route path='/' element={<Client/>}/>
            <Route path='/admin' element={<AdminPage/>}/>
        </Routes>
    </Layout>
  );
}

export default App;
