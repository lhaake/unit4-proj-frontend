import React from "react"
import {Link} from "react-router-dom"

const Nav = () => {
  return (
    <div>
      <h1>Nav Component</h1> 
      <Link to="/login"></Link> 

    </div>
  )
}

export default Nav;