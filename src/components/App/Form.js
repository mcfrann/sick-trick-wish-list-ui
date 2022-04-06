import React, { Component } from 'react' 
import './Form.css'

class Form extends Component {
  constructor(props) {
    super()
    this.state = {
      stance: '',
      name: '',
      obstacle: '',
      tutorial: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const newTrick = {
      id: Date.now(),
      ...this.state
    }
    this.props.addTrick(newTrick)
    this.clearInputs()
  }

  clearInputs = () => {
    this.setState({
      stance: '',
      name: '',
      obstacle: '',
      tutorial: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          <select id='stance' name='stance' onChange={this.handleChange}>
            <option value="" disabled selected hidden>choose stance:</option>
            <option value="regular">regular</option>
            <option value="switch">switch</option>
          </select>
        <input type='text' id='name' name="name" value={this.state.name} onChange={this.handleChange} placeholder="name of trick"/>
          <select id='obstacle' name='obstacle' onChange={this.handleChange}>
            <option value="" disabled selected hidden>choose obstacle:</option>
            <option value="flatground">flatground</option>
            <option value="ledge">ledge</option>
            <option value="rail">rail</option>
            <option value="stairs">stairs</option>
            <option value="pool">pool</option>
          </select>
          <input type='text' id='tutorial' name="tutorial" value={this.state.tutorial} onChange={this.handleChange} placeholder="tutorial link"/>
          <input id="submit" type="submit" value="Submit" onClick={event => {this.handleSubmit(event)}}/>
      </form>
    )
  }
}

export default Form