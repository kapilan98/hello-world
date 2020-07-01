import React, { Component } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'
import MemoComp from './MemoComp'

export class ParentComp extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             name:'kapilan'
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'kapilan'
            })
        },2000)
    }
    
    render() {
        console.log('*********Parent Component Render**********')
        return (
            <div>
                ParentComp
                <MemoComp name={this.state.name}/>
{/*                <RegComp name={this.state.name}/>*/}
{/*              <PureComp name={this.state.name}/>*/}
            
            </div>
        )
    }
}

export default ParentComp