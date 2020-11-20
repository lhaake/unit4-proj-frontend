import React, { useState } from "react"

const LoginForm = (props) => {

    // state for login form 
    const [formData, setFormData] = useState({
        username: "", 
        password: ""
    })

    // state to reset form
    // const [resetState, setResetState] = useState({})

    // handleChange function
    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    // handleSubmit 
    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleForm(formData);
        props.history.push('/');
    }

    //function to reset the form after submit
  //   const resetForm = () => {
  //     setResetState({ username: '', password: ''})
  // }

  return (
    <div className="login-form">
      <h1>{props.label} Form</h1> 
      <form onSubmit={handleSubmit}>
          Username:
          <input type="text" name="username" value={formData.username} onChange={handleChange} />
          <br />
           Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
         <br />
          <input type="submit" value={props.label} />
      </form>
     

    </div>
  )
}

export default LoginForm;