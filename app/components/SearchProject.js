import ReactComponent, {Component} from 'react';
import React from 'react';
import RedMineProjects from '../services/RedMineProjects';

class SearchProject extends Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault(); 
  
  RedMineProjects.getAllProjects().then((response) => {
      this.props.updateProject(response.data);
    });
   }

  render() {
    return (
      <div className="jumbotron">
        <h1>Redmine Projects</h1>
        <div className="row">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Project</label>
              <input
                type="text"
                ref="project"
                className="form-control"
                placeholder=""
                />
            </div>
            <button
              type="submit"
              className="btn btn-primary">Buscar
            </button>
          </form>
        </div>
      </div>
    );
  }
}


SearchProject.propTypes = {
  updateProject: React.PropTypes.func.isRequired,
  // updateTickets: React.PropTypes.func.isRequired,
};

export default SearchProject;