import React from "react";

const SubDropdown = (props) => {
  const {children} = props;
  return (
    <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50">
      {children}
    </div>
  );
};

export default SubDropdown;
