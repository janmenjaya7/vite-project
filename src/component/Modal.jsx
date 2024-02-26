import React from "react";
import classes from "./model.module.css";
import { useNavigate } from "react-router-dom";
function Modal({ children }) {
  const navigate = useNavigate();
  function closeHandeler() {
    navigate("..");
  }
  return (
    <>
      <div className={classes.backdrop} onClick={closeHandeler} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}

export default Modal;
