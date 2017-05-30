import React from 'react';
import ReactComponent, {Component} from 'react';
import SearchProject from './SearchProject';
import ProjectInfo from './ProjectInfo';

class RedMine extends Component{
  constructor(props){
    super(props);
  this.state= {
      project: null
    };
   this.updateProject = this.updateProject.bind(this);
  }
  
  updateProject(project) {
    this.setState({project: project});
  }
  
  // updateTickets: function(tickets) {
    //   this.setState({tickets: tickets});
    // },
    
    render() {
      return (
      <div className="container">
      <SearchProject
      updateProject={this.updateProject}
      //  updateTickets={this.updateTickets}
      />
      <ProjectInfo 
      project={this.state.project}
      //  tickets={this.state.tickets}
      />
      </div>
      );
    }
  }
  
  export default RedMine;