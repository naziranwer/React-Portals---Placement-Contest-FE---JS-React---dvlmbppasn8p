import React from 'react';
import ReactDOM from 'react-dom';

const PortalButton = ({ buttonClick }) => {
  

  return (
    <div id='portal-button'>
      <button id="button" onClick={buttonClick}>
        Click
      </button>
    </div>
    
  );
};

export default PortalButton;
