import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        
        <div class="header">
          <h1>Intelligent Payee</h1>
        </div>

        <div class="menu">
          <ul>
            <li>Payments</li>
            <li>Refund</li>
            <li>Report</li>
            <li>Receivables</li>
            <li>Sales</li>
            <li>Users</li>
          </ul>
        </div>

      </div>
    );
  }
}


