import React, { Component } from 'react';
import './App.css';
import Tabs from './tabs'
import Form from './Form'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Dojo Dossier</h1>
        </header>
        <Form />
        <Tabs />
      </div>
    );
  }
}

export default App;
