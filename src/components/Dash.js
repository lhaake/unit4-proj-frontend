import React from "react"
import './Dash.css';
import {Link} from "react-router-dom"
import { BiLike } from "react-icons/bi";

const Dash = (props) => {

  const {workouts} = props

  // format Date
  const formatDate = (workout) => {
    let dateinfo = ""
    let dateArr = []
    let dateStr = ""
    dateinfo = workout.date 
      
    dateArr = dateinfo.split('-')
     
    dateStr = new Date(dateArr[0], dateArr[1] - 1, dateArr[2])
      
    return dateStr.toDateString()
  }

  // Sort workouts by date in descending order. 
  let newWorkoutList = workouts.sort((a, b) =>{
    let keyA = new Date(a.date)
    let keyB = new Date(b.date)
    return keyB - keyA
  })

  let runimg = "https://images.unsplash.com/photo-1530143311094-34d807799e8f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"

  let weights = "https://images.unsplash.com/photo-1526403223670-2aa44aaface2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"

  let yoga = "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1588&q=80"

  let hike = "https://images.unsplash.com/photo-1537430802614-118bf14be50c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80"

  let walk = "https://images.unsplash.com/photo-1515767079362-106c32de23f2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80"

  let defaultimg = "https://images.unsplash.com/photo-1557330359-ffb0deed6163?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"

  let bike = "https://images.unsplash.com/photo-1474962558142-9ca83af74bb7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80"

  let swim = "https://images.unsplash.com/photo-1557957002-a0e8957e0e07?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"

  const loaded = () => (
   <div className="dash-container">
      <button><Link to="/workout/add">Add Workout</Link></button>
    <div className="dash-header">
     
      {newWorkoutList.map((workout) => (
        <Link to={`/workout/${workout.id}`}><article className="dash-cards"   
   
        style={ workout.sport === "Lift Weights" || workout.sport === "Crossfit" ? {backgroundImage: `url(${weights})` } : {backgroundImage: `url(${defaultimg})` } 
        && workout.sport === "Run" ? {backgroundImage: `url(${runimg})` } : {backgroundImage: `url(${defaultimg})` }   
        && workout.sport === "Yoga" || workout.sport === "Pilates" ? {backgroundImage: `url(${yoga})` } : {backgroundImage: `url(${defaultimg})` }  
        && workout.sport === "Hike" ? {backgroundImage: `url(${hike})` } : {backgroundImage: `url(${defaultimg})` }  
        && workout.sport === "Walk" ? {backgroundImage: `url(${walk})` } : {backgroundImage: `url(${defaultimg})` }  
        && workout.sport === "Bike" ? {backgroundImage: `url(${bike})` } : {backgroundImage: `url(${defaultimg})` } 
        && workout.sport === "Swim" ? {backgroundImage: `url(${swim})` } : {backgroundImage: `url(${defaultimg})` } 
        }
        >

        <div className="dash-cards-text">
        <h5>{workout.title}</h5> 
          <ul>
            <li>{formatDate(workout)} | {workout.sport} | {workout.time} min | {workout.isFavorite ? <BiLike size="20px" /> : null }</li>
          </ul>
          </div>
        </article></Link>
      ))}
      </div>
  </div>
  )
  return workouts.length > 0 ? loaded() : <><h3>No workouts added yet.</h3><button className="first-button"><Link to="/workout/add">Add Workout</Link></button></>

}
export default Dash;

// DATE function
  // the month (parts[1]); JavaScript counts months from 0:
  // January - 0, February - 1, etc.
// Source: https://stackoverflow.com/questions/5619202/converting-a-string-to-a-date-in-javascript


// SORT function
// Source: https://stackoverflow.com/questions/8837454/sort-array-of-objects-by-single-key-with-date-value