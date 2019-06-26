import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './partials/Header';
import Footer from './partials/Footer';
import {BrowserRouter as Router} from 'react-router-dom';

export default class Index extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="card">
                        <Header />
                        <Footer />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<Router><Index /></Router>, document.getElementById('app'));
}
