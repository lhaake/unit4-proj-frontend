import React from "react"
import {Link} from "react-router-dom"

const Dash = (props) => {

const {workouts} = props

console.log("workouts data passed as props in Dash component", workouts)

 const loaded = () => (
   <div>
     <h1>Dash Component</h1>
      <Link to="/workout/add">Add a Workout</Link><br /><br />
    <div className="dash-header">
    
      {workouts.map((workout) => (
        <article className="dash-titles">
        <Link to={`/workout/${workout.id}`}><h3>Title: {workout.title}</h3></Link>
          <ul>
            <li>
              Date: {workout.date}
            </li>
            <li>
              Time: {workout.time} minutes
            </li>
            <li>
            Sport: {workout.sport}
            </li>
          </ul>
          {workout.isFavorite ? <p>Heart/Thumbs Up for favorite</p> : null }
      
        </article>
      ))}
      </div>
      </div>
  )

  return workouts.length > 0 ? loaded() : <h1>Loading...</h1>

}
export default Dash;

 // if(!workouts) return <div>No workouts data</div>

 // pace Calculation
  // let pace = 0
  // {workout.distance ? <h3>Pace: {pace = workout.time / workout.distance} minutes / mile</h3> : null }