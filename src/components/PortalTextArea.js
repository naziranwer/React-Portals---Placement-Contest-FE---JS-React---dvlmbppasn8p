import React from 'react';
import ReactDOM from 'react-dom';

const PortalTextArea = ({ value }) => {
  

  return (
    <div id='portal-textarea'>
      <textarea id="textarea" value={value}>{value}</textarea>
    </div>
    
  );
};

export default PortalTextArea;
