import React, { Component } from 'react';

class JoinModal extends Component {
  handleClickModalBackground = e => {
    if (e.target.classList.contains('home-modal')) {
      this.props.hideModal();
    }
  };
  hideModal = () => {
    const { history, match } = this.props;
    history.push(`/${match.params.roomId}`);
  };
  render() {
    return (
      <div className='home-modal' onClick={this.handleClickModalBackground}>
        <div className='modal-content'>
          <h2>Join a Room!</h2>
          <h4>Room ID</h4>
          <input type='text' />
          <h4>Password</h4>
          <input type='text' />

          <div className='btn'>Join your Room</div>
        </div>
      </div>
    );
  }
}
export default JoinModal;
