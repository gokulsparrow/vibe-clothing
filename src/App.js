import React from 'react';
import Homepage from './pages/homepage/Homepage';
import { Route } from 'react-router-dom';

import './App.css';

const HatsPage = () => (
  <div>
    <h1> HatsPage</h1>
  </div>
);

function App () {
    return (
      <div>
        <Route exact path='/' component={Homepage} />
        <Route path='/hats' component={HatsPage} />
      </div>
    );
}

export default App;
