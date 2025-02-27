import React, { useState } from "react";
import LogoBraincore from "../assets/image/Logo/Braincore.png";
const HiddenMenu = (props) => {
  const { children, isMenuOpen, toggleMenu } = props;

  return (
    <div className="lg:hidden" role="dialog" aria-modal="true">
      {/* <!-- Background backdrop, show/hide based on slide-over state. --> */}
      {isMenuOpen && <div className="fixed inset-0 z-10"></div>}

      {/* Menu Utama */}
      {/* Menu Utama */}
      {isMenuOpen && (
        <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Logo-Brain-Parking</span>
              <img className="h-10 w-auto" src={LogoBraincore} alt="" />
            </a>
            <button
              onClick={toggleMenu}
              type="button"
              className="-m-2.5 rounded-md p-2.5 bg-transparent border-0 focus:outline-none hover:border-0 hover:bg-gray-50 "
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              {children}
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Log Out
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HiddenMenu;
