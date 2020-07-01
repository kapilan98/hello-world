import React,{Component} from 'react';
class Welcome extends Component{


    render()
    {
        const {name,heroname,dir}= this.props
        
    return <h1>{name} a.k.a {heroname} and directed by {dir}</h1>
    }
}
export default Welcome