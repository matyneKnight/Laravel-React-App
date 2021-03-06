import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class Add extends Component {

  constructor(){
    super();
    this.onChangePersonal = this.onChangePersonal.bind(this);
    this.onChangeCode = this.onChangeCode.bind(this);
    this.onChangeSection = this.onChangeSection.bind(this);
    this.onChangeAffect = this.onChangeAffect.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      personal : '',
      code : '',
      section : '',
      affect : '',
      status : ''
    }
  }


  onChangePersonal(e){
      this.setState({personal : e.target.value});
  }

  onChangeCode(e){
      this.setState({code : e.target.value});
  }

  onChangeSection(e){
      this.setState({section : e.target.value});
  }

  onChangeAffect(e){
      this.setState({affect : e.target.value});
  }

  onChangeStatus(e){
      this.setState({status : e.target.value});
  }

  onSubmit(e){
    e.preventDefault();
    const agent = {
      personal_name : this.state.personal,
      code_name : this.state.code,
      section : this.state.section,
      affect : this.state.affect,
      status : this.state.status
    }

    axios.post('http://cia_agents.none/api/agents/store',agent)
    .then(response => {
        console.log(response.data);
    });
  }

    render() {
        return (
            <div className="card-body">
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label for="personal">Personal</label>
                  <input className="form-control" id="personal" value={this.state.personal} onChange={this.onChangePersonal} type="text" placeholder="Enter Personal Name"/>
                </div>
                <div className="form-group">
                  <label for="code">Code</label>
                  <input className="form-control" id="code" value={this.state.code} onChange={this.onChangeCode} type="text" placeholder="Enter Code Name"/>
                </div>
                <div className="form-group">
                  <label for="section">Section</label>
                  <input className="form-control" id="section" value={this.state.section} onChange={this.onChangeSection} type="text" placeholder="Enter Section Name"/>
                </div>
                <div className="form-group">
                  <label for="affect">Affectation</label>
                  <input className="form-control" id="affect" value={this.state.affect} onChange={this.onChangeAffect} type="text" placeholder="Enter Destination Name"/>
                </div>
                <div className="form-group">
                  <label for="status">Status</label>
                  <input className="form-control" id="status" value={this.state.status} onChange={this.onChangeStatus} type="text" placeholder="Give His Status"/>
                </div>
                <button type="submit" className="btn btn-success">Submit</button>
              </form>
            </div>
        );
    }
}
