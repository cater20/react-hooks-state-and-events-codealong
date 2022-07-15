//import React from "react";
import  React, {useState} from "react"
function Toggle() {

const [isOn, setIsOn]=useState(false);

  return <button onClick={handleclick}>{isOn ? "ON" : "OFF"}</button>;
}

export default Toggle;
