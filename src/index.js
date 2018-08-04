import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import NavBar from './components/navbar';
import HomePage from './components/home-page';
import About from './components/about';
import EFT from './components/eft';
import Footer from './components/footer';
import IntensiveTherapy from './components/intensive-therapy';
import Resources from './components/resources';
import Blog from './components/blog';
import Contact from './components/contact';

import './style/main.scss';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path='*' component={NavBar} />
        <Route exact path='/' component={HomePage} />
        <Route exact path='/about' component={About} />
        <Route exact path='/what-is-eft' component={EFT} />
        <Route exact path='/intensive-therapy' component={IntensiveTherapy} />
        <Route exact path='/resources' component={Resources} />
        <Route exact path='/blog' component={Blog} />
        <Route exact path='/contact' component={Contact} />
        <Route path='*' component={Footer} />
      </div>
    </BrowserRouter>
  );
};

export default App;
ReactDOM.render(<App />, document.getElementById('root'));