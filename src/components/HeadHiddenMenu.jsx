import React from "react";

const HeadHiddenMenu = (props) => {
  const { children, header } = props;
  return (
    <div className="space-y-2 py-6">
      <div className="-mx-3">
        <button
          type="button"
          className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
          aria-controls="disclosure-1"
          aria-expanded="false"
        >
          {header}
          {/* <!--
      Expand/collapse icon, toggle classNamees based on menu open state.

      Open: "rotate-180", Closed: ""
    --> */}
          <svg
            className="h-5 w-5 flex-none"
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
        {/* <!-- 'Product' sub-menu, show/hide based on menu state. --> */}
        <div className="mt-2 space-y-2" id="disclosure-1">
          {children}
        </div>
      </div>
    </div>
  );
};

export default HeadHiddenMenu;
