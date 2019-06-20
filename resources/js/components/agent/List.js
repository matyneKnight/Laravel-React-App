import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class List extends Component {

  constructor(){
    super();
    this.state = { agents : []}
  }

  componentDidMount(){
    axios.get('http://cia_agents.none/agents')
    .then(response => {
      this.setState({agents : response.data});
    });
  }

    render() {
        return (
            <div className="card-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Personal</th>
                      <th scope="col">Code</th>
                      <th scope="col">Section</th>
                      <th scope="col">Affect</th>
                      <th scope="col">Status</th>
                      <th scope="col">Created At</th>
                      <th scope="col">Updated At</th>
                    </tr>
                  </thead>

                  <tbody>
                    {
                      this.state.agents.map(
                        agent => {
                          return (
                            <tr>
                              <th scope="row">{agent.id}</th>
                              <td>{agent.personal_name}</td>
                              <td>{agent.code_name}</td>
                              <td>{agent.section}</td>
                              <td>{agent.affect}</td>
                              <td>{agent.status}</td>
                              <td>{agent.created_at}</td>
                              <td>{agent.updated_at}</td>
                            </tr>
                          )
                        }
                      )
                    }
                  </tbody>
                </table>
            </div>
        );
    }
}
