import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from '../pages/Home';

export default function Routes(){
    return(
        <BrowserRouter>
         <Switch>
            <Route path="/" exact Component={Home}/>
         </Switch>
        </BrowserRouter>
    )
}