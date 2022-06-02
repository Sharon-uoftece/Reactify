import React, {Component} from "react"
import ReactDOM from "react-dom"

class Index extends Component {
    constructor(){
        super()
        this.state = {
            isLoggedIn: false
        }
    }

    render() {
        let status = "undefined"
        if (this.state.isLoggedIn === true) {
            status = "in"
        } else {
            status = "out"
        }

        return(
            <div>
                <h1>{status}</h1>
            </div>
        )
    }
}
ReactDOM.render(<Index />,document.getElementById("root"))