import React, {useEffect} from "react"
import './Filter.css';
import {Link} from "react-router-dom"
import Table from 'react-bootstrap/Table'
import { BiLike } from "react-icons/bi";

const Filter = (props) => {
  const {workouts} = props
  const {filteredWorkouts} = props
  console.log("filtered workouts list", filteredWorkouts)

  // format date 
  const formatDate = (workout) => {
    let dateinfo = ""
    let dateArr = []
    let dateStr = ""

    dateinfo = workout.date 
      
    dateArr = dateinfo.split('-')
      
    dateStr = new Date(dateArr[0], dateArr[1] - 1, dateArr[2])

    return dateStr.toDateString()
  }
  // sort workouts by date in descending order 
  let sortedWorkouts = workouts.sort((a, b) => {
    let keyA = new Date(a.date)
    let keyB = new Date(b.date)
    return keyB - keyA
  })

  // sort filtered workouts by date in descending order
  let sortedFilteredWorkouts = filteredWorkouts.sort((a, b) => {
    let keyA = new Date(a.date)
    let keyB = new Date(b.date)
    return keyB - keyA
  })

const showFilteredWorkouts = (w) => (
  <>
    <div className="filter-container"> 
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

//  useEffect( () => {
//     showFilteredWorkouts(sortedWorkouts)
  
//   }, [])


return sortedFilteredWorkouts.length > 0 ? showFilteredWorkouts(sortedFilteredWorkouts) :  showFilteredWorkouts(sortedWorkouts) 

}
export default Filter;
