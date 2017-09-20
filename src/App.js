import React, { Component } from 'react';

import Header from './components/headerComponent/header';
import Sidebar from './components/sidebarComponent/sidebar';
import Properties from './components/pagesComponent/properties';
import Dashboard from './components/pagesComponent/DashboardComponent/dashboard';
import GoogleMap from './components/mapComponent/googlemap';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Header />
        </div>
        <div className="row">
          <div className="col-md-1">
            <Sidebar />
          </div>
          <div className="col-md-11 grey-background">
            <Dashboard />
          </div>
        </div>
      </div>
      
    );
  }
}

export default App;
