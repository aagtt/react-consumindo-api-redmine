import ReactComponent, {Component} from 'react';
import React from 'react';

class ProjectList extends Component{
       constructor(props){
         super(props);
       }

       render() {
          const {project} = this.props; 
          const {projects} = project;
            return (
            <div className="thumbnail">
            <div className ="caption">
            <div class="form-group">
              <label>Projetos</label>
              <select className="form-control" >
              {projects.map((project, key)=>{
                return (
                 <option value={project.id} key={key}>
                 {project.name}
                 </option>)
              })}
              </select>
            </div>
            </div>
            </div>
            );
      }
}

export default ProjectList;