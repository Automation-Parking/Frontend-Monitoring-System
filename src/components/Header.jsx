import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import SubDropdown from "./SubDropdown";
import LogoMotor from "../assets/image/Logo/fontisto_motorcycle.png";
import LogoMobil from "../assets/image/Logo/mdi_car.png";
import LogoArchive from "../assets/image/Logo/mdi_archive-eye-outline.png";
import LogoChartLine from "../assets/image/Logo/uil_chart-line.png";
import LogoChartBar from "../assets/image/Logo/memory_chart-bar.png";
import LogoPaper from "../assets/image/Logo/bxs_file-archive.png";
import LogoPaperArchive from "../assets/image/Logo/vaadin_archive.png";
import LogoBraincore from "../assets/image/Logo/Braincore.png";
import LogoAdmin from "../assets/image/Logo/LogoAdmin.png";
import LogoLogout from "../assets/image/Logo/logout.png";
import HiddenMenu from "./HiddenMenu";
import SubHiddenMenu from "./SubHiddenMenu";
import HeadHiddenMenu from "./HeadHiddenMenu";
import Modal from "./Modal";
const Header = () => {
  const [isMonitoringDropdownOpen, setMonitoringDropdownOpen] = useState(false);
  const [isAnalyticDropdownOpen, setAnalyticDropdownOpen] = useState(false);
  const [isReportPaperDropdownOpen, setReportPaperDropdownOpen] =
    useState(false);
  const [activeButton, setActiveButton] = useState("");
  const [isMonitoringSubMenuOpen, setMonitoringSubMenuOpen] = useState(true);
  const [isAnalyticSubMenuOpen, setAnalyticSubMenuOpen] = useState(true);
  const [isReportPaperSubMenuOpen, setReportPaperSubMenuOpen] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleMonitoringSubMenu = () => {
    setMonitoringSubMenuOpen(!isMonitoringSubMenuOpen);
  };
  const toggleAnalyticSubMenu = () => {
    setAnalyticSubMenuOpen(!isAnalyticSubMenuOpen);
  };
  const toggleReportPaperSubMenu = () => {
    setReportPaperSubMenuOpen(!isReportPaperSubMenuOpen);
  };

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);

    if (buttonName === "Monitoring") {
      setMonitoringDropdownOpen(!isMonitoringDropdownOpen);
      setAnalyticDropdownOpen(false);
      setReportPaperDropdownOpen(false);
    } else if (buttonName === "Analytics") {
      setAnalyticDropdownOpen(!isAnalyticDropdownOpen);
      setMonitoringDropdownOpen(false);
      setReportPaperDropdownOpen(false);
    } else if (buttonName === "Report Paper") {
      setReportPaperDropdownOpen(!isReportPaperDropdownOpen);
      setMonitoringDropdownOpen(false);
      setAnalyticDropdownOpen(false);
    }
  };
  const [isModalLogoutOpen, setIsModalLogoutOpen] = useState(false);
  const openModalLogout = () => setIsModalLogoutOpen(true);
  const closeModalLogout = () => setIsModalLogoutOpen(false);
  return (
    <header className="bg-white mb-2">
      <nav
        className="flex mx-auto items-center justify-between p-3 lg:px-8 shadow-md bg-gradient-to-b from-[#a3dcff] via-[#60bef8] to-[#43AFF3]"
        aria-label="Global"
      >
        <div className="flex lg:flex-1 gap-x-4 items-center">
          <a href="#" className="-m-1.5 p-1.5">
            <img
              src={LogoBraincore}
              alt="Braincore Icon"
              className="h-10 w-10"
            />
          </a>
          <span className="text-3xl font-bold text-[#ffffff]">
            Brain-Parking
          </span>
        </div>

        <div className="flex lg:hidden absolute right-4 pl-4">
          <button
            type="button"
            onClick={toggleMenu}
            className=" inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 bg-gradient-to-b from-[#d2e9f8] via-[#c3e1f4] to-[#7ac8f9] border-0 focus:outline-none hover:text-white"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-3">
          <div className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-gray-50 group-hover:bg-white">
            <img src={LogoAdmin} alt="admin" className="h-9 w-9" />
          </div>
          <p
            href="#"
            className="flex items-center justify-center text-xl font-bold text-[#ffffff]"
          >
            User
          </p>
        </div>
      </nav>
      <nav
        className="flex mx-auto items-center justify-between p-1 lg:px-8 shadow-md "
        aria-label="Secondary"
      >
        <div className="hidden lg:flex lg:gap-x-6">
          <Dropdown
            isDropdownOpen={isMonitoringDropdownOpen}
            activeButton={`${activeButton}`}
            onClick={() => handleButtonClick("Monitoring")}
            dropdownName="Monitoring"
          >
            <Link to="/Monitoring/Motorcycle-Monitoring">
              <SubDropdown>
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                  <img
                    src={LogoMotor}
                    alt="Motorcycle Icon"
                    className="h-6 w-6"
                  />
                </div>
                <div className="flex-auto">
                  <p href="#" className="block font-semibold text-gray-900">
                    Monitoring Motorcycle Area
                    <span className="absolute inset-0"></span>
                  </p>
                  <p className="mt-1 text-gray-600">
                    Enhance your motorcycles parking management with real-time
                    data
                  </p>
                </div>
              </SubDropdown>
            </Link>
            <Link to="/Monitoring/Car-Monitoring">
              <SubDropdown>
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                  <img src={LogoMobil} alt="Car Icon" className="h-6 w-6" />
                </div>
                <div className="flex-auto">
                  <p href="#" className="block font-semibold text-gray-900">
                    Monitoring Car Area
                    <span className="absolute inset-0"></span>
                  </p>
                  <p className="mt-1 text-gray-600">
                    Enhance your cars parking management with real-time data
                  </p>
                </div>
              </SubDropdown>
            </Link>
            <Link to="/Monitoring/CCTV-Archive">
              <SubDropdown>
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                  <img
                    src={LogoArchive}
                    alt="Archive Icon"
                    className="h-6 w-6"
                  />
                </div>
                <div className="flex-auto">
                  <p href="#" className="block font-semibold text-gray-900">
                    Archive CCTV Record
                    <span className="absolute inset-0"></span>
                  </p>
                  <p className="mt-1 text-gray-600">
                    Efficiently archive and manage your CCTV records,
                    safeguarding valuable footage for future reference
                  </p>
                </div>
              </SubDropdown>
            </Link>
          </Dropdown>
          <Dropdown
            isDropdownOpen={isAnalyticDropdownOpen}
            activeButton={`${activeButton}`}
            onClick={() => handleButtonClick("Analytics")}
            dropdownName="Analytics"
          >
            <Link to="/Analitics/visitor-Analytics">
              <SubDropdown>
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                  <img
                    src={LogoChartLine}
                    alt="Analytic Visitor"
                    className="h-6 w-6"
                  />
                </div>
                <div className="flex-auto">
                  <p href="#" className="block font-semibold text-gray-900">
                    Analytic Visitor
                    <span className="absolute inset-0"></span>
                  </p>
                  <p className="mt-1 text-gray-600">
                    Enhance your cars parking management with real-time data
                  </p>
                </div>
              </SubDropdown>
            </Link>
            <Link to="/Analitics/visitor-Region-Analytics">
              <SubDropdown>
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                  <img
                    src={LogoChartBar}
                    alt="Visitors by Region Analytic"
                    className="h-6 w-6"
                  />
                </div>
                <div className="flex-auto">
                  <p href="#" className="block font-semibold text-gray-900">
                    Visitors by Region Analytic
                    <span className="absolute inset-0"></span>
                  </p>
                  <p className="mt-1 text-gray-600">
                    Enhance your cars parking management with real-time data
                  </p>
                </div>
              </SubDropdown>
            </Link>
          </Dropdown>
          <Dropdown
            isDropdownOpen={isReportPaperDropdownOpen}
            activeButton={`${activeButton}`}
            onClick={() => handleButtonClick("Report Paper")}
            dropdownName="Report Paper"
          >
            <Link to="/ReportPaper/Report-Paper">
              <SubDropdown>
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                  <img src={LogoPaper} alt="Report Paper" className="h-6 w-6" />
                </div>
                <div className="flex-auto">
                  <p href="#" className="block font-semibold text-gray-900">
                    Report Paper
                    <span className="absolute inset-0"></span>
                  </p>
                  <p className="mt-1 text-gray-600">
                    Efficiently archive and manage your CCTV records,
                    safeguarding valuable footage for future reference
                  </p>
                </div>
              </SubDropdown>
            </Link>
            <Link to="/ReportPaper/Report-Archive">
              <SubDropdown>
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                  <img
                    src={LogoPaperArchive}
                    alt="Report Archive"
                    className="h-6 w-6"
                  />
                </div>
                <div className="flex-auto">
                  <p href="#" className="block font-semibold text-gray-900">
                    Report Archive
                    <span className="absolute inset-0"></span>
                  </p>
                  <p className="mt-1 text-gray-600">
                    Efficiently archive and manage your CCTV records,
                    safeguarding valuable footage for future reference
                  </p>
                </div>
              </SubDropdown>
            </Link>
          </Dropdown>
        </div>
        <button
          onClick={openModalLogout}
          className="flex font-semibold bg-transparent outline-none border-0 text-gray-900 gap-2 focus:outline-none active:outline-none"
        >
          <img src={LogoLogout} alt="" className="h-7 w-7" />
          <p className="text-lg">Log out</p>
        </button>
        <Modal isOpen={isModalLogoutOpen} onClose={closeModalLogout}>
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="p-16 md:p-5 text-center">
              <svg
                className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Are you sure you want to log out?
              </h3>
              <Link to='/'
                type="button"
                className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
              >
                Yes, I'm sure
              </Link>
              <button
                type="button"
                onClick={closeModalLogout}
                className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                No, cancel
              </button>
            </div>
          </div>
        </Modal>
      </nav>
      <HiddenMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}>
        <HeadHiddenMenu
          header="Monitoring"
          isSubMenuOpen={isMonitoringSubMenuOpen}
          toggleSubMenu={toggleMonitoringSubMenu}
        >
          <SubHiddenMenu href="#">Monitoring Motorcycle Area</SubHiddenMenu>
          <SubHiddenMenu href="#">Monitoring Car Area</SubHiddenMenu>
          <SubHiddenMenu href="#">Archive CCTV Record</SubHiddenMenu>
        </HeadHiddenMenu>
        <HeadHiddenMenu
          header="Analytics"
          isSubMenuOpen={isAnalyticSubMenuOpen}
          toggleSubMenu={toggleAnalyticSubMenu}
        >
          <SubHiddenMenu href="#">Visitors Analytic</SubHiddenMenu>
          <SubHiddenMenu href="#">Visitors by Region Analytic</SubHiddenMenu>
        </HeadHiddenMenu>
        <HeadHiddenMenu
          header="Report Paper"
          isSubMenuOpen={isReportPaperSubMenuOpen}
          toggleSubMenu={toggleReportPaperSubMenu}
        >
          <SubHiddenMenu href="#">Report Paper</SubHiddenMenu>
          <SubHiddenMenu href="#">Report Archive</SubHiddenMenu>
        </HeadHiddenMenu>
      </HiddenMenu>
    </header>
  );
};

export default Header;
