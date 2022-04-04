import React, { Component } from 'react'


class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      URL: '',
    }

  }

  handleChange = (event) => {

    if (event.target.id === "name"){
      this.setState({name: event.target.value})
    }
    else{
      this.setState({URL: event.target.value})
    }
 
  }

  

  onFormSubmit = (event) => {
    // to prevent page reload on form submit
    event.preventDefault()

    let newFavLink = {name: this.state.name, URL: this.state.URL};
    this.props.handleSubmit(newFavLink);
    this.setState({ name: '', URL: ''});

  }

  render() {
    return (

      <form>

        <label>Name</label> 
        <br></br>
        <input type="text" id = "name" value = {this.state.name} onChange={this.handleChange} style={{width: "500px",height:"25px"}}/>
        <br></br>
        <br></br>
        <label>URL</label>
        <br></br>
        <input type="text" id = "URL" value = {this.state.URL} onChange={this.handleChange}  style={{width: "500px",height:"25px"}}/>
        
        <button onClick={this.onFormSubmit} >Submit</button>
      </form>


    )
  }
}


export default Form
