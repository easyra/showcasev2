import React, { Component } from 'react';
import { databaseRef } from '../../firebase';
import bcrypt from 'bcryptjs';
import { withRouter } from 'react-router-dom';

class CreateRoomModal extends Component {
  state = {
    roomIdInput: '',
    passwordInput: '',
    roomTitleInput: '',
    roomUrlInput: '',
    urlExists: false,
    project1Input: '',
    project2Input: '',
    project3Input: '',
    loading: false
  };
  handleClickModalBackground = e => {
    if (e.target.classList.contains('home-modal')) {
      this.props.hideModal();
    }
  };
  hideModal = () => {
    const { history, match } = this.props;
    history.push(`/${match.params.roomId}`);
  };
  handleChange = async e => {
    const { name, value } = e.target;
    if (name === 'roomIdInput') {
      const roomUrlInput = value.replace(/\s/g, '-').toLowerCase();
      const newState = { roomIdInput: value, roomUrlInput: roomUrlInput };
      this.setState(newState);
      //Checks if URL exists in RealTime Database
      const urlExists = (await databaseRef
        .child(`rooms/${roomUrlInput}`)
        .once('value')).exists();
      this.setState({ urlExists });
    } else {
      this.setState({ [name]: value });
    }
  };
  handleSubmit = async () => {
    const {
      roomIdInput,
      passwordInput,
      roomTitleInput,
      roomUrlInput,
      project1Input,
      project2Input,
      project3Input
    } = this.state;

    const projectTitles = [project1Input, project2Input, project3Input];
    this.setState({ loading: true });

    const urlExists = (await databaseRef
      .child(`rooms/${roomUrlInput}`)
      .once('value')).exists();

    if (urlExists) {
      this.setState({ loading: false });
      alert('Url is already taken');
      return;
    }

    //Stores room password as a hash if passwordInput has value
    const updateObject = {};
    updateObject[`rooms/${roomUrlInput}`] = passwordInput
      ? await bcrypt.hash(passwordInput, 14)
      : false;
    projectTitles.forEach(title => {
      if (title) {
        updateObject[`${roomUrlInput}-projecttitles/${title}`] = true;
      }
    });
    updateObject[`${roomUrlInput}-info/title`] = roomTitleInput;
    databaseRef
      .update(updateObject)
      .then(() => {
        this.props.history.push(roomUrlInput);
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    const {
      roomIdInput,
      passwordInput,
      roomTitleInput,
      roomUrlInput,
      project1Input,
      project2Input,
      project3Input,
      loading
    } = this.state;
    return (
      <div className='home-modal' onClick={this.handleClickModalBackground}>
        <div className='modal-content'>
          <h2>Create a Room</h2>
          <h4>Room ID</h4>
          <input
            type='text'
            name='roomIdInput'
            value={roomIdInput}
            onChange={this.handleChange}
          />
          <h4>Room Title</h4>
          <input
            type='text'
            name='roomTitleInput'
            value={roomTitleInput}
            onChange={this.handleChange}
          />
          <h4>Password</h4>
          <input
            type='text'
            name='passwordInput'
            value={passwordInput}
            onChange={this.handleChange}
          />
          <h4>Project 1</h4>
          <input
            type='text'
            name='project1Input'
            value={project1Input}
            onChange={this.handleChange}
          />
          <h4>Project 2</h4>
          <input
            type='text'
            name='project2Input'
            value={project2Input}
            onChange={this.handleChange}
          />
          <h4>Project 3</h4>
          <input
            type='text'
            name='project3Input'
            value={project3Input}
            onChange={this.handleChange}
          />

          <div
            className={loading ? 'btn-disabled' : 'btn'}
            onClick={this.handleSubmit}
          >
            Create your Room
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(CreateRoomModal);
