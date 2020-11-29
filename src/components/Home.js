import React from "react"
import {Link} from "react-router-dom"
import './Home.css';

const Home = (props) => {
  return (
    <div className="home-container">
        <div className="home-message">
            <h1>Welcome!</h1>
            <h6>Start tracking your workouts with My Training Log.</h6>
            <h6>How it works:</h6>
            <ul>
                <li><Link to="/signup">Create an account</Link> to get started.</li>
                <li>In Workouts: select Add a Workout to save a workout to your account. Or select Search Workouts to view your full list of workouts, and filter search results</li>
                <li>In Dashboard: view, edit and remove your workouts</li>
            </ul>
            <h6></h6>
        </div>
    </div>
  )
}

export default Home;