import React, { Component } from 'react';

export default class DeleteForm extends Component {
    constructor(props){
        super(props)
        this.state={
            name:'',
        }
    }

    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.deleteEvent(this.state.name);
        this.setState({
            name:'',
        })
    }
  render() {
    return (
        <div >
        <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">EventName:</label><br />
        <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleChange}/><br />
        <input type="submit" value="Submit"/>
        </form>
        </div>
    );
  }
}
