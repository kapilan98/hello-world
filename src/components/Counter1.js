import React, { Component } from 'react'

 class Counter1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    Incrementer =()=>{
        this.setState(prevState=>{
            return {count:prevState.count+1}
        })
    }
    render() {
        
        return (
            <div>
                {this.state.count, this.Incrementer}
            </div>
        )
    }
}

export default Counter1
