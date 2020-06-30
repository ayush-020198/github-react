import React, {Component} from 'react';

class Github extends Component{
    render(){
    let userdata = this.props.userData;
    let followers = `${userdata.homeURL}/followers`;
    let following = `${userdata.homeURL}/following`;
    let repos = `${userdata.homeURL}/repositories`;

    if(userdata.message === "Not Found"){
      return(
        <div className="notfound">
          <h2>Heyyyyy</h2>
          <p>Are you sure, for whom you are looking for ???</p>
        </div>
      );
    }
    else {
      return(
        <section className="github-profile">
          <div className="github-profile-info">
            <a href={userdata.homeUrl} target="_blank" rel="noopener noreferrer" title={userdata.name || userdata.username}><img alt="Not found" src={userdata.avatar} /></a>
            <h2><a href={userdata.homeUrl} title={userdata.username} target="_blank" rel="noopener noreferrer">{userdata.name || userdata.username}</a></h2>
            <h3>{userdata.location}</h3>
          </div>
          <div className="github-profile-state">
            <ul>
               <li>
                  <a href={followers} target="_blank" rel="noopener noreferrer" title="Number Of Followers"><i>{userdata.followers}</i><span>Followers</span></a>
               </li>
               <li>
                  <a href={repos} target="_blank" rel="noopener noreferrer" title="Number Of Repositories"><i>{userdata.repos}</i><span>Repositories</span></a>
               </li>
               <li>
                  <a href={following} target="_blank" rel="noopener noreferrer" title="Number Of Following"><i>{userdata.following}</i><span>Following</span></a>
               </li>
            </ul>
          </div>
        </section>
      );
    }
  }
}


export default Github;