import React from "react"
import {Link} from "react-router-dom"
import './Home.css';

const Home = (props) => {
  return (
    <div className="home-container">
        <div className="home-message">
          <h1>Save and revisit your workouts.</h1>
            <h6>How My Training Log works:</h6>
            <ul>
                <li><Link to="/signup">Create an account</Link> to get started</li>
                <li><Link to="/login">Log in</Link> to your account</li>
                <li>In Workouts: select Add a Workout to save a workout to your account. Or select Search Workouts to view your full list of workouts, and filter search results</li>
                <li>In Dashboard: view, edit and remove your workouts</li>
            </ul>
      
        </div>
    </div>
  )
}

export default Home;