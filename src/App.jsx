import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import About from './About';
// import Contact from './Contact';
import Error from './Error';
import Login from './components/Login';
import Admin from './components/Admin';
import Logout from './components/Logout';
import Fetchtable from './components/Fetchtable';
import AddBanner from './components/AddBanner';



const App = () =>{

  return(
    <>
    <Switch>
      <Route exact path='/' component={Login}/>
      <Route path='/admin' exact component={Admin}/>
      <Route path='/logout'component={Logout}/>
      <Route path='/admin/table' exact >
        <Fetchtable/>
      </Route>
      <Route path='/admin/banner' exact >
        <AddBanner/>
      </Route>
       <Route path='/*'>
        <Error/>
      </Route>
    
    </Switch>
      {/* <About/>
      <Contact/> */}
    
    </>
  );
}

export default App;