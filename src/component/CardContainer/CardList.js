import React from 'react';
import Card from './Card';

const CardList = ({ projects }) => {
  return (
    <div className='cards-list'>
      {projects.map(project => (
        <Card title={project.title} imgLink={project.imgLink} />
      ))}
    </div>
  );
};
export default CardList;
