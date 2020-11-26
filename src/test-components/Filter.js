import React from "react"
import {Link} from "react-router-dom"
import Table from 'react-bootstrap/Table'

const Filter = (props) => {
    const {filteredWorkouts} = props
    console.log("filtered workouts list", filteredWorkouts)

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
      </tr>
    </thead>
    
    {filteredWorkouts.map((workout, key) => (
    
    <tbody>
      <tr>
        <td>{key + 1}</td>
        <td>{workout.sport}</td>
        <td>{workout.date}</td>
        <Link to={`/workout/${workout.id}`}><td>{workout.title}</td></Link>
        <td>{workout.time} minutes</td>
        {filteredWorkouts.sport === "Run" || filteredWorkouts.sport === "Bike" || filteredWorkouts.sport === "Hike" || filteredWorkouts.sport === "Walk" ? <td>{workout.distance} miles</td> : null }
      </tr>
    </tbody>
    ))}
   
    </Table>
    </div>
    </>
  )

  return filteredWorkouts.length > 0 ? loaded() : <h1>Loading...</h1>
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