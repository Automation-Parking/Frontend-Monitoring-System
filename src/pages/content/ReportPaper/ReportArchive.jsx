import React, { useEffect, useState } from "react";
import Card from "../../../components/Card";
import HeadCard from "../../../components/HeadCard";
import SearchBar from "../../../components/SearchBar";
import logoExcel from "../../../assets/image/Logo/excelPaper.png";
import { Link } from "react-router-dom";
const ReportArchive = () => {
  const [dataExcel, setDataExcel] = useState(null); // Menyimpan data dari API
  const [pageNumber, setPageNumber] = useState(1);
  const page = (conditions) => {
    if (conditions == "prev" && pageNumber != 1) {
      setPageNumber(pageNumber - 1);
    } else if (conditions == "next") {
      setPageNumber(pageNumber + 1);
    }
  };
  useEffect(() => {
    const getExcel = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/report?page=" + pageNumber
        );
        const result = await response.json();
        setDataExcel(result); // Menyimpan hasil ke dalam state
      } catch (error) {
        console.log(error);
      }
    };

    getExcel();
  }, [pageNumber]);
  console.log(dataExcel);

  return (
    <div className="h-full ml-14 mt-12 mr-14 mb-10">
      <Card variant="w-full">
        <HeadCard>
          <div className="flex justify-between items-center text-center w-full">
            <p className="text-2xl font-bold text-white">Report Archive</p>
            <SearchBar></SearchBar>
          </div>
        </HeadCard>
        <div className="p-7">
          <div className="w-full relative flex flex-wrap gap-5 overflow-x-auto shadow-sm p-4">
            {dataExcel ? (
              dataExcel.data.data.map((item) => (
                <Card variant="relative w-[24%] bg-white rounded border overflow-hidden">
                  <Link to={item.excelLink}>
                    <img
                      class="w-full object-cover pb-5"
                      src={logoExcel}
                      alt="s"
                    />
                    <div class="absolute bottom-0 w-full bg-[#117e44be] text-white px-5 py-4">
                      <div class="container mx-auto font-bold text-lg">
                        {item.fileName}
                      </div>
                    </div>
                  </Link>
                </Card>
              ))
            ) : (
              <div>Loading</div>
            )}
            ;
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
  );
};

export default ReportArchive;
