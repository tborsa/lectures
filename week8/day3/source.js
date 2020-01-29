//react router

import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import commonroutes from './bundles/common/routes';


import React from 'react';
import { Route } from 'react-router-dom';
import Creation from '../components/Creation';

export default [
  <Route key="creation" exact path="/creation" component={Creation} >
  </Route>,
];

<Router>
  <Route></Route>
</Router>

<Switch>
  {[
    ...commonroutes
  ]}
</Switch>

//Create the context

import {createContext} from 'react';

const AppContext = createContext('default value');

export default AppContext;

// use the provieder in the root component or otherwise

import AppContext from 'AppContext.js';

let thingOne = wsConnection;
let thingTwo = customHook;

<AppContext.Provider value={{thingOne, ThingTwo}}>

</AppContext.Provider>


// In any child component of the provider

import AppContext from 'AppContext.js';

const {thingOne, thingTwo} = useContext(AppContext);
