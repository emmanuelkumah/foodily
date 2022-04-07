import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const BackDrops = ({ handleHideCart }) => {
  return <div className={classes.backdrop} onClick={handleHideCart} />;
};
const Overlay = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlay");
const Modal = ({ handleHideCart, children }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <BackDrops handleHideCart={handleHideCart} />,
        portalElement
      )}
      {ReactDOM.createPortal(<Overlay>{children}</Overlay>, portalElement)}
    </>
  );
};

export default Modal;
