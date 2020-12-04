import React from "react"
import './Workout.css';
import { BiLike } from "react-icons/bi";
import { TiDelete} from "react-icons/ti";
import { MdEdit} from "react-icons/md";


const Workout = (props) => {

  const {workouts} = props

  // Need to take the id value from router props and parse to Int
  let workoutId = props.match.params.id
  workoutId = parseInt(workoutId)

  console.log("workout data", workouts)

  console.log("workoutId from url params: ", workoutId)

  // format Date to "Mon Nov 23 2020"
  const formatDate = (workout) => {
    let dateinfo = ""
    let dateArr = []
    let dateStr = ""

    dateinfo = workout.date 
      
    dateArr = dateinfo.split('-')
     
    dateStr = new Date(dateArr[0], dateArr[1] - 1, dateArr[2])

    return dateStr.toDateString()
  }

  // Match the workout id from workouts array to the workout from props.match.params.id
  let displayWorkout = []
  {workouts.map((workout) => {
    if (workout.id === workoutId) {
        displayWorkout.push(workout)
    } else {
        console.error("problem")
    }
  })}

console.log("looking for workout[workoutId] array", displayWorkout)

 const loaded = () => (
   <>
    <div className="workout-header">
    
      {displayWorkout.map((workout) => (
        <article className="workout-card">
        <h3>{workout.title}</h3>
          <h6><strong>Date: </strong> {formatDate(workout)}</h6>
          <h6><strong>Sport: </strong> {workout.sport}</h6>
          <h6><strong>Time:</strong> {workout.time} minutes</h6>
          {workout.sport === "Run" || workout.sport === "Hike" || workout.sport === "Walk" || workout.sport === "Bike" ? <h6><strong> Distance: </strong> {workout.distance} miles</h6> : null }
          <h6><strong>Exertion:</strong> {workout.exertion}</h6>
          <h6><strong>Description:</strong> {workout.description}</h6>
          {workout.isFavorite ? <h6><strong> Favorite: </strong> <BiLike size="25px" /></h6> : null }
          { workout.url ? <a href={workout.url} target="_blank"><h6><strong>Workout Video</strong></h6></a> : null }
        
          <br />
          <div className="buttons">
          <button className="edit"><MdEdit size="30px" onClick={() => {
								props.selectWorkout(workout);
								props.history.push(`${props.match.url}/edit`);
							}}
           /></button>
          <button className="delete"><TiDelete size="30px" onClick={() => {
                props.deleteWorkout(workout);
                props.history.push("/dashboard")
							}}
            />
          </button>
          </div>

        </article>
      ))}
  </div>
    </>
  )

  return displayWorkout.length > 0 ? loaded() : <h1>Loading...</h1>

}
export default Workout;
