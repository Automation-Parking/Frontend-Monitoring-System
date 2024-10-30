import React from "react";

const InputField = (props) => {
  const {
    children,
    name,
    variant = "",
    background = "gray",
    type = "text",
    id = "",
  } = props;
  return (
    <div className="mb-5">
      <input
        type={`${type}`}
        id={`${id}`}
        name={`${name}`}
        className={`${variant} bg-${background}-50 border border-${background}-300 text-${background}-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-${background}-700 dark:border-${background}-600 dark:placeholder-${background}-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${variant}`}
        placeholder={`${children}`}
        required
      />
    </div>
  );
};

export default InputField;
