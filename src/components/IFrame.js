import React from "react"

function IFrame(props){
    return (
        <div dangerouslySetInnerHTML={ {__html:  props.iframe?props.iframe:""}} />
    );
}

export default IFrame