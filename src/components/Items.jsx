import React, { useState } from "react";
import { User } from "./products";
import Modal from "../components/Modal";

const Items = () => {
  const [acTive, SetActive] = useState(1);
  const [user, SetUser] = useState(User);
  const [userInfo, SetUserInfo] = useState([]);
  const [showModal, SetShowModal] = useState(false);

  const handleClick = (index) => {
    SetActive(index);
  };
  const openModal = (i) => {
    const foundUser = user.find((eachUser) => eachUser.id === i);

    SetUserInfo(foundUser);
    SetShowModal(true);
  };

  return (
    <>
      <div className="container">
        {user.map((user, index) => (
          <div className="box" key={index}>
            <div
              className={acTive === index ? "img-box active" : "img-box"}
              onClick={() => handleClick(index)}
            >
              <img src={user.img} alt="" />
              <button
                className={acTive === index ? "btn btn-active" : "btn"}
                onClick={() => openModal(index)}
              >
                View More
              </button>
            </div>
            {showModal && (
              <Modal
                name={userInfo.name}
                age={userInfo.age}
                about={userInfo.about}
                img={userInfo.img}
                closeModal={() => SetShowModal(false)}
              />
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Items;
