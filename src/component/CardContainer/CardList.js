import React from 'react';
import Card from './Card';

const CardList = ({ projects }) => {
  return (
    <div className='cards-list'>
      {projects.map(project => (
        <Card
          name={project.title}
          src={project.img}
          title={project.projectTitle}
          period={project.period}
          link={project.link}
        />
      ))}
    </div>
  );
};
export default CardList;
