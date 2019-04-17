import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { storageRef, databaseRef } from '../firebase';

class UploadModal extends Component {
  state = {
    fullNameInput: '',
    periodInput: '1',
    projectInput: 'projecttitle',
    linkInput: '',
    imgInput: '',
    imgFile: null,
    loading: false
  };
  handleClickModalBackground = e => {
    if (e.target.classList.contains('modal')) {
      this.hideModal();
    }
  };
  hideModal = () => {
    const { history, match } = this.props;
    history.push(`/${match.params.roomId}`);
  };
  handleChange = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  };
  handleFiles = e => {
    const file = e.currentTarget.files[0];
    this.setState({ [e.currentTarget.name]: e.target.value, imgFile: file });
  };
  handleValidation = (fullName, period, link, imgFile, projectInput) => {
    if (!(fullName && period && imgFile && projectInput && link)) {
      alert('All fields must be completed.');
      return true;
    }
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    if (!urlRegex.test(link)) {
      alert('Link must start with an https:// or http://');
      return true;
    }
    return false;
  };
  handleSubmit = event => {
    const { roomId } = this.props.match.params;
    const id = databaseRef.push().key;
    this.setState({ loading: true });
    event.preventDefault();
    const {
      fullNameInput,
      periodInput,
      linkInput,
      imgFile,
      projectInput
    } = this.state;
    if (
      this.handleValidation(
        fullNameInput,
        periodInput,
        linkInput,
        imgFile,
        projectInput
      )
    ) {
      this.setState({ loading: false });
      return;
    }
    storageRef
      .child(`${roomId}/${id}`)
      .put(imgFile)
      .then(async () => {
        const img = await storageRef.child(`${roomId}/${id}`).getDownloadURL();
        let updateObject = {};
        const newProject = {
          title: fullNameInput,
          period: parseInt(periodInput),
          link: linkInput,
          projectTitle: projectInput,
          img
        };
        updateObject[
          `${roomId}-${projectInput}-period${periodInput}/${id}`
        ] = newProject;
        updateObject[`${roomId}-${projectInput}-all/${id}`] = newProject;
        await databaseRef.update(updateObject);
        this.setState({
          fullNameInput: '',
          periodInput,
          linkInput: '',
          imgInput: '',
          loading: false,
          imgFile: null
        });
        this.props.history.push(`/${roomId}`);
      })
      .catch(err => console.log(err));
  };

  render() {
    const { history, match, location } = this.props;
    const shouldDisplay =
      location.pathname === `/${match.params.roomId}/upload`;
    return (
      <div
        className='modal'
        style={shouldDisplay ? { display: 'block' } : { display: 'none' }}
        onClick={this.handleClickModalBackground}
      >
        <div className='modal-content'>
          <h2>Upload Projects!</h2>
          <div className='input-content'>
            {/* Student Name */}
            <h4>
              Name:{' '}
              <input
                type='text'
                value={this.state.fullNameInput}
                onChange={this.handleChange}
                name='fullNameInput'
              />
            </h4>
            <h4>
              Period:{' '}
              <select
                name='periodInput'
                value={this.state.periodInput}
                onChange={this.handleChange}
              >
                {['1', '2', '3', '4', '5', '6'].map(n => (
                  <option value={n}>{n}</option>
                ))}
              </select>
            </h4>
            {/* Project title */}
            <h4>
              Project:{' '}
              <input
                type='text'
                name='projectInput'
                value={this.state.projectInput}
                onChange={this.handleChange}
              />
            </h4>
            {/* project link */}
            <h4>
              Link:{' '}
              <input
                type='url'
                name='linkInput'
                value={this.state.linkInput}
                onChange={this.handleChange}
              />
            </h4>
            {/* img link */}
            <h4>
              Img:{' '}
              <input
                onChange={this.handleFiles}
                type='file'
                name='imgInput'
                value={this.state.imgInput}
                accept='.png,.jpg,.jpeg'
              />
            </h4>
          </div>
          <div
            style={{ marginLeft: 'auto' }}
            className={this.state.loading ? 'btn-disabled' : 'btn'}
            onClick={this.handleSubmit}
          >
            Submit
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(UploadModal);
