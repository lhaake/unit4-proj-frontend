import React, {useState} from "react"
import './WorkoutForm.css';
import {Form, Col, Row, Button} from 'react-bootstrap';
import RangeSlider from 'react-bootstrap-range-slider'
import { BiLike } from "react-icons/bi";

const WorkoutForm = (props) => {

  const { workout } = props

  // state for switch 
  const [swt, setSwt] = useState(workout.isFavorite)

  // state for exertion range slider
  const [range, setRange] = useState(workout.exertion)

  // state for the form 
  const [formData, setFormData] = useState(workout) 

    // HandleSubmit 
    const handleSubmit = (event) => {
        event.preventDefault()
        // handleSubmit from app 
        props.handleSubmit(formData);
        props.history.push('/dashboard');
    }

    // HandleChange 
    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value })
    }

return (
  <div className="form-background">
  <div className="form-container">
    <Form onSubmit={handleSubmit}>
    <h1>{props.title} Workout</h1>

    <Form.Row as={Col}>
    <Form.Group as={Col} controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control 
            type="text"
            placeholder="Enter title"
            name="title"
            value={formData.title}
            onChange={handleChange} 
            required />
    </Form.Group>

    <Form.Group as={Col} controlId="sport">
      <Form.Label>Sport</Form.Label>
      <Form.Control as="select" 
        defaultValue="Choose..."
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
        <option>Tennis</option>
        <option>Basketball</option>
        <option>Soccer</option>
        <option>Workout</option>
      
        </Form.Control>
    </Form.Group>

  </Form.Row>

<Form.Row as={Col}>
  <Form.Group as={Col} controlId="date">
    <Form.Label>Date</Form.Label>
    <Form.Control 
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        placeholder=""
        required />
  </Form.Group>

  <Form.Group as={Col} controlId="time">
      <Form.Label>Time (minutes)</Form.Label>
      <Form.Control 
        type="number"
        name="time"
        placeholder="minutes"
        value={formData.time}
        onChange={handleChange}
         />
    </Form.Group>
</Form.Row>

    <Form.Group as={Col} controlId="description">
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
    <Form.Group as={Col} controlId="distance">
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
    <Form.Group as={Col} controlId="URL">
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
    <Form.Group as={Row}>
        <Form.Label column sm="3">
          Exertion (1-10)
        </Form.Label>
        <Col xs="4">
          <RangeSlider
            type="number"
            name="exertion"
            min={1}
            max={10}
            value={formData.exertion = range}
            variant={range > 7 ? 'danger' : range > 4 ? 'warning' : 'primary'} 
            onChange={e => setRange(e.target.value) && handleChange}
            size='sm'
          />
        </Col>
    </Form.Group>
</Form.Group>

    <Form.Group as={Col} controlId="">
    <Form.Group as={Row} controlId="">
    <Form.Label column sm="1"><BiLike size="27px" /></Form.Label>
     <Col sm="1">
    <Form.Check 
      type="switch"
      id="custom-switch"
      name="isFavorite"
      onClick={() => setSwt(!swt)}
      value={formData.isFavorite = swt}
      onChange={handleChange}
      checked={swt === true}
    />
    </Col>
    </Form.Group>
    </Form.Group>

  <Button variant="danger" size="lg" type="submit" value={props.label}>
    Save
  </Button>

</Form>
</div>
</div>
)
}
export default WorkoutForm;
