import React from "react"
import ReactDOM from "react-dom"

function Hi() {
    const date = new Date()
    const hours = date.getHours()
    let timeofDay = " "

    if (hours < 12) {
        timeofDay = "morning"
    } else if (hours >= 12 && hours <= 17) {
        timeofDay = "afternoon"
    } else {
        timeofDay = "night"
    }
        
    return (
        <div>
            <h2>It is currently about {date.getHours() %12} o'clock!</h2>
            <h1>Good {timeofDay} !</h1>
        </div>
    )
}

ReactDOM.render(<Hi/>,
document.getElementById("root"))

 