import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Github from './Github';
import NotLoggedIn from './NotLoggedIn';
import Header from './Components/Header';
import Auth0Lock from 'auth0-lock';
import './bg.sass';

class App extends Component{

  constructor(props){
    super(props)
    this.state = {
        idToken: '',
        profile: {}
    }
}

static defaultProps = {
  clientID: '25QDthANPH4LAO5qZgXgPG673h2c9nLb',
  domain: 'dev-mpt3d40z.us.auth0.com'
}

componentDidMount(){
    this.lock = new Auth0Lock(this.props.clientID, this.props.domain);

    this.lock.on('authenticated', (authResult) => {
        this.lock.getProfile(authResult.accessToken, (error, profile) =>{
          if(error)
          {
            console.log(error);
            return;
          }
          this.setProfile(authResult.accessToken, profile);
        })
    });

    this.getProfile();
}

setProfile(idToken, profile){
  localStorage.setItem('idToken', idToken);
  localStorage.setItem('profile', JSON.stringify(profile));

  this.setState({
    idToken: localStorage.getItem('idToken'),
    profile: JSON.parse(localStorage.getItem('profile'))
  })
}

getProfile(){
  if(localStorage.getItem('idToken') != null){
    this.setState({
      idToken: localStorage.getItem('idToken'),
      profile: JSON.parse(localStorage.getItem('profile'))
    }, () => {
    console.log(this.state);
    })
  }
}

showLock() {
  this.lock.show();
}

logout(){
  this.setState({
    idToken: '',
        profile: {}
  }, ()=>{
    localStorage.removeItem('idToken');
    localStorage.removeItem('profile')
  })
}

render(){

  let gitty;
  if(this.state.idToken){
    gitty = <Github />;
  }
  else{
    gitty = <NotLoggedIn />;
  }

  return (
    <div className="App">
       <div className="lines">
       <div className="line"></div>
       <div className="line"></div>
       <div className="line"></div>
    </div>
     <Header 
     idToken={this.state.idToken}
     profile={this.state.profile}
     lock={this.lock}
     onLogout={this.logout.bind(this)}
     onLogin={this.showLock.bind(this)}
     />
     {gitty}
    </div>
  );
}
}
export default App;

