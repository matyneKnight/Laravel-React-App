import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Add extends Component {
    render() {
        return (
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label for="personal">Personal</label>
                  <input id="personal" type="text" placeholder="Enter Personal Name"/>
                </div>
                <div className="form-group">
                  <label for="code">Code</label>
                  <input id="code" type="text" placeholder="Enter Code Name"/>
                </div>
                <div className="form-group">
                  <label for="section">Section</label>
                  <input id="section" type="text" placeholder="Enter Section Name"/>
                </div>
                <div className="form-group">
                  <label for="affect">Affectation</label>
                  <input id="affect" type="text" placeholder="Enter Destination Name"/>
                </div>
                <div className="form-group">
                  <label for="status">Status</label>
                  <input id="status" type="text" placeholder="Give His Status"/>
                </div>
                <button className="btn btn-success">Submit</button>
              </form>
            </div>
        );
    }
}
