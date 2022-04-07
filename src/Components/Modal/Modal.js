import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const BackDrops = (props) => {
  return <div className={classes.backdrop} />;
};
const Overlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlay");
const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<BackDrops />, portalElement)}
      {ReactDOM.createPortal(
        <Overlay>{props.children}</Overlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
