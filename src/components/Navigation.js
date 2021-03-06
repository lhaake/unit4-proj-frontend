import React from "react"
import {Link} from "react-router-dom"
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import { MdAccountCircle } from "react-icons/md"

import './Nav.css';

const Navigation = (props) => {
  const {userLogin} = props
  return (
    <>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand className="title-nav"><Link to ="/">MY TRAINING LOG</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
      
       {props.isLoggedIn === false ? 
       <>
        <Nav.Link><Link to ="/about">ABOUT</Link></Nav.Link>
        <Nav.Link><Link to ="/signup">SIGN UP</Link></Nav.Link>
        <Nav.Link><Link to ="/login">LOG IN</Link></Nav.Link>
      </>
      : 
      <>
        <Nav.Link><Link to ="/dashboard">DASHBOARD</Link></Nav.Link>
      
        <NavDropdown title="WORKOUTS" id="basic-nav-dropdown">
          <NavDropdown.Item><Link to ="/search">Search Workouts</Link></NavDropdown.Item>
          <NavDropdown.Item><Link to ="/workout/add">Add Workout</Link></NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="ACCOUNT" id="basic-nav-dropdown">
          {userLogin.user.username ? <NavDropdown.Item><MdAccountCircle size="24px"/> {userLogin.user.username}</NavDropdown.Item> : null }
          <NavDropdown.Item><Link to ="/about">About</Link></NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item className="logout-button" onClick={() => props.logout()}>Log out</NavDropdown.Item>
        </NavDropdown>  
      </>
      }
    </Nav>
    </Navbar.Collapse>
  </Navbar> 
  </>
  )
}

export default Navigation;