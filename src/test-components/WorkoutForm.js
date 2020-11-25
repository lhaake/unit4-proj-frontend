import React, {useState} from "react"
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const WorkoutForm = (props) => {

    // state for the form 
    const [formData, setFormData] = useState(props.workout)   // update with props sent down from app for an empty form 
    
    console.log("props", props.workout)

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
    <Form onSubmit={handleSubmit}>
    <h1>WorkoutForm Component</h1>

    <Form.Row>
    <Form.Group as={Col} controlId="">
        <Form.Label>Title (*)</Form.Label>
        <Form.Control 
            type="text"
            placeholder=""
            name="title"
            value={formData.title}
            onChange={handleChange} 
            required />
    </Form.Group>

    <Form.Group as={Col} controlId="">
      <Form.Label>Sport</Form.Label>
      <Form.Control as="select" defaultValue="Choose..."
        type="text"
        name="sport"
        value={formData.sport}
        onChange={handleChange}

      >
        <option>Choose...</option>
        <option>Walk</option>
        <option>Hike</option>
        <option>Run</option>
        <option>Bike</option>
        <option>Swim</option>
        <option>Yoga</option>
        <option>Pilates</option>
        <option>Lift Weights</option>
        <option>Crossfit</option>
        <option>HIIT</option>
        <option>Rock Climb</option>
        <option>Ski</option>
        <option>Snowboard</option>
        <option>Snowshoe</option>
        <option>Surf</option>
        <option>Kayak</option>
        <option>Stand Up Paddleboard</option>
        <option>Workout</option>
      
        </Form.Control>
    </Form.Group>

  </Form.Row>

<Form.Row>
  <Form.Group as={Col} controlId="">
    <Form.Label>Date</Form.Label>
    <Form.Control 
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        placeholder=""
        required />
  </Form.Group>

  <Form.Group as={Col} controlId="">
      <Form.Label>Time (minutes)</Form.Label>
      <Form.Control 
        type="number"
        name="time"
        placeholder=""
        value={formData.time}
        onChange={handleChange}
        placeholder="" />
    </Form.Group>
</Form.Row>

    <Form.Group as={Col} controlId="">
    <Form.Label>Description</Form.Label>
    <Form.Control as="textarea" rows={4} 
        type="text"
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="How did it go? Were you tired or rested? What was the weather?"
    />
  </Form.Group>

    {formData.sport === "Run" || formData.sport === "Bike" || formData.sport === "Hike" || formData.sport === "Walk" ? 
    <Form.Group as={Col} controlId="">
      <Form.Label>Distance (miles)</Form.Label>
      <Form.Control
        type="number"
        name="distance"
        value={formData.distance}
        onChange={handleChange}
        placeholder="" />
    </Form.Group>
    : null 
    }

    {formData.sport === "Yoga" || formData.sport === "Workout" || formData.sport === "Pilates" || formData.sport === "Lift Weights" || formData.sport === "HIIT" || formData.sport === "Crossfit" ? 
    <Form.Group as={Col} controlId="">
      <Form.Label>Workout Video URL</Form.Label>
      <Form.Control 
        type="text"
        name="url"
        value={formData.url}
        onChange={handleChange}
        placeholder="" />
    </Form.Group>
    : null 
    }

    <Form.Group as={Col} controlId="">
      <Form.Label>Exertion (1-10)</Form.Label>
      <Form.Control 
        type="number"
        name="exertion"
        value={formData.exertion}
        onChange={handleChange}
        placeholder="" />
    </Form.Group>

    <Form.Group as={Col} controlId="">
      <Form.Label>Favorite?</Form.Label>
      <Form.Control 
        type="text"
        name="isFavorite"
        value={formData.isFavorite}
        onChange={handleChange}
        placeholder="" />
    </Form.Group>
   

  <Button variant="primary" size="lg" type="submit" value={props.label}>
    Save
  </Button>

</Form>

)
}
export default WorkoutForm;


// original form 

//   return (
//       <div>
//         <form onSubmit={handleSubmit}> 
//         <br />
//         <h1>WorkoutForm Component</h1>
//         Title:
//         <input
//             type="text"
//             name="title"
//             value={formData.title}
//             onChange={handleChange}
//         />
//         <br />
//         Date: 
//         <input
//             type="text"
//             name="date"
//             value={formData.date}
//             onChange={handleChange}
//         />
//         <br />
//         Time:
//         <input
//             type="number"
//             name="time"
//             placeholder="Enter a time"
//             value={formData.time}
//             onChange={handleChange}
//         />
//         <br />
//         Distance: 
//         <input
//             type="number"
//             name="distance"
//             value={formData.distance}
//             onChange={handleChange}
//         />
//         <br />
//         Sport: 
//         <input
//             type="text"
//             name="sport"
//             value={formData.sport}
//             onChange={handleChange}
//         />
//         <br />
//         Description:
//         <input
//             type="text"
//             name="description"
//             value={formData.description}
//             onChange={handleChange}
//         />
//         <br />
//         Exertion:
//         <input
//             type="number"
//             name="exertion"
//             value={formData.exertion}
//             onChange={handleChange}
//         />
//         <br />
//         URL:
//         <input
//             type="text"
//             name="url"
//             value={formData.url}
//             onChange={handleChange}
//         />
//         <br />
//         Favorite?: 
//         <input
//             type="text"
//             name="isFavorite"
//             value={formData.isFavorite}
//             onChange={handleChange}
//         />
//         <br />
//         <input className="form-button" type="submit" value={props.label} />

//         </form>
//     </div>
//     )