import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { databaseRef } from '../firebase';
import JoinModal from './JoinModal/JoinModal';
import CreateRoomModal from './CreateRoomModal/CreateRoomModal';
import bcrypt from 'bcryptjs';

class HomeContainer extends Component {
  state = {
    joinModalIsOpen: false,
    createModalIsOpen: false
  };
  openJoinModal = () => {
    this.setState({ joinModalIsOpen: true, createModalIsOpen: false });
  };
  closeModals = () => {
    this.setState({ joinModalIsOpen: false, createModalIsOpen: false });
  };
  openCreateRoomModal = () => {
    this.setState({ joinModalIsOpen: false, createModalIsOpen: true });
  };
  toggleModalsKeyup = e => {
    const { joinModalIsOpen, createModalIsOpen } = this.state;
    if (e.keyCode === 74) {
      if (!joinModalIsOpen && !createModalIsOpen) {
        //checks if no modal is open
        this.openJoinModal();
      }
    } else if (e.keyCode === 67) {
      if (!joinModalIsOpen && !createModalIsOpen) {
        //checks if no modal is open
        this.openCreateRoomModal();
      }
    }
  };

  render() {
    return (
      <>
        <div className='home'>
          <div className='home-content'>
            <h1>Showcase!</h1>
            <h4 onClick={this.openJoinModal} className='btn'>
              Join Room
            </h4>
            <h4 onClick={this.openCreateRoomModal} className='btn'>
              Create Room
            </h4>
          </div>
        </div>
        {this.state.joinModalIsOpen && (
          <JoinModal hideModal={this.closeModals} />
        )}
        {this.state.createModalIsOpen && (
          <CreateRoomModal hideModal={this.closeModals} />
        )}
      </>
    );
  }
  componentWillMount = () => {
    document.addEventListener('keyup', this.toggleModalsKeyup);
    databaseRef.child('rooms').on('value', () => {});
  };
  componentWillUnmount = () => {
    document.removeEventListener('keyup', this.toggleModalsKeyup);
  };
}

export default withRouter(HomeContainer);
