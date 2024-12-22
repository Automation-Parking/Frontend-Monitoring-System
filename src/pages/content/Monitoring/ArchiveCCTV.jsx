import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../../components/Card";
import HeadCard from "../../../components/HeadCard";
import SearchBar from "../../../components/SearchBar";
import IconCCTV from "../../../assets/image/Logo/CCTV.png";

const ArchiveCCTV = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      navigate("/"); // Redirect to login if no token
    }
  }, [navigate]);

  const data = [];
  let i = 1;

  // Mengisi data menggunakan while loop
  while (i <= 9) {
    data.push({
      id: i,
      nama: 'Apple MacBook Pro 17"',
      warna: "Silver",
      kategori: "Laptop",
      harga: "$2999",
    });
    i++;
  }
  return (
    <div className="flex h-full">
      <div className="w-3/5 ml-10 mt-10 mr-5 mb-5">
        <Card variant="w-full">
          <HeadCard>
            <div className="flex justify-between items-center text-center w-full">
              <p className="text-2xl font-bold text-white">Record Archive</p>
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
                    <th scope="col" className="px-6 py-3 w-1/3">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-3 w-2/3">
                      Link Record
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item) => (
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
                      <td
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {item.nama}
                      </td>
                      <td className="px-6 py-4">{item.warna}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <nav className="flex justify-start pt-4">
              <ul className="lg:flex lg:flex-1 lg:justify-end">
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    Prev
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    1
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    2
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    aria-current="page"
                    className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                  >
                    3
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    4
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    5
                  </a>
                </li>
                <li>
                  <a
                    href="#"
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
        <div className="h-3/4">
          <Card variant="w-full h-full">
            <HeadCard>
              <div className="flex items-center text-center w-full">
                <img src={IconCCTV} alt="iconCCTV" className="h-10 w-10 mr-3" />
                <p className="text-2xl font-bold text-[#ffffff]">CCTV Record</p>
              </div>
            </HeadCard>
            <div className="p-8 h-full">
              <div className="w-100 h-3/4 bg-gray-300 shadow-sm rounded-md flex justify-center items-center text-center">
                <p className="font-bold text-2xl text-gray-500">CCTV</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ArchiveCCTV;
