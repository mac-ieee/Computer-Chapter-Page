import React from "react"
import Members from "../data/members.json"
import Member from "../components/Member"

function Team(){

    const TeamMembers = Members.map(member => 
        <Member
            key = {member.macID}
            name = {member.name}
            position = {member.position}
            program = {member.program}
        />
    )
    
    return (
        <div>
            {TeamMembers}
        </div>
    )
}


export default Team