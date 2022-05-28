import React from "react"
import ReactDOM from "react-dom"

function MyInfo() {
  return (
    <div>
      <h1>Sharon Li</h1>
      <p>Hi I am constantly the evolving form of myself.</p>
      <ul> 
        <li>Shanghai</li>
        <li>Thailand</li>
        <li>Japan</li>
      </ul>
    </div>
  )
}

ReactDOM.render(
  <MyApp />,document.getElementById("root")
)