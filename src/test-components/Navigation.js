import React from "react"
import {Link} from "react-router-dom"
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'

const Navigation = (props) => {
  return (
    <>
    <Link to="/login"></Link>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand><Link to ="/">My Training Log</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link><Link to ="/dashboard">Dashboard</Link></Nav.Link>
      
       <NavDropdown title="Workouts" id="basic-nav-dropdown">
          <NavDropdown.Item><Link to ="/search">Search Workouts</Link></NavDropdown.Item>
          <NavDropdown.Item><Link to ="/workout/add">Add a Workout</Link></NavDropdown.Item>
       </NavDropdown>

      <NavDropdown title="Account" id="basic-nav-dropdown">
        <NavDropdown.Item><Link to ="/signup">Sign Up</Link></NavDropdown.Item>
        <NavDropdown.Item><Link to ="/login">Login</Link></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item onClick={() => props.logout()}>Logout</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    </Navbar.Collapse>
  </Navbar> 
  </>
  )
}

export default Navigation;