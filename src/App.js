import React, { Fragment } from 'react';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom"  
import { Index } from './views';
import { Login } from './views/login';
import { Registrar} from './views/registrar'
import {Producto} from './views/ver-producto';



function App () {
  return (
    <Fragment>
    <Router>
        <Routes>
            <Route path='/' exact element = {<Index/>}/>
            <Route path='/Login' exact element = {<Login/>}/>
            <Route path='/Registrar' exact element = {<Registrar/>}/>
            <Route path='/Producto' exact element = {<Producto/>}/>
        </Routes>
    </Router>




    </Fragment>
  );
};

export default App;
