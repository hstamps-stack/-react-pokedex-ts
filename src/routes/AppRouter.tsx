import { Route, Switch } from 'react-router-dom';
import Navbar from "../components/Navbar";
import HomePage from "../pages/Home";
import SinglePage from "../pages/SinglePokemon";
import React from "react";

const AppRouter: React.FC = () => {
    return (
      <div>
        <Navbar />
        <div className='container'>
          <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/pokemon' component={SinglePage} />
          </Switch>
        </div>
      </div>
    );
  };
  
  export default AppRouter;