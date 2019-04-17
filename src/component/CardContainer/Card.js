import React, { Component } from 'react';

class Card extends Component {
  render() {
    const { title, src, name, period, link } = this.props;
    return (
      <>
        <div className='card'>
          <a href={link}>
            <img src={src} />
          </a>

          <div class='card-container'>
            <h2>{title}</h2>
            <h4>{name}</h4>
            <h4>Period {period}</h4>
          </div>
        </div>
      </>
    );
  }
}

export default Card;
