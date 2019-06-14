import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './partials/Header'
import Footer from './partials/Footer'

export default class Index extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                        <Header />
                            <div className="card-body">I'm an example component!</div>
                        <Footer />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<Index />, document.getElementById('app'));
}
