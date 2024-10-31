import React, { useState } from "react";
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
import HiddenMenu from "./HiddenMenu";
import SubHiddenMenu from "./SubHiddenMenu";
import HeadHiddenMenu from "./HeadHiddenMenu";
const Header = () => {
  const [isMonitoringDropdownOpen, setMonitoringDropdownOpen] = useState(false);
  const [isAnalyticDropdownOpen, setAnalyticDropdownOpen] = useState(false);
  const [isReportPaperDropdownOpen, setReportPaperDropdownOpen] =
    useState(false);
  const [activeButton, setActiveButton] = useState("");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);

    // Menangani dropdown yang berbeda
    if (buttonName === "Monitoring") {
      setMonitoringDropdownOpen(!isMonitoringDropdownOpen);
      setAnalyticDropdownOpen(false);
      setReportPaperDropdownOpen(false);
    } else if (buttonName === "Analytic") {
      setAnalyticDropdownOpen(!isAnalyticDropdownOpen);
      setMonitoringDropdownOpen(false);
      setReportPaperDropdownOpen(false);
    } else if (buttonName === "Report Paper") {
      setReportPaperDropdownOpen(!isReportPaperDropdownOpen);
      setMonitoringDropdownOpen(false);
      setAnalyticDropdownOpen(false);
    }
  };
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

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
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
            <img
              src="/path/to/motorcycle-icon.png"
              alt="Motorcycle Icon"
              className="h-6 w-6"
            />
          </div>
          <a
            href="#"
            className="flex items-center justify-center text-lg font-bold text-[#ffffff]"
          >
            User
          </a>
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
            <SubDropdown>
              <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                <img
                  src={LogoMotor}
                  alt="Motorcycle Icon"
                  className="h-6 w-6"
                />
              </div>
              <div className="flex-auto">
                <a href="#" className="block font-semibold text-gray-900">
                  Monitoring Motorcycle Area
                  <span className="absolute inset-0"></span>
                </a>
                <p className="mt-1 text-gray-600">
                  Enhance your motorcycles parking management with real-time
                  data
                </p>
              </div>
            </SubDropdown>
            <SubDropdown>
              <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                <img src={LogoMobil} alt="Car Icon" className="h-6 w-6" />
              </div>
              <div className="flex-auto">
                <a href="#" className="block font-semibold text-gray-900">
                  Monitoring Car Area
                  <span className="absolute inset-0"></span>
                </a>
                <p className="mt-1 text-gray-600">
                  Enhance your cars parking management with real-time data
                </p>
              </div>
            </SubDropdown>
            <SubDropdown>
              <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                <img src={LogoArchive} alt="Archive Icon" className="h-6 w-6" />
              </div>
              <div className="flex-auto">
                <a href="#" className="block font-semibold text-gray-900">
                  Archive CCTV Record
                  <span className="absolute inset-0"></span>
                </a>
                <p className="mt-1 text-gray-600">
                  Efficiently archive and manage your CCTV records, safeguarding
                  valuable footage for future reference
                </p>
              </div>
            </SubDropdown>
          </Dropdown>
          <Dropdown
            isDropdownOpen={isAnalyticDropdownOpen}
            activeButton={`${activeButton}`}
            onClick={() => handleButtonClick("Analytic")}
            dropdownName="Analytic"
          >
            <SubDropdown>
              <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                <img
                  src={LogoChartLine}
                  alt="Analytic Visitor"
                  className="h-6 w-6"
                />
              </div>
              <div className="flex-auto">
                <a href="#" className="block font-semibold text-gray-900">
                  Analytic Visitor
                  <span className="absolute inset-0"></span>
                </a>
                <p className="mt-1 text-gray-600">
                  Enhance your cars parking management with real-time data
                </p>
              </div>
            </SubDropdown>
            <SubDropdown>
              <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                <img
                  src={LogoChartBar}
                  alt="Visitors by Region Analytic"
                  className="h-6 w-6"
                />
              </div>
              <div className="flex-auto">
                <a href="#" className="block font-semibold text-gray-900">
                  Visitors by Region Analytic
                  <span className="absolute inset-0"></span>
                </a>
                <p className="mt-1 text-gray-600">
                  Enhance your cars parking management with real-time data
                </p>
              </div>
            </SubDropdown>
          </Dropdown>
          <Dropdown
            isDropdownOpen={isReportPaperDropdownOpen}
            activeButton={`${activeButton}`}
            onClick={() => handleButtonClick("Report Paper")}
            dropdownName="Report Paper"
          >
            <SubDropdown>
              <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50">
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                  <img src={LogoPaper} alt="Report Paper" className="h-6 w-6" />
                </div>
                <div className="flex-auto">
                  <a href="#" className="block font-semibold text-gray-900">
                    Report Paper
                    <span className="absolute inset-0"></span>
                  </a>
                  <p className="mt-1 text-gray-600">
                    Efficiently archive and manage your CCTV records,
                    safeguarding valuable footage for future reference
                  </p>
                </div>
              </div>
            </SubDropdown>
            <SubDropdown>
              <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50">
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                  <img
                    src={LogoPaperArchive}
                    alt="Report Archive"
                    className="h-6 w-6"
                  />
                </div>
                <div className="flex-auto">
                  <a href="#" className="block font-semibold text-gray-900">
                    Report Archive
                    <span className="absolute inset-0"></span>
                  </a>
                  <p className="mt-1 text-gray-600">
                    Efficiently archive and manage your CCTV records,
                    safeguarding valuable footage for future reference
                  </p>
                </div>
              </div>
            </SubDropdown>
          </Dropdown>
        </div>
      </nav>
      <HiddenMenu>
        <HeadHiddenMenu header="Monitoring">
          <SubHiddenMenu href="#">Monitoring Motorcycle Area</SubHiddenMenu>
          <SubHiddenMenu href="#">Monitoring Car Area</SubHiddenMenu>
          <SubHiddenMenu href="#">Archive CCTV Record</SubHiddenMenu>
        </HeadHiddenMenu>
        <HeadHiddenMenu header="Analytics">
          <SubHiddenMenu href="#">Visitors Analytic</SubHiddenMenu>
          <SubHiddenMenu href="#">Visitors by Region Analytic</SubHiddenMenu>
        </HeadHiddenMenu>
        <HeadHiddenMenu header="Report Paper">
          <SubHiddenMenu href="#">Report Paper</SubHiddenMenu>
          <SubHiddenMenu href="#">Report Archive</SubHiddenMenu>
        </HeadHiddenMenu>
      </HiddenMenu>
    </header>
  );
};

export default Header;
