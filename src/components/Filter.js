import React, {useEffect} from "react"
import './Filter.css';
import {Link} from "react-router-dom"
import Table from 'react-bootstrap/Table'
import { BiLike } from "react-icons/bi";

const Filter = (props) => {
  const {workouts} = props
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

let sortedWorkouts = workouts.sort((a, b) => {
  let keyA = new Date(a.date)
  let keyB = new Date(b.date)
  return keyB - keyA
})

let sortedFilteredWorkouts = filteredWorkouts.sort((a, b) => {
  let keyA = new Date(a.date)
  let keyB = new Date(b.date)
  return keyB - keyA
})

const showFilteredWorkouts = (w) => (
  <>
    <div className="filter-container"> 
        {/* <article>
            <p>Title: {workout.title}</p>
            <p>Date: {workout.date}</p>
            <p>Time: {workout.time} minutes</p>
        </article> */}
    <h3>{w.length} Workouts</h3>
    <Table responsive="sm">
    <thead>
      <tr>
        <th>#</th>
        <th>Sport</th>
        <th>Date</th>
        <th>Workout Title</th>
        <th>Time</th>
        {w.sport === "Run" || w.sport === "Bike" || w.sport === "Hike" || w.sport === "Walk" ?  <th>Distance</th> : null }
        <th>Favorite?</th>
      </tr>
    </thead>
    
    {w.map((workout, key) => (
    
    <tbody>
      <tr>
        <td>{key + 1}</td>
        <td>{workout.sport}</td>
        <td>{formatDate(workout)}</td>
        <Link to={`/workout/${workout.id}`}><td>{workout.title}</td></Link>
        <td>{workout.time} minutes</td>
        {w.sport === "Run" || w.sport === "Bike" || w.sport === "Hike" || w.sport === "Walk" ? <td>{workout.distance} miles</td> : null }
        <td>{workout.isFavorite ? <BiLike size="25px" /> : null }</td>
      </tr>
    </tbody>
    ))}
   
    </Table>
    </div>
  </> 
)

 useEffect( () => {
    showFilteredWorkouts(sortedWorkouts)
  
    console.log("useEffect")
  }, [])


return sortedFilteredWorkouts.length > 0 ? showFilteredWorkouts(sortedFilteredWorkouts) :  showFilteredWorkouts(sortedWorkouts) 

}
export default Filter;

//  {showFilteredWorkouts(workouts)}
// return (
//   <>
//   {showFilteredWorkouts(newWorkoutList)}
//   </>
// )


  // const loadedWorkouts = (w) => (
  //   <>
  //   <h1>Filter Component</h1>
  //   <div> 
  //       {/* <article>
  //           <p>Title: {workout.title}</p>
  //           <p>Date: {workout.date}</p>
  //           <p>Time: {workout.time} minutes</p>
  //       </article> */}
  //   <h3>{w.length} Workouts</h3>
  //   <Table responsive="sm">
  //   <thead>
  //     <tr>
  //       <th>#</th>
  //       <th>Sport</th>
  //       <th>Date</th>
  //       <th>Workout Title</th>
  //       <th>Time</th>
  //       {w.sport === "Run" || w.sport === "Bike" || w.sport === "Hike" || w.sport === "Walk" ?  <th>Distance</th> : null }
  //       <th>Favorite?</th>
  //     </tr>
  //   </thead>
    
  //   {w.map((workout, key) => (
    
  //   <tbody>
  //     <tr>
  //       <td>{key + 1}</td>
  //       <td>{workout.sport}</td>
  //       <td>{formatDate(workout)}</td>
  //       <Link to={`/workout/${workout.id}`}><td>{workout.title}</td></Link>
  //       <td>{workout.time} minutes</td>
  //       {w.sport === "Run" || w.sport === "Bike" || w.sport === "Hike" || w.sport === "Walk" ? <td>{workout.distance} miles</td> : null }
  //       <td>{workout.isFavorite ? <BiLike size="25px" /> : null }</td>
  //     </tr>
  //   </tbody>
  //   ))}
   
  //   </Table>
  //   </div>
  //   </>
  //   )

  // useEffect( () => {
  //   loadedWorkouts(workouts)
  //   console.log("useEffect")
  // }, [])

  // return newWorkoutList.length > 0 ? loadedWorkouts(newWorkoutList) : <h3>No workouts found. Please enter another title</h3>



  // return newWorkoutList.length > 0 ? loadedWorkouts(newWorkoutList) : <h3>No workouts found. Please enter another title</h3>

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





  // if(!workouts) return <h3>no workouts</h3>

  //   const loadedAllWorkouts = () => {

  //   return (
  //   <>
  //   <h1>Filter Component</h1>
  //   <div> 
  //   <h3>{workouts.length} Workouts</h3>
  //   <Table responsive="sm">
  //   <thead>
  //     <tr>
  //       <th>#</th>
  //       <th>Sport</th>
  //       <th>Date</th>
  //       <th>Workout Title</th>
  //       <th>Time</th>
  //       <th>Distance</th>
  //       <th>Favorite?</th>
  //     </tr>
  //   </thead>
    
  //   {workouts.map((workout, key) => (
    
  //   <tbody>
  //     <tr>
  //       <td>{key + 1}</td>
  //       <td>{workout.sport}</td>
  //       <td>{formatDate(workout)}</td>
  //       <Link to={`/workout/${workout.id}`}><td>{workout.title}</td></Link>
  //       <td>{workout.time} minutes</td>
  //       {workout.sport === "Run" || workout.sport === "Bike" || workout.sport === "Hike" || workout.sport === "Walk" ? <td>{workout.distance} miles</td> : <td></td> }
  //       <td>{workout.isFavorite ? <BiLike size="25px" /> : null }</td>
  //     </tr>
  //   </tbody>
  //   ))}
   
  //   </Table>
  //   </div>
  //   </>
  //   )