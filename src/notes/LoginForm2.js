import React, { useState } from "react"



const LoginForm = (props) => {


    // state for login form 
    const [formData, setFormData] = useState({
        username: "", 
        password: ""
    })

    // handleChange function
    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    // handleSubmit 
    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleSubmitFromApp(formData);
        props.history.push('/');
    }

  return (
    <div className="login-form">
      <h1>Login Form</h1> 
      <form onSubmit={handleSubmit}>
          <input type="text" name="username" value={formData.username} onChange={handleChange} />
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
          <input type="submit" value="Log In" />
      </form>
     

    </div>
  )
}

export default LoginForm;