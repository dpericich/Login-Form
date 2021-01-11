import React from "react";
import Input from "./Input";
import Button from "./Button";

const PopUp = ({ title, action }) => {
  return (
    <div className="popup">
      <div className="popup__modal">
        <div className="popup__header">
          <div className="popup__close" onClick={() => action()}>
            &times;
          </div>
          <h2 className="popup__title">{title || "Title"}</h2>
        </div>
        <Input text="Username / Email" focus={true} />
        <Input text="Password" />
        <Input text="Reenter Password" />
        <Button name="Submit" />
      </div>
    </div>
  );
};

export default PopUp;
