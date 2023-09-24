import React from 'react';
import  ReactDOM  from 'react-dom';

//complete this function using portals
const PortalButton=({setValue,inp,setInp})=>{
  const handleClick=()=>{
   setValue(inp);
   setInp("");
  }
    return (
        <div id="portal-button">
            <button id="button" onClick={handleClick}>Click</button>
        </div>
        
    )
}
export default PortalButton;
