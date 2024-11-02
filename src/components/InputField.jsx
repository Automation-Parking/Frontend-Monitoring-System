import React from "react";

const InputField = (props) => {
  const {
    children,
    name,
    variant = "",
    type = "text",
    id = "",
  } = props;
  return (
    <>
      <input
        type={`${type}`}
        id={`${id}`}
        name={`${name}`}
        className={`${variant} `}
        placeholder={`${children}`}
        required
      />
    </>
  );
};

export default InputField;
