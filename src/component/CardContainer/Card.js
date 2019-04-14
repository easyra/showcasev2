import React, { Component } from 'react';

class Card extends Component {
  render() {
    const { title, imgLink } = this.props;
    return (
      <>
        <div className='card'>
          <img src={imgLink} />
          <div class='card-container'>
            <h2>{title}</h2>
          </div>
        </div>
      </>
    );
  }
}

export default Card;
