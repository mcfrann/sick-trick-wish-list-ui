import React, { Component } from 'react' 

class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      stance: '',
      obstacle: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
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
        <input type='text' name="name" value={this.state.value} onChange={this.handleChange} placeholder="Name of trick"/>
          <select id='obstacle' name='obstacle' onChange={this.handleChange}>
            <option value="" disabled selected hidden>choose obstacle:</option>
            <option value="flatground">flatground</option>
            <option value="ledge">ledge</option>
            <option value="rail">rail</option>
            <option value="stairs">stairs</option>
            <option value="pool">pool</option>
          </select>
          <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default Form