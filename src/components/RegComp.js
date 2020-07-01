import React, { Component } from 'react'

export class RegComp extends Component {
    render() {
        console.log('Regular component render')
        return (
            <div>
                <h1>RegComp {this.props.name}</h1>
            </div>
        )
    }
}

export default RegComp