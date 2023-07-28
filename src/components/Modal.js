import React from 'react';
import classes from "./Modal.module.css";
import  ReactDOM  from 'react-dom';
const Modal = (props) => {
const Backdrop=(props)=>{
    return <div className={classes.backdrop} onClick={props.click}></div>
}
const ModalModule=(props)=>{
    return (
    <div className={classes.modal}>
    <div >{props.children}</div>
    </div>);
}
const portalElement = document.getElementById('cart');
  return (
    <React.Fragment>
        {ReactDOM.createPortal(<Backdrop click={props.backdropClick}/>,portalElement)}
        {ReactDOM.createPortal(<ModalModule>{props.children}</ModalModule>,portalElement)}
    </React.Fragment>
  )
}

export default Modal;
