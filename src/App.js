import React, {useState, useEffect} from 'react'
import {Route, Link, Switch} from "react-router-dom"
import './App.css';
import TestForm from "./test-components/TestForm"
import Dash from "./test-components/Dash"
import Workout from "./test-components/Workout"
import WorkoutForm from "./test-components/WorkoutForm"
import Filter from "./test-components/Filter"
import FilterForm from "./test-components/FilterForm"

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
      exertion: 1,
      url: "",
      isFavorite: false,
    }
    
    // state for user login info
    const [userLogin, setUserLogin] = useState({})

    //state for user signup info
    const [userSignup, setUserSignup] = useState({})

    // state for user's workouts
    const [workouts, setWorkouts] = useState([])

    // state for selected workout (edit)
    const [selectedWorkout, setSelectedWorkout] = useState(emptyForm);

    // state for filtered workouts
    const [filteredWorkouts, setFilteredWorkouts] = useState([])

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
    // if (window.localStorage.getItem('token')) {
    //     console.log('token exits')
    //     token = JSON.parse(window.localStorage.getItem('token'))
    //     setUserLogin(token)
    // } else {
    //     console.log('no token')
      const response = await fetch(url + "/login", {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      })
      const newtoken = await response.json()
      setUserLogin(newtoken)
      // if (userLogin.error) {
      //   return (
      //     <h1>Invalid username or Password. Please Log In again.</h1>
      //   )
      // } 
     
      console.log("newtoken", newtoken)
      token = newtoken
      window.localStorage.setItem('token', JSON.stringify(token))

      // const userId = token.user.id
      // console.log("user id", userId)
    
  }
 
  console.log("userlogin state", userLogin)

  // fetch for user's workouts after logged in
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
  //   useEffect(function conditionalLoad() {
  //   if (userLogin.token) {
  //     getWorkouts()
  //   }
  // }, [userLogin.token]);


  useEffect( () => {
    if (userLogin.token) {
      getWorkouts()
    }
  }, [userLogin.token])

  // handleCreate for creating new workouts
	const handleCreate = async (newWorkout) => {
		const response = await fetch(url + "/workouts/", {
			method: "post",
			headers: {
        "Authorization": `bearer ${userLogin.token}`
     , "Content-Type": "application/json" },
			body: JSON.stringify(newWorkout),
    })
    // const result = await response.json()
    //  setWorkouts(result)
    getWorkouts()
  };

  //  handleUpdate to editing workouts
	const handleUpdate = async (workout) => {
    const response = await fetch(url + "/workouts/" + workout.id, {
			method: 'put',
		  headers: {
        "Authorization": `bearer ${userLogin.token}`
     , "Content-Type": "application/json" },
			body: JSON.stringify(workout),
    })
    const result = await response.json()
     setWorkouts(result)
    getWorkouts()
  };

  // select a workout
  const selectWorkout = (workout) => {
    setSelectedWorkout(workout)
  }

  // delete a song
	const deleteWorkout = async (workout) => {
    const response = await fetch(url + "/workouts/" + workout.id, {
			method: 'delete',
	    headers: {
        "Authorization": `bearer ${userLogin.token}`
     , "Content-Type": "application/json" },
			body: JSON.stringify(workout),
    })
    // const result = await response.json()
    //  setWorkouts(result)
    getWorkouts()
  };

  const filterTitle = (workouts, searchInput) => {
      let filterResults = []
      console.log(typeof searchInput)
      for (let i = 0; i < workouts.length; i += 1) {
        console.log("searchVal", searchInput)
        console.log("workouts", workouts)
        
        let str = ""
        str = workouts[i]['title']
        str = str.toLowerCase()
        console.log("str lowercase", str)

        searchInput = searchInput.toLowerCase()
        console.log("input lowercase", searchInput)

        if (str.includes(searchInput)) {
          console.log("We have a match!")
          filterResults.push(workouts[i]);
        }
    } 
    console.log("results array", filterResults)
    setFilteredWorkouts(filterResults)
  }
  console.log("filtered workouts", filteredWorkouts)

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
        <Link to="/search">Search List of Workouts</Link><br /><br />
        <Link to="/filter">The filtered list</Link><br /><br />
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
      <Route path="/workout/:id/edit"
			render={(rp) => (
			<WorkoutForm
				{...rp}
				label="Update"
				workout={selectedWorkout}
				handleSubmit={handleUpdate}
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
          selectWorkout={selectWorkout}
          deleteWorkout={deleteWorkout}
		    />
      	)}
      />
      : null
      } 
      
      <Route exact path="/search"
			    render={(rp) => (
            <div>
            <FilterForm
            {...rp}
            label="Search"
            filterTitle={filterTitle}
            workouts={workouts}
            />
            <Filter
              {...rp}
              filteredWorkouts={filteredWorkouts}
            />
          </div>
        )}
        />

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


    // login messages
    //  {userSignup.token ? <h1>You have successfully signed up! Please Log in</h1> : null }
    // {userLogin.token ? <h1>You are logged in!</h1> : null }
    // {userLogin.error ? <h1>Invalid username or Password. Please Log In again.</h1> : null }


        // <Route exact path="/search"
			  //   render={(rp) => (
        // 	<Filter
        //     {...rp}
        //     filteredWorkouts={filteredWorkouts}
        //   />
        //   )}
        // />



      {/* { filteredWorkouts[0] ? 
         <Route exact path="/search"
			    render={(rp) => (
        	<Filter
            {...rp}
            filteredWorkouts={filteredWorkouts}
          />
          )}
        />
        : null } */}