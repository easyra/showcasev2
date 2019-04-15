import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class UploadModal extends Component {
  handleClickModalBackground = e => {
    if (e.target.classList.contains('modal')) {
      this.hideModal();
    }
  };
  hideModal = () => {
    const { history, match } = this.props;
    history.push(`/${match.params.roomId}`);
  };
  render() {
    console.log(this.props);
    return (
      <div className='modal' onClick={this.handleClickModalBackground}>
        <div className='modal-content'>
          <h2>Upload Projects!</h2>
          <div className='input-content'>
            <h4>
              Name: <input type='text' />
            </h4>
            <h4>
              Period: <input type='text' />
            </h4>
            <h4>
              Project: <input type='text' />
            </h4>
            <h4>
              Img: <input type='text' />
            </h4>
          </div>
          <div style={{ marginLeft: 'auto' }} className='btn'>
            Submit
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(UploadModal);
