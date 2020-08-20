import React, { Component } from 'react';

export default class EventUpdateForm extends Component {

    constructor(props){
        super(props)
        this.state={
            name:'',
            date:'',
            description:'',
            url:'',
            venue:'',
            time:'',
            link:''
        }
    }
    componentDidMount(){
        const {event}=this.props
       // console.log(event)
        this.setState({
            name:event.name,
            date:event.date,
            description:event.description,
            url:event.url,
            venue:event.venue,
            time:event.time,
            link:event.link
        })
    }
    

    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    handleSubmit=(e)=>{
        e.preventDefault();
      //  console.log("coming here")
        this.props.updateEvent({...this.state},this.props.event.id);
        this.setState({
            name:'',
            date:'',
            description:'',
            url:'',
            venue:'',
            time:'',
            link:''
        })
    }
  render() {
      const {name,date,venue,url,time,description,link}=this.state
      //const {event}=this.props
      
    return (
        <div style={{backgroundColor:"lightblue",display:"inline-block",height:"100vh",width:"33.33%"}}>
        <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">EventName:</label><br />
        <input type="text" id="name" name="name" value={name} onChange={this.handleChange}/><br />
        <label htmlFor="date">Date:</label><br />
        <input type="text" id="date" name="date" value={date} onChange={this.handleChange}/><br /><br />
        <label htmlFor="date">URL:</label><br />
        <input type="text" id="url" name="url" value={url} onChange={this.handleChange}/><br /><br />
        <label htmlFor="date">Venue:</label><br />
        <input type="text" id="venue" name="venue" value={venue} onChange={this.handleChange}/><br /><br />
        <label htmlFor="date">Time:</label><br />
        <input type="text" id="time" name="time" value={time} onChange={this.handleChange}/><br /><br />
        <label htmlFor="date">Description:</label><br />
        <input type="text" id="description" name="description" value={description} onChange={this.handleChange}/><br /><br />
        <label htmlFor="link">Link:</label><br />
        <input type="text" id="link" name="link" value={link} onChange={this.handleChange}/><br /><br />
        <input type="submit" value="Submit"/>
        </form>
        </div>
    );
  }
}
