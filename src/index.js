import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import NavBar from './components/navbar';
import HomePage from './components/home-page';
import About from './components/about';

import './style/main.scss';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path='*' component={NavBar} />
        <Route exact path='/' component={HomePage} />
        <Route exact path='/about' component={About} />
      </div>
    </BrowserRouter>
  );
};

export default App;
ReactDOM.render(<App />, document.getElementById('root'));