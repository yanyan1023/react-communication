import React, { Component } from 'react'
import {default as fn} from '../../tool/storeEvent.js'

export default{
   change(){
       fn.$emit("up",this.state.name);
   }
}