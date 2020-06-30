import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
class Header extends Component{

    onLogin(){
        this.props.onLogin();
    }

    onLogout(){
        this.props.onLogout();
    }

    render(){

        let page;
        if(this.props.idToken){
            page = <Nav.Link onClick={this.onLogout.bind(this)} href="#home">Logout</Nav.Link>
        }
        else {
            page = <Nav.Link onClick={this.onLogin.bind(this)} href="#home">Login</Nav.Link>
        }

        return( <Navbar style={{backgroundColor: '#eedad1'}} expand="lg">
        <Navbar.Brand href="https://ayush-020198.github.io/Portfolio/">Github</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" style={{position: 'relative', left: '1700px'}}>
              {page}
          </Nav>
        </Navbar.Collapse>
      </Navbar>)
    }
}

export default Header;