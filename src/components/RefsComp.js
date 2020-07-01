import React, { Component } from 'react'

class RefsComp extends Component {
    
    constructor(props) {
        super(props)
    
        this.inputRef=React.createRef()
    }
    
    componentDidMount()
    {
        this.inputRef.current.focus()
        console.log(this.inputRef)
    }
    
    render() {
        return (
            <div>
                Refs Component
                <input type="text" ref={this.inputRef}></input>                
            </div>
        )
    }
}

export default RefsComp
