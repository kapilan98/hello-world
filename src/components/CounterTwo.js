import React, { Component } from 'react'

 class CounterTwo extends Component {
 
    render() {
        const {count, Incrementer}=this.props
        return (
            <div>
                <button onClick={Incrementer}>Clicked {count} times</button>
            </div>
        )
    }
}

export default CounterTwo
