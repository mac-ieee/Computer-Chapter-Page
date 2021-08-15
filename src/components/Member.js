import React from "react"

function Member(props){
    return (
        <div>
            {props.name}
            <ul>
                <li>Position: {props.position}</li>
                <li>Program: {props.program}</li>
            </ul>
        </div>
    )
}

export default Member