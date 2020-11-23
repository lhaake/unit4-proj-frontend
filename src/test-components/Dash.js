import React from "react"
import {Link} from "react-router-dom"

const Dash = (props) => {

const {workouts} = props

console.log("workouts data passed as props in Dash component", workouts)

 const loaded = () => (
    <div style={{ textAlign: "center" }}>
    <h1>Dash Component</h1>
    <Link to="/workout/add">Add a Workout</Link><br /><br />
      {workouts.map((workout) => (
        <article>
        <Link to={`/workout/${workout.id}`}><h1>Title: {workout.title}</h1></Link>
          <h3>Date: {workout.date}</h3>
          <h3>Time: {workout.time} hours</h3>
          <h3>Sport: {workout.sport}</h3>
          {workout.isFavorite ? <h3>Heart/Thumbs Up for favorite</h3> : null }
        
        
          <hr />
        </article>
      ))}
      </div>
  )

  return workouts.length > 0 ? loaded() : <h1>Loading...</h1>

}
export default Dash;

 // if(!workouts) return <div>No workouts data</div>

 // pace Calculation
  // let pace = 0
  // {workout.distance ? <h3>Pace: {pace = workout.time / workout.distance} minutes / mile</h3> : null }