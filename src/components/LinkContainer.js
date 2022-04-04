import React from 'react'
import Table from './Table';
import Form from './Form';

class LinkContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      favLinks: []
    }
  }

  handleRemove = (index) => {

    var array = [...this.state.favLinks];
    array.splice(index, 1)
    this.setState({favLinks:array})
  }

  handleSubmit = (favLink) => {

    let newLink = [...this.state.favLinks, favLink]
    this.setState({favLinks: newLink})
  }

  render() {
    return (
      <div className="container">
        <h1>My Favorite Links</h1>
        <p>Add a new url with a name and link to the table.</p>
        <Table linkData={this.state.favLinks}  removeLink={this.handleRemove}/>

        <br />

        <h3>Add New</h3>
        <Form  handleSubmit= {this.handleSubmit}/>
      </div>
    )
  }
}

export default LinkContainer
