import React from 'react';
import ReactDOM from 'react-dom';

const PortalTextArea = ({ value }) => {
  const portalRoot = document.getElementById('portal-textarea');

  return ReactDOM.createPortal(
    <div>
      <textarea id="textarea" value={value} readOnly />
    </div>,
    portalRoot
  );
};

export default PortalTextArea;
