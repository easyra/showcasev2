import React, { Component } from 'react';
import RoomContainer from './RoomContainer';
import { Route, Switch } from 'react-router-dom';
import HomeContainer from './HomeContainer/HomeContainer';
class AppContainer extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route strict path='/:roomId' render={props => <RoomContainer />} />
          <Route exact strict path='/' render={props => <HomeContainer />} />
        </Switch>
      </>
    );
  }
}

export default AppContainer;
