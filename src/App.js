import React, {useState, useEffect} from 'react'
import {Route, Link, Switch} from "react-router-dom"
import './App.css';
import TestForm from "./test-components/TestForm"
import Dash from "./test-components/Dash"
import Workout from "./test-components/Workout"
import WorkoutForm from "./test-components/WorkoutForm"

function App() {
    // url to backend
    const url = "https://lh-training-log-backend.herokuapp.com"

    // empty form for "add a new workout"
	  const emptyForm = {
      title: "",
      date: "",
      time: null,
      distance: null,
      sport: "",
      description: "",
      exertion: null,
      url: "",
      isFavorite: false,
    }
    
    // state for user login info
    const [userLogin, setUserLogin] = useState({})

    //state for user signup info
    const [userSignup, setUserSignup] = useState({})

    // state for user's workouts
    const [workouts, setWorkouts] = useState([])

    const signup = async (newUser) => {
        console.log("signup function start")
        const response = await fetch(url + "/users", {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser),
      })
        const result = await response.json()
        setUserSignup(result)
        console.log("usersignup", result)

    }


    // user login function -- with a user that is already been created in the database - username: test1, password: test1
	const login = async (user) => {
        let token = ""
        console.log('start login function')
    if (window.localStorage.getItem('token')) {
        console.log('token exits')
        token = JSON.parse(window.localStorage.getItem('token'))
        setUserLogin(token)
    } else {
        console.log('no token')
      const response = await fetch(url + "/login", {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
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
 
  console.log("userlogin state", userLogin)

  // testing fetch for user's workouts after logged in

   const getWorkouts = async () => {
    console.log("start of test function")
    const response = await fetch(url + "/workouts/", {
      method: "get", 
      headers: {
        "Authorization": `bearer ${userLogin.token}`
      }
    })
    const result = await response.json()
     setWorkouts(result)
    console.log(result)
    
  }
   
 

  // user logout function 
  const logout = () => {
    // let token = ""
    window.localStorage.removeItem('token')
    console.log("logged out")
  }

  // I was troubleshooting because my useEffect was making the GET request for workouts before the token was in state. This is the source I used to help allow for a conditional within useEffect: https://reactjs.org/docs/hooks-rules.html
    useEffect(function conditionalLoad() {
    if (userLogin.token) {
      getWorkouts()
    }
  }, [userLogin.token]);


  // useEffect( () => {
  //   getWorkouts()
  // }, [userLogin.token])


  
  // handleCreate for creating new workouts
	const handleCreate = async (newWorkout) => {
		const response = await fetch(url + "/workouts/", {
			method: "post",
			headers: {
        "Authorization": `bearer ${userLogin.token}`
     , "Content-Type": "application/json" },
			body: JSON.stringify(newWorkout),
    })
    const result = await response.json()
     setWorkouts(result)
    getWorkouts()
  };



    return (
      <div>
      <h1>App Component</h1>
        {/* <button onClick={() => }>Sign Up</button> */}
        {/* <button onClick={() => login()}>Log In</button> */}
        <Link to="/">Home</Link><br /><br />
        <Link to="/signup">Sign up</Link><br /><br />
        <Link to="/login">Log in</Link><br /><br />
        <Link to="/dashboard">Dashboard</Link><br /><br />
         <Link to="/workout/add">Add a Workout</Link><br /><br />
        {/* <button onClick={() => getWorkouts()}>Test Fetch Workouts</button><br /><br /> */}
        <button onClick={() => logout()}>Log out</button>
        
      <Switch>
        <Route path="/signup"
			    render={(rp) => (
        	<TestForm
            {...rp}
            label="Sign Up"
			      handleForm={signup}
		      />
      	)}
        />

        <Route path="/login"
			    render={(rp) => (
        	<TestForm
            {...rp}
            label="Login"
			      handleForm={login}
		      />
      	  )}
        />
        
        { workouts[0] ? 
        <Route path="/dashboard"
			    render={(rp) => (
        	<Dash
            {...rp}
            workouts={workouts}
		      />
      	  )}
        />
        : null
        } 

      { workouts[0] ? 
      <Route path="/workout/add"
			render={(rp) => (
			<WorkoutForm
				{...rp}
				label="Save"
				workout={emptyForm}
				handleSubmit={handleCreate}
			/>
			)}
		/>
     : null
     } 

      { workouts[0] ? 
      <Route path="/workout/:id"
			  render={(rp) => (
        <Workout
          {...rp}
          workouts={workouts}
		    />
      	)}
      />
      : null
      } 

    </Switch> 
    </div>
    )
}

export default App;


    // body: JSON.stringify({
    //         username: 'hello123',
    //         password: '123',
    //     }),
    //   })