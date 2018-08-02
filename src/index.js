import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import NavBar from './components/navbar';
import HomePage from './components/home-page';
import About from './components/about';
import EFT from './components/eft';
import Footer from './components/footer';

import './style/main.scss';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path='*' component={NavBar} />
        <Route exact path='/' component={HomePage} />
        <Route exact path='/about' component={About} />
        <Route exact path='/eft' component={EFT} />
        <Route path='*' component={Footer} />
      </div>
    </BrowserRouter>
  );
};

export default App;
ReactDOM.render(<App />, document.getElementById('root'));