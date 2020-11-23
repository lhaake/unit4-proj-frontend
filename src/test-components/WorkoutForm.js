import React, {useState} from "react"
// import {Link} from "react-router-dom"

const WorkoutForm = (props) => {
    // state for the form 
    const [formData, setFormData] = useState(props.workout);   // update with props sent down from app for an empty form 
    
    // HandleSubmit 
    const handleSubmit = (event) => {
        event.preventDefault()
        // handleSubmit from app here 
        props.handleSubmit(formData);
        props.history.push('/dashboard');
    }

    // HandleChange 
    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value })
    }

  return (
      <div>
        <form onSubmit={handleSubmit}> 
        <br />
        <h1>WorkoutForm Component</h1>
        Title:
        <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
        />
        <br />
        Date: 
        <input
            type="text"
            name="date"
            value={formData.date}
            onChange={handleChange}
        />
        <br />
        Time:
        <input
            type="number"
            name="time"
            placeholder="Enter a time"
            value={formData.time}
            onChange={handleChange}
        />
        <br />
        Distance: 
        <input
            type="number"
            name="distance"
            value={formData.distance}
            onChange={handleChange}
        />
        <br />
        Sport: 
        <input
            type="text"
            name="sport"
            value={formData.sport}
            onChange={handleChange}
        />
        <br />
        Description:
        <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
        />
        <br />
        Exertion:
        <input
            type="number"
            name="exertion"
            value={formData.exertion}
            onChange={handleChange}
        />
        <br />
        URL:
        <input
            type="text"
            name="url"
            value={formData.url}
            onChange={handleChange}
        />
        <br />
        Favorite?: 
        <input
            type="text"
            name="isFavorite"
            value={formData.isFavorite}
            onChange={handleChange}
        />
        <br />
        <input className="form-button" type="submit" value={props.label} />

        </form>
    </div>
    )


}
export default WorkoutForm;