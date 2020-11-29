import React from "react"
import './Dash.css';
import {Link} from "react-router-dom"
import { BiLike } from "react-icons/bi";

const Dash = (props) => {

  const {workouts} = props

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

  // Source: https://stackoverflow.com/questions/8837454/sort-array-of-objects-by-single-key-with-date-value
  let newWorkoutList = workouts.sort((a, b) =>{
    let keyA = new Date(a.date)
    let keyB = new Date(b.date)
    return keyB - keyA
  })

  console.log(newWorkoutList);

  console.log("workouts data passed as props in Dash component", workouts)
  let runimg = "https://images.unsplash.com/photo-1530143311094-34d807799e8f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"

  let weights = "https://images.unsplash.com/photo-1526403223670-2aa44aaface2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"

  let yoga = "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1588&q=80"

  let hike = "https://images.unsplash.com/photo-1537430802614-118bf14be50c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80"

  let walk = "https://images.unsplash.com/photo-1515767079362-106c32de23f2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80"
  const loaded = () => (
   <div className="dash-container">
     <h1>Dashboard</h1>
      <Link to="/workout/add">Add a Workout</Link><br /><br />

    <div className="dash-header">
     
      {newWorkoutList.map((workout) => (
        <article className="dash-cards"   
        // style={ workout.sport === "Run" ? {backgroundImage: `url(${runimg})` } : null }
        style={ workout.sport === "Lift Weights" ? {backgroundImage: `url(${weights})` } : null 
        || workout.sport === "Run" ? {backgroundImage: `url(${runimg})` } : null 
        || workout.sport === "Yoga" ? {backgroundImage: `url(${yoga})` } : null 
        || workout.sport === "Hike" ? {backgroundImage: `url(${hike})` } : null 
        || workout.sport === "Walk" ? {backgroundImage: `url(${walk})` } : null 
      }>
        
        
        
        <div className="dash-cards-text">
        <Link to={`/workout/${workout.id}`}><h4>{workout.title}</h4> </Link>
          <ul>
            <li>{formatDate(workout)} | {workout.sport} | {workout.time} minutes | {workout.isFavorite ? <BiLike size="25px" /> : null }</li>
          </ul>
          </div>
        </article>
      ))}
      </div>
  </div>
  )
  return workouts.length > 0 ? loaded() : <h1>Loading...</h1>

}
export default Dash;

 // if(!workouts) return <div>No workouts data</div>

 // pace Calculation
  // let pace = 0
  // {workout.distance ? <h3>Pace: {pace = workout.time / workout.distance} minutes / mile</h3> : null }

  // Please pay attention to the month (parts[1]); JavaScript counts months from 0:
// January - 0, February - 1, etc.
// Source: https://stackoverflow.com/questions/5619202/converting-a-string-to-a-date-in-javascript
// Example code: let dateInfo = '2014-04-03'.split('-');
// console.log(dateInfo)
// let mydate = new Date(dateInfo[0], dateInfo[1] - 1, dateInfo[2]); 
// console.log(mydate.toDateString());

// let array = ["July 11, 1960", "February 1, 1974", "July 11, 1615", "October 18, 1851", "November 12, 1995"];

// let newArr = array.sort(function(date1, date2) {
//    date1 = new Date(date1);
//    date2 = new Date(date2);
//    if (date1 > date2) return 1;
//    if (date1 < date2) return -1;
// })

// console.log(newArr)