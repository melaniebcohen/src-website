import React from 'react';
import { Link } from 'react-router-dom';
import './_navbar-style.scss';

const HomePage = () => {
  return ( 
    <div className='navbar'>
      <h1>Susan Raab-Cohen, PhD</h1>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/what-is-eft'>What is EFT?</Link></li>
        <li><Link to='/intensive-therapy'>Intensive Therapy</Link></li>
        <li><Link to='/resources'>Resources</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </ul>
    </div>
  );
}

export default HomePage;
