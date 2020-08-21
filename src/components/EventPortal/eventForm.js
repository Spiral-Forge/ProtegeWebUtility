import React, { Component } from 'react';

export default class EventForm extends Component {

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
    
    componentDidUpdate(){
        //console.log("is this getting preinted?")
        const {event}=this.props
        //console.log(this.props)
        // if(event){
        //     console.log("coming here")
        // }else{
        //     console.log("coming here 2")
        // }
        // this.setState({
        //     name:event.name,
        //     date:event.date,
        //     description:event.description,
        //     url:event.url,
        //     venue:event.venue,
        //     time:event.time,
        //     link:event.link
        // })
    }
    componentWillReceiveProps(){
        console.log(this.props)
    }

    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log("coming here")
        this.props.saveEvent({...this.state});
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
        <div className="parent" style={{backgroundColor:"#eeeeee",display:"inline-block",width:"33.33%"}}>
        <h2>Add an event</h2>
        <div style={{padding:"15px"}}>
        <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">EventName:</label><br />
        <input class="form-control" type="text" id="name" name="name" value={name} onChange={this.handleChange}/><br />
        <label htmlFor="date">Date:</label><br />
        <input class="form-control" type="text" id="date" name="date" value={date} onChange={this.handleChange}/><br /><br />
        <label htmlFor="date">URL:</label><br />
        <input class="form-control" type="text" id="url" name="url" value={url} onChange={this.handleChange}/><br /><br />
        <label htmlFor="date">Venue:</label><br />
        <input class="form-control" type="text" id="venue" name="venue" value={venue} onChange={this.handleChange}/><br /><br />
        <label htmlFor="date">Time:</label><br />
        <input class="form-control" type="text" id="time" name="time" value={time} onChange={this.handleChange}/><br /><br />
        <label htmlFor="date">Description:</label><br />
        <textarea class="form-control" type="text" id="description" name="description" rows="4" cols="50" value={description} onChange={this.handleChange}/><br /><br />
        <label htmlFor="link">Link:</label><br />
        <input class="form-control" type="text" id="link" name="link" value={link} onChange={this.handleChange}/><br /><br />
        <input class="btn btn-primary" type="submit" value="Submit"/>
        </form>
        </div>
        </div>
    );
  }
}
