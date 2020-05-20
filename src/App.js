import React from 'react';
import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component.jsx';
import { Switch,Route } from 'react-router-dom';

import './App.css';


function App () {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
        </Switch>
      </div>
    );
}

export default App;
