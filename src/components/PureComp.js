import React, { PureComponent } from 'react'

export class PureComp extends PureComponent {
    render() {
        console.log('Pure component Render')
        return (
            <div>
              <h1>  PureComponent {this.props.name}</h1>
            </div>
        )
    }
}

export default PureComp