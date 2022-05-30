import React from "react"

function ContactCard(props) {
    return (
        <div>
            <img src={props.imgUrl} />
            <h3>{props.name}</h3>
            <h3>{props.phone}</h3>     
        </div>
    )
}

export default ContactCard