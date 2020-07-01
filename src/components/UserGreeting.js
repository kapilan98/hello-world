import React, { Component } from 'react';

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedin:true
        }
    }
    
    
    render() {
        if(this.state.isLoggedin)
        {
            return (<div>welcome guest</div>)
        }
        else{
            return (<div>welcome kapilan!</div>)
        }  
    }
}

export default UserGreeting;