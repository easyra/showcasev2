import React, { Component } from 'react';
import NavBar from './NavBar/NavBar';
import CardContainer from './CardContainer/CardContainer';

class RoomContainer extends Component {
  render() {
    return (
      <>
        <NavBar />
        <CardContainer />
      </>
    );
  }
}

export default RoomContainer;
