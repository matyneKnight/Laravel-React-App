import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Add from './Add';
import List from './List';

export default class Agent extends Component {
    render() {
        return (
            <div className="card-body">
              <Router>
                <div>
                  <Link className="btn btn-primary" to="/agents">List</Link>
                  <Link className="btn btn-primary" to="/agents/add">Add</Link>

                  <Route exact path="/agents" component={List}/>
                  <Route exact path="/agents/add" component={Add}/>
                </div>
              </Router>
            </div>
        );
    }
}
