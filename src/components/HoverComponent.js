import React, { Component } from 'react'
import UpdatedComponent from './WithCounter'
 class HoverComponent extends Component {
    
    
    render() {
        const { count, incrementer }=this.props
        return (
            <div>
            <h2 onMouseOver={incrementer}>Hovered {count} times</h2>                
            </div>
        )
    }
}

export default UpdatedComponent(HoverComponent)
