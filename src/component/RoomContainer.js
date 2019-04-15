import React, { Component } from 'react';
import NavBar from './NavBar/NavBar';
import CardContainer from './CardContainer/CardContainer';
import UploadModal from './UploadModal/UploadModal';
import { Route } from 'react-router-dom';

class RoomContainer extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Route path='/:roomId/upload' render={props => <UploadModal />} />
        <CardContainer />
      </>
    );
  }
}

export default RoomContainer;
