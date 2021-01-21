import React from "react";
import "./Modal.css";

const Modal = (props) => {
  return (
    <div className="modal-container">
      <div className="modal-backdrop" onClick={props.onClose}></div>
      {props.children}
    </div>
  );
};

export default Modal;
