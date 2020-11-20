import React from "react"
// import {Link} from "react-router-dom"

const Workout = (props) => {

    const {workouts} = props

   let workoutId = props.match.params.id
    workoutId = parseInt(workoutId)

console.log("workout data", workouts)
// let workoutId = props.id
console.log("workoutId from url params: ", workoutId)

let displayWorkout = []
{workouts.map((workout) => {
    if(workout.id === workoutId) {
        displayWorkout.push(workout)
    } else {
        console.error("problem")
    }
})}

console.log("looking for workout[workoutId] array", displayWorkout)

 const loaded = () => (
    <div style={{ textAlign: "center" }}>
    <h1>Workout Component</h1>
      {displayWorkout.map((workout) => (
        <article>
        <h1>Title: {workout.title}</h1>
          <h3>Date: {workout.date}</h3>
          <h3>Time: {workout.time} hours</h3>
          <h3>Description: {workout.description}</h3>
          <h3>Distance: {workout.distance} miles</h3>
          <h3>Exertion (scale of 1-10): {workout.exertion}</h3>
          <h3>Sport: {workout.sport}</h3>
          {workout.isFavorite? <h3>Heart/Thumbs Up for favorite</h3> : null }
          { workout.url ? <a href={workout.url} target="_blank">Workout Video</a> : null }

          <hr />
        </article>
      ))}
      </div>
  )

  return displayWorkout.length > 0 ? loaded() : <h1>Loading...</h1>


}
export default Workout;