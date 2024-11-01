import React from "react";

const HeadHiddenMenu = (props) => {
  const {
    children,
    header,
    isSubMenuOpen,
    toggleSubMenu,
    activeButton = "",
  } = props;

  return (
    <div className="space-y-2 py-6">
      <div className="-mx-3">
        <button
          type="button"
          onClick={toggleSubMenu}
          className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold bg-transparent text-gray-900 border-0 focus:outline-none hover:border-0 hover:bg-gray-50"
          aria-controls="disclosure-1"
          aria-expanded={isSubMenuOpen}
        >
          {header}
          <svg
            className={`h-5 w-5 flex-none ${isSubMenuOpen ? "rotate-180" : ""}`}
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
        </button>
        {isSubMenuOpen && (
          <div className="mt-2 space-y-2" id="disclosure-1">
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

export default HeadHiddenMenu;
