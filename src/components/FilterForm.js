import React, { useState } from "react"
import {Form, Button, Col} from 'react-bootstrap';
import './FilterForm.css';


const FilterForm = (props) => {

    // state to keep track of input entered in search bar
    const [searchData, setSearchData] = useState("")

    const {workouts} = props

    // handleChange 
    const handleChange = (event) => {
        const searchValue = event.target.value
        setSearchData(searchValue)
    }
   
    // handleSubmit 
    const handleSubmit = (event) => {
        event.preventDefault()
        props.filterTitle(workouts, searchData);
        setSearchData("")
       props.history.push('/search');
    }

  return (
    <div>
      <h1>My Workouts</h1> 
            

        <div className="filter-form-container">
          <h6>Enter a Workout title to search all workouts</h6>
            <form onSubmit={handleSubmit} className="form-search">
                 <input
                    type="text"
                    placeholder="Morning Hike"
                    value={searchData}
                    onChange={handleChange}
                />
                <button type="submit">Search</button>
            </form>
        
        </div>
    </div>
  )
}

export default FilterForm;


//  B FORM

    // <Form onSubmit={handleSubmit} className="filter-form">
              
    //           <Form.Row as={Col}>
    //           <Form.Group as={Col} controlId="filter-title">
    //             {/* <Form.Label>Enter a title to search your full list of workouts</Form.Label> */}
    //             <Form.Control 
    //               type="text"
    //               placeholder="Enter a title" 
    //               value={searchData}
    //               onChange={handleChange} />
    //           </Form.Group>
    //           <Form.Group as={Col}>
    //             <Button variant="primary" type="submit">
    //              Search
    //             </Button>
    //           </Form.Group>
    //           </Form.Row>

             
    //       </Form>