import React from "react"

const Filter = (props) => {
    const {filteredWorkouts} = props
    console.log("filtered workouts list", filteredWorkouts)

    const loaded = () => (
    <>
    <h1>Filter Component</h1>
    <div>
      {filteredWorkouts.map((workout) => (
        <article>
            <p>Title: {workout.title}</p>
            <p>Date: {workout.date}</p>
            <p>Time: {workout.time} minutes</p>
        </article>
      ))}
      </div>
    </>
  )

  return filteredWorkouts.length > 0 ? loaded() : <h1>Loading...</h1>
}
export default Filter;