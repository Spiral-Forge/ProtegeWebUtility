import React, { Component } from 'react';
import UserCard from '../Common/userCard';
import Dropdown from 'react-dropdown';
//import { Dropdown } from 'semantic-ui-react'
const options = [
  'one', 'two', 'three'
];
const defaultOption = options[0];


export default class MenteeProfile extends Component {
  constructor(props){
    super(props)
    this.state={
      selectedBranch:'None',
      selectedDomains:[],
      selectedLanguages:[],
      hosteller:false,
      zeroMenteesFlag:false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  // _onSelect = event => {
  //   console.log(event.target.value)
  //   this.setState({
  //     selectedBranch: event.target.value
  //   });
//};

  handleSubmit(event){
    event.preventDefault()
    console.log(this.state)
    //no preference filtering conditions to send to parent filtering method
    var domains=this.state.selectedDomains;
    var langs=this.state.selectedLanguages;
    var branch=this.state.selectedBranch;
    if(this.state.selectedDomains.length==0 || (this.state.selectedDomains.length==1 && this.state.selectedDomains[0]=="No Preference")){
      domains=null;
    }
    if(this.state.selectedLanguages.length==0 || (this.state.selectedLanguages.length==1 && this.state.selectedLanguages[0]=="No Preference")){
      langs=null;
    }
    if(this.state.selectedBranch=="None"){
      branch=null;
    }
    this.props.addFilters(branch,this.state.hosteller,domains,langs,this.state.zeroMenteesFlag)

  }
  handleChange(e) {
    this.setState({[e.target.name]:e.target.value})
  }
  // handleOptionChange=(e)=>{
  //   console.log(e.target.value)

  // }
  handleOptionChangeDomain=(event)=> {
    const target = event.target;
    var value = target.value;
    
    if(target.checked){
        this.state.selectedDomains.push(value)
    }else{
        console.log("got called but ")
        this.state.selectedDomains=this.state.selectedDomains.filter((val)=> val!=value)
        //this.state.selectedDomains.splice(value, 1);
    }
  }

    handleOptionChangeLang=(event)=>{
      const target = event.target;
      var value = target.value;
      
      if(target.checked){
          this.state.selectedLanguages.push(value)
      }else{
          console.log("got called but ")
          this.state.selectedLanguages=this.state.selectedLanguages.filter((val)=> val!=value)
          //this.state.selectedDomains.splice(value, 1);
      }
    }

    handleCheckboxes=(e)=>{
      if(e.target.checked){
        this.setState({[e.target.name]:e.target.value})
      }
    }
    


  render() {
    return (
        <div style={{backgroundColor:"#f3f3f3",display:"inline-block",width:"25%",padding: "10px"}}> 
          <div>
            <UserCard user={this.props.user} />
            <button onClick={()=>this.props.findMentors(this.props.user)}>Find matches</button>
            </div>
            <div>
            <form onSubmit={this.handleSubmit}>
              <label className="filterLabel">
                Select branch:
                <select name="selectedBranch" value={this.state.selectedBranch} onChange={this.handleChange}>
                  <option value="None">None</option>
                  <option value="CSE-1">CSE-1</option>
                  <option value="CSE-2">CSE-2</option>
                  <option value="IT-1">IT-1</option>
                  <option value="IT-2">IT-2</option>
                  <option value="ECE">ECE</option>
                  <option value="MAE">MAE</option>
                  <option value="BBA">BBA</option>
                  <option value="B.Arch">B.Arch</option>
                </select>
              </label>
              < br />
              <label className="filterLabel"><p>Select domain: </p></label><br></br>
                <input type="checkbox" id="Development" name="domain" value="Web Development" onChange={this.handleOptionChangeDomain} />
                <label  htmlfor="Development">Web Development</label><br />
                <input type="checkbox" id="College" name="domain" value="App Development" onChange={this.handleOptionChangeDomain}/>
                <label  htmlfor="College">App Development</label><br />
                <input type="checkbox" id="Machine" name="domain" value="Machine Learning" onChange={this.handleOptionChangeDomain}/>
                <label  htmlfor="Machine">Machine Learning</label><br />
                <input type="checkbox" id="Scholarship" name="domain" value="IOT" onChange={this.handleOptionChangeDomain}/>
                <label  htmlfor="Scholarship">IOT</label><br />
                <input type="checkbox" id="Competitive" name="domain" value="Competitive Programming"  onChange={this.handleOptionChangeDomain}/>
                <label  htmlfor="Competitive">Competitive Coding</label><br />
                <input type="checkbox" id="Open" name="domain" value="No Preference" onChange={this.handleOptionChangeDomain}/>
                <label  htmlfor="Open">No Preference</label><br />

                <label className="filterLabel"><p>Select languages: </p></label><br></br>
                <input type="checkbox" id="male" name="lang" value="C/C++" onChange={this.handleOptionChangeLang} />
                <label  htmlfor="male">C/C++</label><br />
                <input type="checkbox" id="female" name="lang" value="Java" onChange={this.handleOptionChangeLang}/>
                <label  htmlfor="female">Java</label><br />
                <input type="checkbox" id="other" name="lang" value="Python" onChange={this.handleOptionChangeLang}/>
                <label htmlfor="other">Python</label><br />
                <input type="checkbox" id="Open" name="lang" value="No Preference" onChange={this.handleOptionChangeLang}/>
                <label  htmlfor="Open">No Preference</label><br />
                

                <label className="filterLabel"><p>Hosteller </p></label>
                <input type="checkbox" id="Open" name="hosteller" value={true} onChange={this.handleCheckboxes}/>
                <br />

                <label className="filterLabel"><p>0 mentees </p></label>
                <input type="checkbox" id="Open" name="zeroMenteesFlag" value={true} onChange={this.handleCheckboxes}/>

                <br />

                <input class="btn btn-primary" type="submit" value="Submit"/>

            </form>
            </div>
         </div>
    );
  }
}
