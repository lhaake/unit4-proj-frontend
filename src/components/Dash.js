import React from "react"
import './Dash.css';
import {Link} from "react-router-dom"
import { BiLike } from "react-icons/bi";
import {Jumbotron, Button} from "react-bootstrap"

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

  let defaultimg = "https://images.unsplash.com/photo-1557330359-ffb0deed6163?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"

  let bike = "https://images.unsplash.com/photo-1474962558142-9ca83af74bb7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80"

  let swim = "https://images.unsplash.com/photo-1557957002-a0e8957e0e07?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"

  const loaded = () => (
   <div className="dash-container">
     {/* <h1>Dashboard</h1> */}

     {/* <Jumbotron>
        <h1>Dashboard</h1>
        <Button variant="">Add a Workout</Button>
      </Jumbotron> */}

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