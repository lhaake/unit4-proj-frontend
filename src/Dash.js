import React from "react"

const Dash = (props) => {
    const {workouts} = props

console.log("workout data", workouts)

 const loaded = () => (
    <div style={{ textAlign: "center" }}>
    <h1> Dash Component</h1>
      {workouts.map((workout) => (
        <article>
          <h1>{workout.title}</h1>
          <h3>{workout.time}</h3>

        </article>
      ))}
      </div>
  )

  return workouts.length > 0 ? loaded() : <h1>Loading...</h1>

}
export default Dash;

 // if(!workouts) return <div>No workouts data</div>