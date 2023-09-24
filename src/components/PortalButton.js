import React from 'react';
import ReactDOM from 'react-dom';

const PortalButton = ({ buttonClick }) => {
  const portalRoot = document.getElementById('portal-button');

  return ReactDOM.createPortal(
    <div>
      <button id="button" onClick={buttonClick}>
        Click
      </button>
    </div>,
    portalRoot
  );
};

export default PortalButton;
