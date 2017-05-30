import React from 'react';
import ProjectList from './ProjectList';

const ProjectInfo = ({project}) => {
   var projectInfo = project ? (
      <div className="row">
        <div className="col-lg-4">
          <h2>Quantidade projetos: {project.total_count}</h2>
        <div className="col-lg-8">
          <ProjectList project={project}/>
        </div>
        </div>
      </div>
    ): null
  return projectInfo;
}

ProjectInfo.propTypes = {
  project: React.PropTypes.array,
}
export default ProjectInfo;