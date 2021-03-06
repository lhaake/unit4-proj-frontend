import React, {useState, useEffect} from 'react'
import {Route, Switch, Redirect} from "react-router-dom"
import './App.css';
import Home from "./components/Home"
import Navigation from "./components/Navigation"
import LoginForm from "./components/LoginForm"
import Dash from "./components/Dash"
import Workout from "./components/Workout"
import WorkoutForm from "./components/WorkoutForm"
import Filter from "./components/Filter"
import FilterForm from "./components/FilterForm"
import About from "./components/About"

function App(props) {
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

    //state for log in (boolean)
    const [isLoggedIn, setisLoggedIn] = useState(false)

    const [sortedByDate, setSortedByDate] = useState([])


    // user sign up function - create an account
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

    // user login function -- with a user that is already been created in the database
	  const login = async (user) => {
        let token = ""
        console.log('start login function')
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
    setUserLogin("logged out")
    setisLoggedIn(false)
    setWorkouts([])
    console.log("logged out")
  }

  // Checking if there is a user who has a token saved in local storage AND checking if there is user logged in before fetching workout data
  useEffect(() => {
    const loggedInUser = localStorage.getItem('token');
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUserLogin(foundUser);
    }

    if (userLogin.token) {
      setisLoggedIn(true)
      getWorkouts()
    }
  }, [userLogin.token]);

  useEffect(() => {
    if(<Route path="/login" />) {
      if(isLoggedIn) {
        props.history.push('/dashboard')
      }
    }  
  }, [isLoggedIn])

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

  // select a workout (to edit workout)
  const selectWorkout = (workout) => {
    setSelectedWorkout(workout)
  }

  // delete a workout
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

  // Filter by title and search for workouts
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

  //  Sort workouts by date in descending order.
    const sortByDate = (workouts) => {
      setSortedByDate(workouts.sort((a, b) => {
          let keyA = new Date(a.date)
          let keyB = new Date(b.date)
          return keyB - keyA
        }))
    }

  useEffect(() => {
    if (workouts[0]) {
      sortByDate(workouts)
      console.log("in the useeffect", workouts)
    }
  }, [workouts]);
  
    return (
      <div>
        <Navigation 
        logout={logout}
        userLogin={userLogin}
        isLoggedIn={isLoggedIn} />
  
        
        {userSignup.user && <Route path="/signup" /> ? <Redirect to="/login" />  : null }
        {userLogin === "logged out" ? <Redirect to="/login" /> : null }

      <Switch>
        <Route exact path="/" component={Home} />

        <Route path="/about"
			  render={(rp) => (
        <About
          {...rp}
		    />
      	)}
      />

        <Route path="/signup"
			    render={(rp) => (
        	<LoginForm
            {...rp}
            label="Sign up"
            handleForm={signup}
            userCred={userSignup}
            
            
		      />
      	)}
        />

        <Route path="/login"
			    render={(rp) => (
        	<LoginForm
            {...rp}
            label="Log in"
            handleForm={login}
            userCred={userLogin}
            
		      />
      	  )}
        />
        
        
        <Route path="/dashboard"
			    render={(rp) => (
        	<Dash
            {...rp}
            sortedByDate={sortedByDate}
            // workouts={workouts}
		      />
      	  )}
        />
    

      <Route path="/workout/add"
			render={(rp) => (
			<WorkoutForm
				{...rp}
        label="Save"
        title="Add"
				workout={emptyForm}
				handleSubmit={handleCreate}
			/>
			)}
		/>

      { workouts[0] ? 
      <Route path="/workout/:id/edit"
			render={(rp) => (
			<WorkoutForm
				{...rp}
        label="Save"
        title="Edit"
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

       { workouts[0] ? 
      <Route path="/search"
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
              workouts={workouts}
              filteredWorkouts={filteredWorkouts}
            /> 
          </div>
        )}
        />
        : null }
    </Switch> 
   
    </div>
    )
}

export default App;

      // <button onClick={() => }>Sign Up</button> 
      //   <button onClick={() => login()}>Log In</button> 

      //  <button onClick={() => getWorkouts()}>Test Fetch Workouts</button><br /><br /> 


    //    { workouts[0] ? 
    //   <Route path="/workout/:id/edit"
		// 	render={(rp) => (
		// 	<WorkoutForm
		// 		{...rp}
    //     label="Save"
    //     title="Edit"
		// 		workout={selectedWorkout}
		// 		handleSubmit={handleUpdate}
		// 	/>
		// 	)}
		// />
    //  : null
    //  } 

    // {userLogin === "logged out" ? <h3>You are logged out!</h3> : null} 

    // {((isLoggedIn) && <Route path="/login" />) ? <Redirect to="/dashboard" />  : null } 