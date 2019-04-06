import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './component/clock/Clock';

class App extends Component {
  render() {
    return (
     <Clock endTimeText="April 30,2019 00:00:00" />
    );
  }
}

export default App;
