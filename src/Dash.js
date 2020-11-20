import React from "react"
import {Link} from "react-router-dom"

const Dash = (props) => {
    const {workouts} = props

console.log("workout data", workouts)

 const loaded = () => (
    <div style={{ textAlign: "center" }}>
    <h1> Dash Component</h1>
      {workouts.map((workout) => (
        <article>
        <Link to={`/workout/${workout.id}`}><h1>Title: {workout.title}</h1></Link>
          <h3>Date: {workout.date}</h3>
          <h3>Time: {workout.time} hours</h3>
          <h3>Sport: {workout.sport}</h3>
          {workout.isFavorite? <h3>Heart/Thumbs Up for favorite</h3> : null }
     

          <hr />
        </article>
      ))}
      </div>
  )

  return workouts.length > 0 ? loaded() : <h1>Loading...</h1>

}
export default Dash;

 // if(!workouts) return <div>No workouts data</div>