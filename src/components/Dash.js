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

// let array = ["July 11, 1960", "February 1, 1974", "July 11, 1615", "October 18, 1851", "November 12, 1995"];

// let newArr = array.sort(function(date1, date2) {
//    date1 = new Date(date1);
//    date2 = new Date(date2);
//    if (date1 > date2) return 1;
//    if (date1 < date2) return -1;
// })

// console.log(newArr)
// https://stackoverflow.com/questions/8837454/sort-array-of-objects-by-single-key-with-date-value
let newWorkoutList = workouts.sort((a, b) =>{
  let keyA = new Date(a.date)
  let keyB = new Date(b.date)
  return keyB - keyA

})

console.log(newWorkoutList);

console.log("workouts data passed as props in Dash component", workouts)
      
 const loaded = () => (
   <div className="dash-container">
     <h1>Dash Component</h1>
      <Link to="/workout/add">Add a Workout</Link><br /><br />
    <div className="dash-header">
    
      {newWorkoutList.map((workout) => (
       
        <article className="dash-titles" style={{ }}>
        <Link to={`/workout/${workout.id}`}><h6>{workout.title}</h6></Link>
          <ul>
            <li>
              {/* Date: {workout.date} */}
              Date: {formatDate(workout)}
            </li>
            <li>
              Time: {workout.time} minutes
            </li>
            <li>
            Sport: {workout.sport}
            </li>
          </ul>
          {workout.isFavorite ? <BiLike size="25px" /> : null }
      
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