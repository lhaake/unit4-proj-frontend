import React, { useState } from "react"
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
        <div className="filter-form-container">
          <h1>My Workouts</h1> 
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
