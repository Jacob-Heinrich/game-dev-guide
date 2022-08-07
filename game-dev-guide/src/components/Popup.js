import React from 'react';
import Popup from 'reactjs-popup';
import '../App.css';

export default function Pop({title,body,requirements}){
  return(
    <>
    <div className = "modelingPop">
    <Popup trigger={<button className = "popupBtn">?</button>} modal>
    <div className = "modelingPopBody">
    <h1 className = "modelingContent mondelingContent__modelingTitle">{title}</h1>
    <p className = "modelingContent mondelingContent__modelingParagraph">{body}</p>
    <h1 className = "modelingContent mondelingContent__modelingReq">Minimum Requirements</h1>
    <p className = "modelingContent mondelingContent__modelingReqBody">{requirements}</p>
    </div>
    </Popup>
    </div>
    </>
  )
}
