import React from "react"
import {Link} from "react-router-dom"
import './About.css';

const About = () => {
  return (
    <div className="about">
        <h3>About</h3>
        <p>Created by Leah Haake, My Training Log is an application with React for the front-end and Ruby on Rails backend. <br /><br />Contact Leah on <a href="https://www.linkedin.com/in/leah-haake/" target="
        _blank" >LinkedIn.</a></p>
          <h6>How My Training Log works:</h6>
            <ul>
                <li><Link to="/signup">Create an account</Link> to get started</li>
                <li>After you've created an account, <Link to="/login">Log in</Link> to your account</li>
                <li>In the Workouts dropdown: select Add a Workout to save a workout to your account. Or select Search Workouts to view your full list of workouts and filter search results by title.</li>
                <li>In Dashboard: click a workout to view, edit and remove from your saved list. The workouts are sorted by date (most recent). The app features full CRUD functionality. </li>
            </ul>
    </div>
  )
}

export default About;