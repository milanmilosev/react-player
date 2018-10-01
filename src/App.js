import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let textColor = "#fff";

class Aggregate extends Component {
  render() {
    return (
      <div style={{width: "40%", display: "inline-block"}}>
        <h2 style={{color: "#fff"}}>Number Text</h2>
      </div>
    );
  }
}

class Filter extends Component {
  render() {
    return (
      <div>
        <img/>
        <input type="text"/>Filter
      </div>
    );
  }
}

class Playlist extends Component {
  render() {
    return (
      <div style={{width: "25%"}}>
        <img/>
        <h3>Playlist Name</h3>
        <ul>
          <li>Song 1</li>
          <li>Song 2</li>
          <li>Song 3</li>
        </ul>
      </div>
    );
  }
}


class App extends Component {

  render() {
    let name = 'Milan';
    return (
      <div className="App">
          <h1 className="App-title">Title</h1>
          <Aggregate/>
          <Aggregate/>
          <Filter/>
          <Playlist/>
          <Playlist/>
          <Playlist/>
          <Playlist/>
      </div>
    );
  }
}

export default App;
