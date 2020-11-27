import React, { useState } from "react"

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
      <h1>{props.label} Form</h1> 
            <p>Enter a title to search your workouts</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter a title"
                    value={searchData}
                    onChange={handleChange}
                />
                <button type="submit">Search</button>
            </form>
    </div>
  )
}

export default FilterForm;