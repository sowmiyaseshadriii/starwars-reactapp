import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import Peoples from './components/Peoples';


class App extends Component {
  state ={
    peoples: []
  }

  getPeople = async (e) => {
    const peopleName = e.target.elements.peopleName.value;
    e.preventDefault();
    const apicall = await fetch(`https://swapi.co/api/people/?search=${peopleName}`);
    const data = await apicall.json();
    this.setState({
      peoples : data.results
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React-StarWars</h1>
        </header>
        <Form getPeople={this.getPeople} />
        <Peoples peoples={this.state.peoples}/> 
      </div>
    );
  }
}

export default App;
