import React, { Component } from 'react';
import './App.css';
import Search from './Search';
import { Container } from 'mdbreact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <h1>TMDB Search</h1>
          <Search/>
        </Container>
      </div>
    );
  }
}

export default App;
