import React from "react";

const Card = (props) => {
  const { variant = "", children } = props;
  return (
    <div
      className={`${variant} p-0 bg-white rounded-lg shadow sm:p-0 dark:bg-gray-800 dark:border-gray-700`}
    >
      {children}
    </div>
  );
};

export default Card;
