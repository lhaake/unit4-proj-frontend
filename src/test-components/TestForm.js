import React, { useState } from "react"

const LoginForm = (props) => {

    const emptyForm = {
        username: "", 
        password: "",
        usernameError: "",
        passwordError: ""
    }

    // state for login form 
    const [formData, setFormData] = useState(emptyForm)

    // state to reset form
    // const [resetState, setResetState] = useState({})

    // handleChange 
    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }


    // handleSubmit 
    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleForm(formData);
        setFormData(emptyForm)
       // props.history.push('/');
    }

    //function to reset the form after submit
  //   const resetForm = () => {
  //     setResetState({ username: '', password: ''})
  // }

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
    <div className="login-form">
      <h1>{props.label} Form</h1> 
      <form onSubmit={handleSubmit}>
          Username:
          <input type="text" name="username" value={formData.username} onChange={handleChange} required />
          <br />
           Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} id="myInput" required />
          <br />
          <input type="checkbox" onClick={() => showPassword()} />Show Password
         <br />
          <input type="submit" value={props.label} />
      </form>
     

    </div>
  )
}

export default LoginForm;

  // props.history.push('/');