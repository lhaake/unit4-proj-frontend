import React from "react"
import './Workout.css';
import { BiLike } from "react-icons/bi";
import { TiDelete} from "react-icons/ti";
import { MdEdit} from "react-icons/md";


const Workout = (props) => {

  const {workouts} = props

  let workoutId = props.match.params.id
  workoutId = parseInt(workoutId)

console.log("workout data", workouts)

console.log("workoutId from url params: ", workoutId)

  const formatDate = (workout) => {
    let dateinfo = ""
    let dateArr = []
    let dateStr = ""
    dateinfo = workout.date 
      console.log(dateinfo)
    dateArr = dateinfo.split('-')
      console.log(dateArr)
    dateStr = new Date(dateArr[0], dateArr[1] - 1, dateArr[2])
      console.log(dateStr.toDateString())

    return dateStr.toDateString()
  }

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
   <>
   <h1>Workout Component</h1>
    <div className="workout-header">
    
      {displayWorkout.map((workout) => (
        <article className="workout-card">
        <h3>{workout.title}</h3>
          <h6>Date: {formatDate(workout)}</h6>
          <h6>Sport: {workout.sport}</h6>
          <h6>Time: {workout.time} minutes</h6>
          <h6>Description: {workout.description}</h6>
          <h6>Distance: {workout.distance} miles</h6>
          <h6>Exertion (scale of 1-10): {workout.exertion}</h6>
          
          {workout.isFavorite ? <h6>Favorite: <BiLike size="25px" /></h6> : null }
          { workout.url ? <a href={workout.url} target="_blank">Workout Video</a> : null }
          <br />
          <button alt="Edit button"><MdEdit size="30px" onClick={() => {
								props.selectWorkout(workout);
								props.history.push(`${props.match.url}/edit`);
							}}
           /></button>

    

          <button className="button-tooltip"><TiDelete size="30px" onClick={() => {
                props.deleteWorkout(workout);
                props.history.push("/dashboard")
							}}
            />
            <p className="tooltip-text">Delete</p>
          </button>
          

        </article>
      ))}

  </div>
    </>
  )

  return displayWorkout.length > 0 ? loaded() : <h1>Loading...</h1>


}
export default Workout;


              // <BiEdit size="25px" />
              // <FiEdit2 size="25px" className="edit-icon" />
// import { BiEdit } from 'react-icons/bi';
// import { FiEdit2 } from 'react-icons/fi';
// import { BiLike } from "react-icons/bi";

     	// <button
			// 				onClick={() => {
      //           props.deleteWorkout(workout);
      //           props.history.push("/dashboard")
			// 				}}
			// 			>
			// 				Delete
      // 			</button>
      
            //  <button onClick={() => {
						// 		props.selectWorkout(workout);
						// 		props.history.push(`${props.match.url}/edit`);
						// 	}}
						// >
						// 	Edit
						// </button>