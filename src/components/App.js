import React ,{useState, useRef} from 'react'
import '../styles/App.css';
import PortalButton from './PortalButton.js';
import PortalTextArea from './PortalTextArea.js';

//complete the function 
const App = () => {
  const [inputValue,setInputvalue]= useState('');
  const [textArea,setTextArea]=useState('');

  

  const handleButtonClick=()=>{
    setTextArea(inputValue);
    setInputvalue("");
  }


  return (
    
    <div id="main">
      <input id="input" value={inputValue} onChange={(e)=> setInputvalue(e.target.value)}></input><br/>
      <PortalButton buttonclick={handleButtonClick} /><br/>
      <PortalTextArea value={textArea}/>
    </div>
  )
}


export default App;
