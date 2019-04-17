import React, { Component } from 'react';
import CardList from './CardList';

class CardContainer extends Component {
  render() {
    const { projects } = this.props;
    return (
      <div className='cards-container'>
        <CardList projects={projects} />
      </div>
    );
  }
}

export default CardContainer;
