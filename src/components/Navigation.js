import React from "react"
import {Link} from "react-router-dom"
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import './Nav.css';

const Navigation = (props) => {
  return (
    <>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand className="title-nav"><Link to ="/">My Training Log</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link><Link to ="/dashboard">Dashboard</Link></Nav.Link>
      
       <NavDropdown title="Workouts" id="basic-nav-dropdown">
          <NavDropdown.Item><Link to ="/search">Search Workouts</Link></NavDropdown.Item>
          <NavDropdown.Item><Link to ="/workout/add">Add a Workout</Link></NavDropdown.Item>
       </NavDropdown>

      <NavDropdown title="Account" id="basic-nav-dropdown">
        <NavDropdown.Item><Link to ="/signup">Sign up</Link></NavDropdown.Item>
        <NavDropdown.Item><Link to ="/login">Log in</Link></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item className="logout-button" onClick={() => props.logout()}>Log out</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    </Navbar.Collapse>
  </Navbar> 
  </>
  )
}

export default Navigation;