import React, { Component } from 'react'
import {default as fn} from '../../tool/storeEvent.js'
class Two extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"xyy"
        }
    }
    render(){
        return(<div>{this.state.name}</div>)
    }
    componentDidMount(){
        fn.$on("up",(data)=>{
            console.log(data)
            this.setState({
                name:data
            })
        })
    }

}

export default Two;