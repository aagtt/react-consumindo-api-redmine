import axios from 'axios';

const url = '/api/projects.json';
const urlIssues = '/api/issues.json';
let username = 'augusto.rosa';
let password = 'augustoguto';
let auth = 'Basic ' + btoa(username + ':' + password);
const request = { headers: {Authorization: auth}};
var RedMineProjects = {

  
  getAllProjects() {
    return axios.get(url, request);
  },
  
  getTicketsByProject(idProject){
    return axios.get(urlIssues+'?project_id='+idProject, request);
  }
};

export default RedMineProjects;