import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './Pages/Login';
import Main from './Pages/Main';

function Routes(){
    return(
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/"><Login/></Route>
                    <Route path="/main"><Main/></Route>
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default Routes;