import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class List extends Component {
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
                    <tr>
                      <th scope="row"></th>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
            </div>
        );
    }
}
