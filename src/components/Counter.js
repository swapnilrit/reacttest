import React, { Component } from 'react';

import {connect} from 'react-redux';
import incrementCounter from '../counterStore/counterActions';

 class Counter extends Component {

    
    render() {
        return (
            <div>
               <h1>{this.props.count}</h1> 
               <button onClick={()=>this.props.dispatch(incrementCounter(10))}> Increment</button>
            </div>
        )
    }

  
}

const mapStateToProps=(state)=>{
    return {
      count:state.counter.count
    }
   }
 const  mapDispatchToProps=(dispatch) =>{
       return { dispatch: dispatch}
     }

export default connect(mapStateToProps,mapDispatchToProps)(Counter)
