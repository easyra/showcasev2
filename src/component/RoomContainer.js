import React, { Component } from 'react';
import NavBar from './NavBar/NavBar';
import CardContainer from './CardContainer/CardContainer';
import UploadModal from './UploadModal/UploadModal';
import { Route } from 'react-router-dom';

class RoomContainer extends Component {
  state = {};
  render() {
    return (
      <>
        <NavBar />
        <UploadModal />
        <CardContainer />
      </>
    );
  }
}

export default RoomContainer;
