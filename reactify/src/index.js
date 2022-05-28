// //react: reuseable web components
// import React from "react"
// import ReactDOM from "react-dom"
// // the <ul> tag defines an unordered bulleted list

// function MyApp() {
//   return (<ul>
//     <li>To do 1:</li>
//     <li>To do 2:</li>
//     <li>To do 3:</li>
//   </ul>)
// }

// ReactDOM.render(
//   <MyApp />,
//   document.getElementById("root")
// )







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
  <MyInfo />,document.getElementById("root")
)


