import React from "react"

class App extends React.Component{
  constructor() {
    super()
    this.state = {
      count: 0
    }
    this.handleClickOne = this.handleClickOne.bind(this)
    this.handleClickTwo = this.handleClickTwo.bind(this)
  }

  handleClickOne() {
    this.setState(prevState => {
      return{
        count: prevState.count + 1
      }
    })
  }

  handleClickTwo() {
    this.setState(prevState => {
      return{
        count: prevState.count + 2
      }
    })
  }

  render(){
    return(
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClickOne}>Click here add one</button>
        <button onClick={this.handleClickTwo}>Click here add two</button>
      </div>
    )
  }
}


export default App