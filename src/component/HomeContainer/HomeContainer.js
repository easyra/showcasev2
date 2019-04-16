import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import JoinModal from './JoinModal/JoinModal';
import CreateRoomModal from './CreateRoomModal/CreateRoomModal';

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
      joinModalIsOpen ? this.closeModals() : this.openJoinModal();
    } else if (e.keyCode === 67) {
      createModalIsOpen ? this.closeModals() : this.openCreateRoomModal();
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
  };
  componentWillUnmount = () => {
    document.removeEventListener('keyup', this.toggleModalsKeyup);
  };
}

export default withRouter(HomeContainer);
