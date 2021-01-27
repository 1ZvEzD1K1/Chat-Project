import React from 'react'
import { Switch, BrowserRouter, Route } from "react-router-dom";
import { NavbarRTS } from '../components/Navbar/NavbarRTS';
import { Enter } from './Enter/Enter';
import { Register } from './Register/Register';


export default function MainNavigator() {
    return (
        <BrowserRouter>
            <NavbarRTS/> 
            <Switch>
               <Route component={Enter} path="/" exact/>
               <Route component={Register} path="/reg"/>
            </Switch>
        </BrowserRouter>
    )
}
