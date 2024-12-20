import React, { useState, useEffect } from "react";
import Card from "../../../components/Card";
import HeadCard from "../../../components/HeadCard";
import SearchBar from "../../../components/SearchBar";
import LogoChartBar from "../../../assets/image/Logo/chart-bar-white.png";
import { Bar, Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const VisitorAnalytics = () => {
  const [dataAllVisitor, setDataAllVisitor] = useState(null); // Menyimpan data dari API
  const [dataAllVisitorMonthly, setDataAllVisitorMonthly] = useState(null); // Menyimpan data dari API
  const [dataAllVisitorWeekly, setDataAllVisitorWeekly] = useState(null); // Menyimpan data dari API
  const [GrafikMonth, setGrafikMonth] = useState(null);
  const [GrafikWeek, setGrafikWeek] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const page = (conditions) => {
    if (conditions == "prev" && pageNumber != 1) {
      setPageNumber(pageNumber - 1);
    } else if (conditions == "next") {
      setPageNumber(pageNumber + 1);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [dataAllVisitor, dataAllVisitorMonthly, dataAllVisitorWeekly] =
          await Promise.all([
            fetch(
              "https://44ca-2404-c0-2420-00-f3bf-19f.ngrok-free.app/api/getParkingOut?search=&pageSize=12&page=" +
                pageNumber
            ).then((res) => res.json()),
            fetch("https://44ca-2404-c0-2420-00-f3bf-19f.ngrok-free.app/api/getParkingByMonth").then((res) =>
              res.json()
            ),
            fetch("https://44ca-2404-c0-2420-00-f3bf-19f.ngrok-free.app/api/getParkingByWeek").then((res) =>
              res.json()
            ),
          ]);

        setDataAllVisitor(dataAllVisitor);
        setDataAllVisitorMonthly(dataAllVisitorMonthly);
        setDataAllVisitorWeekly(dataAllVisitorWeekly);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [pageNumber]);
  const bulan = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "November",
    "December",
  ];
  console.log(dataAllVisitor);
  useEffect(() => {
    if (dataAllVisitorMonthly) {
      const dataGrafikMonth = {
        labels: dataAllVisitorMonthly.data.map((item) => bulan[item.month - 1]),
        datasets: [
          {
            label: "Jumlah Pengunjung",
            data: dataAllVisitorMonthly.data.map((item) => item.totalVisits),
            borderColor: "rgba(75, 192, 192, 1)",
            fill: false,
          },
        ],
      };
      setGrafikMonth(dataGrafikMonth);
    }
  }, [dataAllVisitorMonthly]);
  useEffect(() => {
    if (dataAllVisitorWeekly) {
      const dataGrafikWeek = {
        labels: dataAllVisitorWeekly.data[7].weeks.map(
          (item) => `Week ${item.week}`
        ), // Mapping weeks to labels
        datasets: [
          {
            label: "Jumlah Pengunjung",
            data: dataAllVisitorWeekly.data[7].weeks.map(
              (item) => item.totalVisits
            ),
            borderColor: "rgba(75, 192, 192, 1)",
            fill: false,
          },
        ],
      };
      setGrafikWeek(dataGrafikWeek);
    }
  }, [dataAllVisitorWeekly]);
  console.log(GrafikMonth);
  console.log(GrafikWeek);
  return (
    <div className="flex">
      <div className="w-3/5 ml-10 mt-10 mr-5 mb-5">
        <Card variant="w-full">
          <HeadCard>
            <div className="flex justify-between items-center text-center w-full">
              <p className="text-2xl font-bold text-[#ffffff]">Visitor Data</p>
              <SearchBar></SearchBar>
            </div>
          </HeadCard>
          <div className="p-7">
            <div className="relative overflow-x-auto shadow-sm sm:rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="p-4">
                      <div className="flex items-center">
                        <input
                          id="checkbox-all-search"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="checkbox-all-search"
                          className="sr-only"
                        >
                          checkbox
                        </label>
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-3">
                      License Plate Image
                    </th>
                    <th scope="col" className="px-6 py-3">
                      License Plate
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Wilayah
                    </th>
                    <th scope="col" className="px-6 py-3">
                      kota/provinsi
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Entry Time
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Time Out
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {dataAllVisitor ? (
                    dataAllVisitor.data.map((item) => (
                      <tr
                        key={item.id}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                      >
                        <td className="w-4 p-4">
                          <div className="flex items-center">
                            <input
                              id={`checkbox-table-search-${item.id}`}
                              type="checkbox"
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                              htmlFor={`checkbox-table-search-${item.id}`}
                              className="sr-only"
                            >
                              checkbox
                            </label>
                          </div>
                        </td>
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          <img src={item.imageLink} alt="" />
                        </th>
                        <td className="px-6 py-4">{item.platNomor}</td>
                        <td className="px-6 py-4">{item.wilayah}</td>
                        <td className="px-6 py-4">{item.kota_provinsi}</td>
                        <td className="px-6 py-4">{item.waktuMasuk}</td>
                        <td className="px-6 py-4">{item.waktuKeluar}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6"></td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            <nav className="flex justify-start pt-4">
              <ul className="lg:flex lg:flex-1 lg:justify-end">
                <li>
                  <a
                    onClick={() => page("prev")}
                    className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    Prev
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                  >
                    {pageNumber}
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => page("next")}
                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </Card>
      </div>
      <div className="w-2/5 ml-5 mt-10 mr-10 mb-5">
        <div className="h-[95%]">
          <Card variant="w-full mb-10 h-1/2">
            <HeadCard>
              <div className="flex items-center text-center w-full">
                <img
                  src={LogoChartBar}
                  alt="iconCCTV"
                  className="h-10 w-10 mr-3"
                />
                <p className="text-2xl font-bold text-[#ffffff]">weekly</p>
              </div>
            </HeadCard>
            <div className="p-8 h-full">
              <div className="w-100 h-4/5 bg-white shadow-sm rounded-md flex justify-center items-center text-center">
                {GrafikWeek ? (
                  <Line data={GrafikWeek} />
                ) : (
                  <p className="font-bold text-2xl text-gray-500">
                    Loading Chart....
                  </p>
                )}
              </div>
            </div>
          </Card>
          <Card variant="w-full h-1/2">
            <HeadCard>
              <div className="flex items-center text-center w-full">
                <img
                  src={LogoChartBar}
                  alt="iconCCTV"
                  className="h-10 w-10 mr-3"
                />
                <p className="text-2xl font-bold text-[#ffffff]">Monthly</p>
              </div>
            </HeadCard>
            <div className="p-8 h-full">
              <div className="w-100 h-4/5 bg-white shadow-sm rounded-md flex justify-center items-center text-center">
                {GrafikMonth ? (
                  <Line data={GrafikMonth} />
                ) : (
                  <p className="font-bold text-2xl text-gray-500">
                    Loading Chart....
                  </p>
                )}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default VisitorAnalytics;
