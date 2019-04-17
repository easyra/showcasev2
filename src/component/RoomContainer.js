import React, { Component } from 'react';
import NavBar from './NavBar/NavBar';
import CardContainer from './CardContainer/CardContainer';
import UploadModal from './UploadModal/UploadModal';
import { databaseRef } from './firebase';
import { Route, withRouter } from 'react-router-dom';

class RoomContainer extends Component {
  state = { projects: [] };
  render() {
    return (
      <>
        <NavBar />
        <UploadModal />
        <CardContainer projects={this.state.projects} />
      </>
    );
  }
  componentDidMount = () => {
    const roomId = this.props.match.params.roomId;
    databaseRef.on('value', snapshot => {
      const projects = snapshot.child(`${roomId}-projecttitle-all`).exists()
        ? Object.values(snapshot.child(`${roomId}-projecttitle-all`).val())
        : [];
      this.setState({ projects });
    });
  };
}

export default withRouter(RoomContainer);
