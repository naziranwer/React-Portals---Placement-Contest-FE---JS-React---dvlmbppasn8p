import React from 'react';
import  ReactDOM  from 'react-dom';

//complete this function using portals
const PortalTextArea=({val})=>{
    return (
        <div id="portal-textarea">
            <textarea id="textarea" value={val}>{val}</textarea>
        </div>
    )
}
export default PortalTextArea;
