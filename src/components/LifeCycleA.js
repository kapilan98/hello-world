import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'
 class LifeCycleA extends Component {
    constructor(props) {
        super(props)
        this.state = {
             name:'Kapilan'
        }
        console.log('LifeCycleA constructor!')
    }
    static getDerivedStateFromProps(props,state){
        console.log('LifeCycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount()
    {
        console.log('LifeCycleA componentDidMount')
    }
    shouldComponentUpdate()
    {
        console.log('ListCycleA shouldComponentUpdate')
        return true 
    }
    getSnapshotBeforeUpdate(prevProps, prevState)
    {
        console.log(' LifeCycleA getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate()
    {
        console.log('LifeCycleA componentDidUpdate')
    }
    changeState=()=>{
    this.setState({
        name:'Codebrahma'
    })
    }
    render() {
 
        console.log('LifeCyle A render')
        return (
            <div>
            <div>LifeCycleA</div>
            <button onClick={this.changeState}>Change State</button>
            <LifeCycleB/></div>
        )
    }
}
export default LifeCycleA
