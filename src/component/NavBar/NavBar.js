import React, { Component } from 'react';

const NavBar = () => {
  return (
    <header className='navbar'>
      <nav className='navbar-content'>
        <h1>Showcase</h1>
        <div className='navbar-items'>
          <a>Projects</a>
          <a>Upload</a>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
