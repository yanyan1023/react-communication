import React, { Component } from 'react'
import Two from './two/index.jsx'
import One from './one/index.jsx'
class Mains extends Component{
    constructor(props){
        super(props);
        this.state={
           
        }
    }
    render(){
       
        return (
            <div>
                <One></One>
                <Two></Two>
            </div>
            
        )
    }
    
}
export default Mains;