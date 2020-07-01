import React, { Component } from 'react'

 class ClassCounter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    Incrementer= ()=>{
        this.setState(
            {
                count:this.state.count+1
            })  
     }
    
    render() {
        return (
            <div>
                <button onClick={this.Incrementer}>clicked {this.state.count} times</button>
            </div>
        )
    }
}

export default ClassCounter
