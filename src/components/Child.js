import React, { Component } from 'react'


    
export default class Child extends Component {
 
 constructor(props) {
     super(props)
     this.state={
         message:"swapnil"
     }
 }

 changeMessage=()=>{
     alert("hello");
     this.setState((prevState)=>({
             ...prevState,
             message:"rohit"
         }))
 }
  
render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
            </div>
        )
    }
}


