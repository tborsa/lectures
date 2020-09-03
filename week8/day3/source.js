//react router
// react is almost done you have learned a lot,
// today is focused on the next steps of your
// react journey
// we can guide this lecture somewhat based on What
// you are interested in.
// the first next step should be to review what you
// already know and reflect on what you have learned
// dan abramov has some great articles to look at
// particularly the complete guide to use effect
// helps build an understanding of the render cycle

// go over scheduler and see if you can draw a 
// component tree of the structure

// new things
// - other hooks
// - react router
// - useful libraries for react
// - styled components
// - component libraries

// dont make stuff that others have made

// demo problem with scheduler

// 
{
  "compilerOptions": {
    "baseUrl": "src"
  },
  "include": ["src"]
}

import React from 'react';
import { Route } from 'react-router-dom';
import Creation from '../components/Creation';
 // USE ROUTER
<Router/>
// USE ROUTE
<Route path="/dog" ><Dog/></Route>
// SWITCH
<Switch>
  // EXACT PATH
  <Route exact path="/cat" ><Cat/></Route>
</Switch>
// LINKS vs A tags
<Link to="/dog">dog</Link>
<Link to="/cat">cat</Link>
<a href="/dog">a dog</a>
<a href="/cat">a cat</a>
<Screens/>

// PARAMS
<Route path="/dog/:id" ><Dog/></Route>

// SCREENS COMPONENT
const index = () => {
  return (
    <Switch>
      {
        [
          ...About,
        ]
      }
      // default route
      <Route path="/"><Cat/></Route>
    </Switch>
  );
};

// SCREEN ROUTE
export default [
  <Route key="about" path="/about">
    <About/>
  </Route>,
]

// ROUTER HOOKS
const history = useHistory();

const showCat = () => {
  history.push('/cat');
}
// SERVER ROUTES VS FRONT END ROUTES

//CONTEXT

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
