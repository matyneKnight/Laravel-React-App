import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import Home from './../Home';
import About from './../About';
import Agent from './../agent/Index';
import Visage from './../visage/Index';

export default class Header extends Component {
    render() {
        return (
          <div>
              <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/agents">Agents</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/facial_rekognition">Rekognition</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                  </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                  <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
              </div>
            </nav>

            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/agents" component={Agent}/>
            <Route exact path="/facial_rekognition" component={Visage}/>
            </div>
          </div>
        );
    }
}
