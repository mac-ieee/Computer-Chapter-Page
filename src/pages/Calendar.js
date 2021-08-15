import React from "react"
import IFrame from "../components/IFrame"

function Calendar(){

    const calendar_iframe = '<iframe src="https://calendar.google.com/calendar/embed?src=tfrai3tepn6qtectk3vj7g09f0%40group.calendar.google.com&ctz=America%2FNew_York" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>'
 
    return (
        <div>
            <IFrame iframe={calendar_iframe}/>
        </div>
    )

}

export default Calendar