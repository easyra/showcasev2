import React, { Component } from 'react';
import RoomContainer from './RoomContainer';
import { Route } from 'react-router-dom';

class AppContainer extends Component {
  render() {
    return (
      <>
        <Route strict path='/:roomId' render={props => <RoomContainer />} />
      </>
    );
  }
}

export default AppContainer;
