import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './Search';
import { Container, Row, Col } from 'mdbreact';

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
