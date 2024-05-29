import React from "react";

const Modal = ({ name, age, img, about, closeModal }) => {
  return (
    <div className="modal-box">
      <span onClick={closeModal}>Exit</span>
      <img src={img} alt="" />
      <h4>
        {name},{age} years old
      </h4>
      <p>{about}</p>
    </div>
  );
};

export default Modal;
