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
        <li><Link to='/eft'>What is EFT?</Link></li>
        <li>Intensive Therapy</li>
        <li>Resources</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default HomePage;
