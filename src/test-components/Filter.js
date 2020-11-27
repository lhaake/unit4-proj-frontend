import React from "react"
import {Link} from "react-router-dom"
import Table from 'react-bootstrap/Table'
import { BiLike } from "react-icons/bi";

const Filter = (props) => {

    const {filteredWorkouts} = props
    console.log("filtered workouts list", filteredWorkouts)

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

let newWorkoutList = filteredWorkouts.sort((a, b) =>{
  let keyA = new Date(a.date)
  let keyB = new Date(b.date)
  return keyB - keyA

})
    const loaded = () => (
    <>
    <h1>Filter Component</h1>
    <div> 
        {/* <article>
            <p>Title: {workout.title}</p>
            <p>Date: {workout.date}</p>
            <p>Time: {workout.time} minutes</p>
        </article> */}
    <h3>{filteredWorkouts.length} Workouts</h3>
    <Table responsive="sm">
    <thead>
      <tr>
        <th>#</th>
        <th>Sport</th>
        <th>Date</th>
        <th>Workout Title</th>
        <th>Time</th>
        {filteredWorkouts.sport === "Run" || filteredWorkouts.sport === "Bike" || filteredWorkouts.sport === "Hike" || filteredWorkouts.sport === "Walk" ?  <th>Distance</th> : null }
        <th>Favorite?</th>
      </tr>
    </thead>
    
    {newWorkoutList.map((workout, key) => (
    
    <tbody>
      <tr>
        <td>{key + 1}</td>
        <td>{workout.sport}</td>
        <td>{formatDate(workout)}</td>
        <Link to={`/workout/${workout.id}`}><td>{workout.title}</td></Link>
        <td>{workout.time} minutes</td>
        {filteredWorkouts.sport === "Run" || filteredWorkouts.sport === "Bike" || filteredWorkouts.sport === "Hike" || filteredWorkouts.sport === "Walk" ? <td>{workout.distance} miles</td> : null }
        <td>{workout.isFavorite ? <BiLike size="25px" /> : null }</td>
      </tr>
    </tbody>
    ))}
   
    </Table>
    </div>
    </>
  )

  return newWorkoutList.length > 0 ? loaded() : <h3>No workouts found. Please enter another title</h3>
}
export default Filter;


// const loaded = () => (
//     <>
//     <h1>Filter Component</h1>
//     <div>
//       {filteredWorkouts.map((workout, key) => (
//           <>
//         <article>
//             <p>Title: {workout.title}</p>
//             <p>Date: {workout.date}</p>
//             <p>Time: {workout.time} minutes</p>
//         </article>

//   <Table responsive="sm">
//     <thead>
//       <tr>
//         <th>#</th>
//         <th>Date</th>
//         <th>Workout Title</th>
//         <th>Time</th>
//       </tr>
//     </thead>
//     <tbody>
//       <tr>
//       <td>{key + 1}</td>
//         <td>{workout.date}</td>
//         <Link to={`/workout/${workout.id}`}><td>{workout.title}</td></Link>
//         <td>{workout.time} minutes</td>
//       </tr>
//       <tr>
//         <td>2</td>
//         <td>Table cell</td>
//         <td>Table cell</td>
//         <td>Table cell</td>
//       </tr>
//       <tr>
//         <td>3</td>
//         <td>Table cell</td>
//         <td>Table cell</td>
//         <td>Table cell</td>
//       </tr>
//     </tbody>
//   </Table>
//   </>
//       ))}
//       </div>
//     </>
//   )