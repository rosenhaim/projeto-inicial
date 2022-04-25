//import { Router } from 'express';
import React, {Component} from 'react'
import { Link, Route, Routes, Router} from 'react-router-dom';
import './App.css';
import routesConfig from './routesConfig';

class App extends Component {

  render(){
  return (
    <div>
      <div className="App">
        <Link to="/" >Home</Link>
        <Link to="/user" >User</Link>
      </div>
      {routesConfig.map((value, key) => {
        return<Routes> <Route
          key={key}
          path={value.path}
          element={<value.element />} //v6 deve ser com element e {<  />}
          exact={value.exact}
        ></Route>
        </Routes> 
       
      })}
    </div>
  );
}
}
export default App;
