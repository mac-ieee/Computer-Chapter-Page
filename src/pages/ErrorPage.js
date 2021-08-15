import React from "react"
import {Link} from "react-router-dom"

function ErrorPage(){
    return (
        <div>
            Error Page
            <Link to="/">Return Home</Link>
        </div>
    )
}

export default ErrorPage