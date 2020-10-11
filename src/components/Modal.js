import React, { useEffect } from 'react';

const Modal = ({ modalContent, modalFun }) => {
  useEffect(() => {
    setTimeout(() => {
      modalFun();
    }, 2000);
  }, [modalFun]);
  return <div className="modal">{modalContent}</div>;
};

export default Modal;
