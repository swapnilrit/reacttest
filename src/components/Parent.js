import React,{useEffect,useState,useRef} from 'react'


function Parent(props) {

  let timer=useRef();
  let myRef=null;
  const [count,setCount]= useState(10);

  

  useEffect(() => {

     timer.current= setInterval(function(){
        setCount(prevState=>prevState+1);
      },1000);

      return ()=>{
          clearInterval(timer.current);
      }

  }, [])

  useEffect(() => {
     myRef.focus();
      
  }, [myRef])

 const clearTimer=()=>{

    clearInterval( timer.current);
 }



  return (<div>
           <h1 className={props.hell.customColor}> Hello {count} From Main branch </h1>
            <input type="text" ref={(ele)=>myRef=ele}/>
            <button onClick={()=>clearTimer()}>Stop Timer</button>
        </div>)
}

export default Parent
