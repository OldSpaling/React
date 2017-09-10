import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <div className="container">
            <div className="label_input">
              <label htmlFor="username">User Name:</label><input id="username" type="text" />
            </div>
            <div className="label_input">
              <label htmlFor="password">Password:</label><input id="password" type="password" />
            </div>
            <div className="btn_container">
               <a href="javascript:void(0)">登录</a> 
               <a href="javascript:void(0)">注册</a> 
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
