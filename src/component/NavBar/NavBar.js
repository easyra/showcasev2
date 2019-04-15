import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

const NavBar = ({ history, match }) => {
  const launchUploadModal = () => {
    history.push(`/${match.params.roomId}/upload`);
  };
  return (
    <header className='navbar'>
      <nav className='navbar-content'>
        <h1>Showcase</h1>
        <div className='navbar-items'>
          <a>Projects</a>
          <a onClick={launchUploadModal}>Upload</a>
        </div>
      </nav>
    </header>
  );
};

export default withRouter(NavBar);
