import React from 'react'
import { NavLink } from 'react-router-dom'

function Secret() {
    return (
        <div>
            <h2>Secret Page!</h2>


            <NavLink to='/login'>Login Page</NavLink> <br/>
            <NavLink to='/register'>Register page</NavLink>



            
        </div>
    )
}

export default Secret
