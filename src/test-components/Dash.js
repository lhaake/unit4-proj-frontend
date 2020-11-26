import React from "react"
import {Link} from "react-router-dom"

const Dash = (props) => {

const {workouts} = props

let dateInfo = '2014-04-03'.split('-');
console.log(dateInfo)
// Please pay attention to the month (parts[1]); JavaScript counts months from 0:
// January - 0, February - 1, etc.
// Source: https://stackoverflow.com/questions/5619202/converting-a-string-to-a-date-in-javascript
let mydate = new Date(dateInfo[0], dateInfo[1] - 1, dateInfo[2]); 
console.log(mydate.toDateString());

const formatDate = (workout) => {
let dateInfo2 = ""
let dateInfo3 = []
let mydate2 = ""
    dateInfo2 = workout.date 
      console.log(dateInfo2)
    dateInfo3 = dateInfo2.split('-')
      console.log(dateInfo3)
    mydate2 = new Date(dateInfo3[0], dateInfo3[1] - 1, dateInfo3[2])
      console.log(mydate2.toDateString())
  return mydate2.toDateString()
}

console.log("workouts data passed as props in Dash component", workouts)
 
 const loaded = () => (
   <div>
     <h1>Dash Component</h1>
      <Link to="/workout/add">Add a Workout</Link><br /><br />
    <div className="dash-header">
    
      {workouts.map((workout) => (
       
        <article className="dash-titles">
        <Link to={`/workout/${workout.id}`}><h3>Title: {workout.title}</h3></Link>
      
      
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
          {workout.isFavorite ? <p>Heart/Thumbs Up for favorite</p> : null }
      
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

// let dateInfo ='2014-04-03'.split('-');
// // Please pay attention to the month (parts[1]); JavaScript counts months from 0:
// // January - 0, February - 1, etc.
// let mydate = new Date(dateInfo[0], dateInfo[1] - 1, dateInfo[2]); 
// console.log(mydate.toDateString());