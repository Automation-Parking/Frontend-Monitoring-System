import React from "react";

const HeadCard = (props) => {
  const {children} = props;
    return (
    <div className="flex mx-auto items-center justify-between p-3 lg:px-8 rounded-t-lg shadow-md bg-gradient-to-b from-[#a3dcff] via-[#60bef8] to-[#43AFF3]">
      {children}
    </div>
  );
};

export default HeadCard;
