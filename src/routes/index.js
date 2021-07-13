import React from 'react';
import {Switch,Route } from 'react-router-dom';
import About from "./MyComponents/About.js";

export default function Routes() {
    return (
        <Switch>
           <Route path="/" exact component={About}>
           </Route> 
        </Switch>
    )
}
