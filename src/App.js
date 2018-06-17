import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link } from 'react-router-dom'
import HangmanContainer from './containers/HangmanContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Let's play the</h1>
        </header>
        <main>
          <h1>Hangman Game</h1>
          <Link path="/" to="/hangman">Start playing!</Link>
          <br />
          <br />
          <Route exact path="/hangman" component={HangmanContainer} />
        </main>
      </div>
    );
  }
}

export default App;
