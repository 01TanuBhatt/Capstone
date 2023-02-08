import React,{useEffect,useRef} from 'react';
import './Header.css'
export default function Header(props) {
  const resultRef=useRef();
  useEffect(()=>{
     resultRef.current.scrollIntoView();
  },[])
  return (
    <div className="header custom-scroll">
      <div className="header_history">
      <p>10-9</p>
      <p>2345-9887</p>
      <p>34*78</p>
      <p>12345/78</p>
      </div>
      <br></br>
      <div className="header_expression custom-scroll">
        <p>{props.expression}</p>
      </div>
      <p ref={resultRef} className="header_result">{props.result}</p>
    </div>
  )
}
