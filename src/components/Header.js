import React from "react"
import {Link} from "react-router-dom"

function Header(){

    return (
        <div>
            <h1>This is my header</h1>
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


export default Header