import React, {useState, useEffect} from 'react'
import './App.css';
import {Route} from "react-router-dom"
import Nav from "./components/Nav"
import LoginForm from "../components/LoginForm"
import Dashboard from "./components/Dashboard"

function App() {
  // url to backend
	const url = "https://lh-training-log-backend.herokuapp.com"

  let token

  // state for user info
  const [userLogin, setUserLogin] = useState({})

  // state for user's workouts
  const [workouts, setWorkouts] = useState([])

  // handleCreateLogin for creating users for login 
	const handleCreateLogin = async (newUser) => {

    if (window.localStorage.getItem('token')) {
      token = JSON.parse(window.localStorage.getItem('token'))
    } else {
      const response = await fetch(url + "/users/", {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser),
      })
      const newtoken = await response.json()
      setUserLogin(newtoken)

      console.log("newtoken", newtoken)
      token = newtoken
      window.localStorage.setItem('token', JSON.stringify(token))

      const userId = token.user.id
      console.log("user id", userId)
    }
  }

  const test = async () => {
    const response = await fetch(url + "/test", {
      method: "get", 
      headers: {
        "Authorization": `bearer ${token}`
      }
    })
    const result = response.json()
    console.log(result)
  }

  // the auth token is needed for any requests for "/workouts"
  // const getWorkouts = async () => {
  //   const response = await fetch(url + "/workouts", {
  //     method: "get",
  //     headers: {
  //       "Authorization": `bearer ${userLogin.token}`
  //     }
  //   })
  //   const result = await response.json()
  //   setWorkouts(result)
  //   console.log("result", result)
  // }

  // // useEffect
  // useEffect(() => {
 
  //   getWorkouts()
  // }, [userLogin.user])



// testing userLogin state
console.log("checking userLogin state", userLogin)
console.log("checking workouts state", workouts)

  return (
    <div className="App">
      <h1>App Component</h1> 
      <Nav />

     { userLogin.user ? <div>Hello, {userLogin.user.username}! You are logged in</div> : <div>No data here. Not logged in</div> }

    

      <Route exact path="/login"
			  render={(rp) => (
        	<LoginForm
         	 {...rp}
			      handleSubmitFromApp={handleCreateLogin}
			    />
      	)}
      />

      <Route exact path="/dashboard"
			  render={(rp) => (
        	<Dashboard
         	 {...rp}
         
			    />
      	)}
      />
      
 
    </div>
  );
}

export default App;
