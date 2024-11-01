import React, { Children, useState } from "react";

const Dropdown = (props) => {
  const {
    isDropdownOpen,
    activeButton = "",
    dropdownName,
    onClick,
    children,
  } = props;
  console.log("Dropdown", isDropdownOpen);
  console.log("Button", activeButton);
  console.log("Name", dropdownName);

  return (
    <div className="relative">
      <button
        type="button"
        className="flex items-center gap-x-1 text-sm bg-transparent text-gray-900 font-semibold border-0 focus:outline-none hover:border-0"
        onClick={onClick}
        aria-expanded={isDropdownOpen}
      >
        <div className="relative">
          <div className="flex">
            <p>{dropdownName}</p>
            <svg
              className={`h-5 w-5 flex-none text-gray-400 transition-all duration-500 ease-in-out ${
                activeButton === dropdownName && isDropdownOpen
                  ? "rotate-180"
                  : ""
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path
                fillRule="evenodd"
                d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <span
            className={`absolute left-0 right-0 h-0.5 mt-1 bg-gray-700 transition-all duration-500 ease-in-out ${
              activeButton === dropdownName && isDropdownOpen
                ? "scale-x-100 opacity-100"
                : "scale-x-0 opacity-0"
            }`}
            style={{
              transformOrigin: "left",
            }}
          />
        </div>
      </button>
      <div
        className={`absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition-transform duration-200 ease-out ${
          activeButton === dropdownName && isDropdownOpen
            ? "transform scale-100 opacity-100"
            : "transform scale-95 opacity-0 pointer-events-none"
        }`}
      >
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default Dropdown;
