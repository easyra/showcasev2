import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import JoinModal from './JoinModal/JoinModal';
import CreateRoomModal from './CreateRoomModal/CreateRoomModal';

class HomeContainer extends Component {
  state = {
    joinModel: false,
    createModal: false
  };
  joinRoom = () => {
    this.setState({ joinModel: true, createModal: false });
  };
  closeModals = () => {
    this.setState({ joinModel: false, createModal: false });
  };
  createRoom = () => {
    this.setState({ joinModel: false, createModal: true });
  };
  toggleModals = e => {
    const { joinModel, createModal } = this.state;
    if (e.keyCode === 74) {
      joinModel ? this.closeModals() : this.joinRoom();
    } else if (e.keyCode === 67) {
      createModal ? this.closeModals() : this.createRoom();
    }
  };

  render() {
    return (
      <>
        <div className='home'>
          <div className='home-content'>
            <h1>Showcase!</h1>
            <h4 onClick={this.joinRoom} className='btn'>
              Join Room
            </h4>
            <h4 onClick={this.createRoom} className='btn'>
              Create Room
            </h4>
          </div>
        </div>
        {this.state.joinModel && <JoinModal hideModal={this.closeModals} />}
        {this.state.createModal && (
          <CreateRoomModal hideModal={this.closeModals} />
        )}
      </>
    );
  }
  componentWillMount = () => {
    document.addEventListener('keyup', this.toggleModals);
  };
  componentWillUnmount = () => {
    document.removeEventListener('keyup', this.toggleModals);
  };
}

export default withRouter(HomeContainer);
