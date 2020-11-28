import React, { useState } from "react"
import './LoginForm.css';
import {Link} from "react-router-dom"
import {Form, Col, Button} from 'react-bootstrap';


const LoginForm = (props) => {

    const emptyForm = {
        username: "", 
        password: "",
    }

    // state for login form 
    const [formData, setFormData] = useState(emptyForm)

    // handleChange 
    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    // handleSubmit 
    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleForm(formData);
        setFormData(emptyForm)
        console.log("logged in")
       props.history.push('/dashboard');
    }

  // Using Vanilla JS to add the "show password functionality. Source: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_toggle_password
  const showPassword = () => {
    const data = document.getElementById("myInput")
  
    if (data.type === "password") {
      data.type = "text";
    } else {
      data.type = "password";
    }
}

  return (
    <div className="page-container">
    <div className="login-form-container">
      <h1>{props.label}</h1>
      {props.label === "Log in" ? <h6>Not registered? <Link to="/signup">Sign up</Link></h6> : <h6>Already have an account? <Link to="/login">Log in</Link></h6> } 
    
    <Form onSubmit={handleSubmit} className="login-form">
    <Col sm={9}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Username:</Form.Label>
        <Form.Control 
        type="text"
        name="username"  
        placeholder="Enter username"
        value={formData.username}
        onChange={handleChange}
        required />
      </Form.Group>
    </Col>

    <Col sm={9}>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control 
        type="password"
        placeholder="Password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        id="myInput"
        required  />
      </Form.Group>
    </Col>

    <Col sm={7}>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check 
        type="checkbox"
        label="Show password"
        onClick={() => showPassword()} />
      </Form.Group>
    </Col>

    <Col sm={9}>
      <Button 
      variant="primary"
      type="submit"
      value={props.label} >
      {props.label}
      </Button>
    </Col>
  </Form>
  </div>
  </div>
  )
}

export default LoginForm;

  // props.history.push('/');

  // ORIGINAL FORM
  //  <form onSubmit={handleSubmit} className="login-form">
  //         Username:
  //         <input type="text" name="username" value={formData.username} onChange={handleChange} required />
  //         <br />
  //          Password:
  //         <input type="password" name="password" value={formData.password} onChange={handleChange} id="myInput" required />
  //         <br />
  //         <input type="checkbox" onClick={() => showPassword()} />Show Password
  //        <br />
  //         <input type="submit" value={props.label} />
  //     </form>