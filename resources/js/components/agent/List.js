import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Pagination from 'react-js-pagination';

export default class List extends Component {

  constructor(){
    super();
    this.state = {
      agents : [],
      activePage : 1,
      itemsCountPerPage : 1,
      totalItemsCount : 1,
      pageRangeDisplayed : 3
    }
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(pageNumber){
    axios.get('http://cia_agents.none/api/agents?page='+pageNumber)
    .then(response => {
      this.setState({
        agents : response.data.data,
        activePage : response.data.current_page,
        itemsCountPerPage : response.data.per_page,
        totalItemsCount : response.data.total,
      });
    });
  }

  componentDidMount(){
    axios.get('http://cia_agents.none/api/agents')
    .then(response => {
      this.setState({agents : response.data.data});
    });
  }

  onDeleteAgent(agent_id){
    axios.delete('http://cia_agents.none/api/agents/delete/'+agent_id)
    .then(response => {
      var new_agents = this.state.agents;
      for (var i = 0; i < new_agents.length; i++) {
        if (new_agents[i].id == agent_id) {
            new_agents.splice(i,1);
            this.setState({
              agents : new_agents
            })
        }
      }
    })
  }

    render() {
        return (
            <div className="card-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Personal</th>
                      <th scope="col">Code</th>
                      <th scope="col">Section</th>
                      <th scope="col">Affect</th>
                      <th scope="col">Status</th>
                      <th scope="col">Created At</th>
                      <th scope="col">Updated At</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>

                  <tbody>
                    {
                      this.state.agents.map(
                        agent => {
                          return (
                            <tr>
                              <td>{agent.personal_name}</td>
                              <td>{agent.code_name}</td>
                              <td>{agent.section}</td>
                              <td>{agent.affect}</td>
                              <td>{agent.status}</td>
                              <td>{agent.created_at}</td>
                              <td>{agent.updated_at}</td>
                              <td>
                                <Link to={`/agents/edit/${agent.id}`} className="btn btn-info">Edit</Link>
                                <a href="#" className="btn btn-danger" onClick={this.onDeleteAgent.bind(this,agent.id)}>Delete</a></td>
                            </tr>
                          )
                        }
                      )
                    }
                  </tbody>
                </table>
                <div class="d-flex justify-content-center">
                <Pagination
                  activePage={this.state.activePage}
                  itemsCountPerPage={this.state.itemsCountPerPage}
                  totalItemsCount={this.state.totalItemsCount}
                  pageRangeDisplayed={3}
                  onChange={this.handlePageChange}
                  itemClass="page-item"
                  linkClass="page-link"
                />
              </div>
            </div>
        );
    }
}
