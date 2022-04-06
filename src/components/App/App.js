import React, { Component } from 'react';
import TrickList from './TrickList'
import Form from './Form'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      tricks: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/tricks')
      .then(response => response.json())
      .then(data => this.setState({
        tricks: data
      }))
  }

  // postTrick = (newTrick) => {
  //   fetch('http://localhost:3001/api/v1/tricks', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ stance: this.state.stance,
  //     name: this.state.name,
  //     obstacle: this.state.obstacle,
  //     tutorial: this.state.tutorial
  //   })
  //     .then(response => response.json(newTrick))
  //     .then(data => this.setState({
  //       tricks: data
  //     }))
  //   })
  // }

  addTrick = (newTrick) => {
    this.setState({
      tricks: [...this.state.tricks, newTrick]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        <Form addTrick={this.addTrick}/>
        <TrickList tricks={this.state.tricks}/>
      </div>
    );
  }
}

export default App;