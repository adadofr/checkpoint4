import React from 'react';
import '../Style/ProjectContent.css'

function ProjectContent ({ a }) {
    
  return (
    <div className='projectContent'>
        {a.map(projet => {
          return (
            <div className='projectContent-card'>
                <h2>{projet.name}</h2>
                <p>Duration: {projet.duration}</p>
            </div>
          );
        })}
        
    </div>
  );}

export default ProjectContent;