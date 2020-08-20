import React, { Component } from 'react';

export default class ResourceAdd extends Component {

    constructor(props){
        super(props)
        this.state={
            Title:'',
            Link:'',
            selectedDomain:'Development',
        }
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.resourceAdd(this.state.selectedDomain,{Title:this.state.Title,Link:this.state.Link});
        this.setState({
        Title:'',
        Link:'',
        selectedDomain:'Development',
        })
    }
    
    handleOptionChange = event => {
        this.setState({
        selectedDomain: event.target.value
        });
    };

    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

  render() {
    return (
      <div style={{backgroundColor:"#a3d2ca",display:"inline-block",width:"50%",textAlign:"center"}}> 
      <div style={{padding:"35px"}}>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Title:</label><br />
        <input class="form-control" type="text" id="name" name="Title" value={this.state.Title} onChange={this.handleChange}/><br />
        <label htmlFor="name">Link:</label><br />
        <input class="form-control" type="text" id="name" name="Link" value={this.state.Link} onChange={this.handleChange}/><br />
        <p>Select domain: </p><br></br>
        <input type="radio" id="male" name="domain" value="Development" checked={this.state.selectedDomain === "Development"} onChange={this.handleOptionChange} />
        <label for="male">Development</label><br />
        <input type="radio" id="female" name="domain" value="College" checked={this.state.selectedDomain === "College"} onChange={this.handleOptionChange}/>
        <label for="female">College</label><br />
        <input type="radio" id="other" name="domain" value="ML" checked={this.state.selectedDomain === "ML"} onChange={this.handleOptionChange}/>
        <label for="other">Machine Learning</label><br />
        <input type="radio" id="other" name="domain" value="Scholarship" checked={this.state.selectedDomain === "option1"} onChange={this.handleOptionChange}/>
        <label for="other">Scholarship</label><br />
        <input type="radio" id="other" name="domain" value="CompCoding" checked={this.state.selectedDomain === "CompCoding"} onChange={this.handleOptionChange}/>
        <label for="other">Competitive Coding</label><br />
        <input type="radio" id="other" name="domain" value="OpenSource" checked={this.state.selectedDomain === "OpenSource"} onChange={this.handleOptionChange}/>
        <label for="other">Open Source</label><br />
        <input type="submit" value="Submit"/>
        </form>
        </div>
       </div>
    );
  }
}
