import React, { Component } from 'react'
import {default as event} from './event.jsx'
class One extends Component{
    constructor(props){
        super(props);
        this.state={
           name:"zhangsan"
        }
        //绑定this
       this.change=event.change.bind(this);
    }
    
    render(){
        
        return(<div>
             <button onClick={()=>this.change(this.state.name)}>点击</button>
        </div>)
    }
    

}

export default One;