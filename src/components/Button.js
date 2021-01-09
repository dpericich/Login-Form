import React from "react";

const Button = ({ name }) => {
  return (
    <div
      className="button"
      onClick={() => alert(`You clicked on the ${name} button!`)}
    >
      {name}
    </div>
  );
};

export default Button;
