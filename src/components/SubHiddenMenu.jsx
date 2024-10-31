import React from "react";

const SubHiddenMenu = (props) => {
  const { href, children } = props;
  return (
    <a
      href={`${href}`}
      className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
    >
      {children}
    </a>
  );
};

export default SubHiddenMenu;
