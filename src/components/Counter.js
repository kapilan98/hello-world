import React, { Component } from 'react'
import UpdatedComponent from './WithCounter'


 class Counter extends Component {
    
    render() {
       
        const {count,incrementer}=this.props
        return (
            <div>
                <button onClick={incrementer}>Clicked {count} times</button>
            </div>
        )
    }
}

export default UpdatedComponent(Counter)
