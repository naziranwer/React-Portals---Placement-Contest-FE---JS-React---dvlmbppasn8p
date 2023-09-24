import React ,{useState, useRef} from 'react'
import '../styles/App.css';
import PortalButton from './PortalButton.js';
import PortalTextArea from './PortalTextArea.js';

//complete the function 
const App = () => {

const [inp,setInp]=useState("");
const [val,setValue]=useState("");
  return (
    
    // <div id="main">
    <>
      <input id="input" value={inp} onChange={e=>setInp(e.target.value)}></input><br/>
      <PortalButton setValue={setValue} inp={inp} setInp={setInp} /><br/>
      <PortalTextArea val={val}/>
      </>
    // </div>
  )
}


export default App;
