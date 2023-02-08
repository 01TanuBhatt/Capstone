import React from 'react';
import './Header.css'
export default function Header() {
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
        <p>10+50+89</p>
      </div>
      <p className="header_result">149</p>
    </div>
  )
}
