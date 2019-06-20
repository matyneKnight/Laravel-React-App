import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class Visage extends Component {
  constructor(props) {
  super(props);
  this.state = {
    image: null,
  };
  this._handleImageChange = this._handleImageChange.bind(this);
  this._handleSubmit = this._handleSubmit.bind(this);
}

_handleSubmit(e) {
  e.preventDefault();
  axios.post('http://cia_agents.none/facial_rekognition/enroll',this.state.image)
  .then(response => {
      console.log(response.data);
  });
}

_handleImageChange(e) {
  e.preventDefault();
  this.setState({
    image:e.target.files[0]
  })
}

    render() {
        return (
          <div className="card-body">
            <form onSubmit={this._handleSubmit}>
              <div className="form-group">
                <label for="visage">Visage</label>
                <input className="form-control-file" onChange={this._handleImageChange} id="visage" name='visage' type="file" accept="image/x-png,image/jpg,image/jpeg"/>
              </div>

              <button type="submit" onClick={this._handleSubmit} className="btn btn-info">Enroll</button>
            </form>
          </div>
        );
    }
}
