import React from "react"
import {Link} from "react-router-dom"

function NavBar(){

    return (
        <div>
            <h1>This is my NavBar</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/events">Events</Link>
                </li>
                <li>
                    <Link to="/team">Team</Link>
                </li>
                <li>
                    <Link to="/calendar">Calendar</Link>
                </li>
            </ul>
            
        </div>
    )
}


export default NavBar