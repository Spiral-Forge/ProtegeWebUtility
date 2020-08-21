import React, { Component } from 'react';

export default class UserCard extends Component {
  render() {
      const {user}=this.props
    return (
      <div id="marginHandler" class="card" style={{width: "18rem"}}>
            <div class="card-header">
                {user.name}
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Name: {user.name}</li>
                <li class="list-group-item">Year: {user.year}</li>
                <li class="list-group-item">Branch: {user.branch}</li>
                <li class="list-group-item">Email: {user.email}</li>
                <li class="list-group-item">Github: {user.githubURL}</li>
                <li class="list-group-item">LinkedIn: {user.linkedInURL}</li>
                <li class="list-group-item">Contact: {user.contact}</li>
                <li class="list-group-item">Hosteller: {user.hosteller}</li>
                <li class="list-group-item">Domains: {user.domains.map((domain)=>{
                    return domain+", "
                })}</li>
                <li class="list-group-item">Languages: {user.languages.map((lang)=>{
                    return lang+", "
                })}</li>
                {this.props.isHomeDisplay ? 
                    <div>
                    <li class="list-group-item">Post: {user.post}</li>
                    <li class="list-group-item">PeerID: {user.peerID ? user.peerID : "null"}</li>
                    </div>
                    :
                    null
                }
            </ul>
        </div>
    );
  }
}
