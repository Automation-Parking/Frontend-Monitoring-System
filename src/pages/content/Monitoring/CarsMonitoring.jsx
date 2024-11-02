import React, { useState } from "react";
import Card from "../../../components/Card";
import HeadCard from "../../../components/HeadCard";
import SearchBar from "../../../components/SearchBar";
import Button from "../../../components/Button";
import IconCCTV from "../../../assets/image/Logo/CCTV.png";
import IconSwitch from "../../../assets/image/Logo/switch.png";
import IconCar from "../../../assets/image/Logo/mdi_car.png";
import IconParking from "../../../assets/image/Logo/parking.png";
import IconGate from "../../../assets/image/Logo/gate.png";
import InputField from "../../../components/InputField";
const CarsMonitoring = () => {
  const data = [];
  let i = 1;

  const [isSwitch, setIsSwitch] = useState(true);

  const toggleSwitch = () => {
    setIsSwitch(!isSwitch);
  };

  // Mengisi data menggunakan while loop
  while (i <= 5) {
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
    <div className="flex">
      <div className="w-3/5 ml-10 mt-10 mr-5 mb-5">
        <div className="w-full lg:flex lg:flex-1 lg:justify-between mb-10">
          <Card variant="w-1/2 mr-10">
            <HeadCard>
              <div className="flex justify-center items-center text-center w-full">
                <p className="text-2xl font-bold text-[#ffffff]">
                  Count of Car Visitors
                </p>
              </div>
            </HeadCard>
            <div className="p-10 flex justify-center items-center text-center w-full">
              <span className="flex justify-center items-center text-center gap-5">
                <img src={IconCar} alt="" />
                <p className="text-4xl font-bold text-gray-500">146</p>
              </span>
            </div>
          </Card>
          <Card variant="w-1/2 ml-10">
            <HeadCard>
              <div className="flex justify-center items-center text-center w-full">
                <p className="text-2xl font-bold text-[#ffffff]">
                  Empety Space
                </p>
              </div>
            </HeadCard>
            <div className="p-10 flex justify-center items-center text-center w-full">
              <span className="flex justify-center items-center text-center gap-5">
                <img src={IconParking} alt="" />
                <p className="text-4xl font-bold text-gray-500">54</p>
              </span>
            </div>
          </Card>
        </div>
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
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {item.nama}
                      </th>
                      <td className="px-6 py-4">{item.warna}</td>
                      <td className="px-6 py-4">{item.kategori}</td>
                      <td className="px-6 py-4">{item.harga}</td>
                      <td className="px-6 py-4">
                        <a
                          href="#"
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Edit
                        </a>
                      </td>
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
          {isSwitch && (
            <Card variant="w-full h-full">
              <HeadCard>
                <div className="flex items-center text-center w-full">
                  <img
                    src={IconCCTV}
                    alt="iconCCTV"
                    className="h-10 w-10 mr-3"
                  />
                  <p className="text-2xl font-bold text-[#ffffff]">
                    Exit Gate Car Camera
                  </p>
                </div>
              </HeadCard>
              <div className="p-8 h-full">
                <div className="w-100 h-3/4 bg-gray-300 shadow-sm rounded-md flex justify-center items-center text-center">
                  <p className="font-bold text-2xl text-gray-500">CCTV</p>
                </div>
                <div className="py-4 flex items-center">
                  <Button variant="text-white font-bold bg-[#27dc2a] border-0 hover:bg-[#34cc36] focus:ring-4 focus:ring-[#34cc36] rounded-lg text-sm px-3 py-2 me-2 mb-2">
                    <span className="flex items-center">
                      <img src={IconCCTV} alt="iconCCTV" className="h-5 w-6" />
                      <p>Connect</p>
                    </span>
                  </Button>
                  <button
                    onClick={toggleSwitch}
                    className="text-gray-600 font-bold bg-gray-100 border-0 hover:bg-gray-400 focus:ring-4 focus:bg-gray-400 rounded-lg text-sm px-3 py-2 me-2 mb-2"
                  >
                    <span className="flex justify-center items-center ">
                      <p className="items-center">Switch to entrance gate</p>
                      <img
                        src={IconSwitch}
                        alt="iconCCTV"
                        className="h-5 w-4 mx-1 my-0 p-0"
                      />
                    </span>
                  </button>
                </div>
              </div>
            </Card>
          )}
          {!isSwitch && (
            <Card variant="w-full h-full">
              <HeadCard>
                <div className="flex items-center text-center w-full">
                  <img
                    src={IconCCTV}
                    alt="iconCCTV"
                    className="h-10 w-10 mr-3"
                  />
                  <p className="text-2xl font-bold text-[#ffffff]">
                    Entrance Gate Car Camera
                  </p>
                </div>
              </HeadCard>
              <div className="p-8 h-full">
                <div className="w-100 h-3/4 bg-gray-300 shadow-sm rounded-md flex justify-center items-center text-center">
                  <p className="font-bold text-2xl text-gray-500">CCTV</p>
                </div>
                <div className="py-4 flex items-center">
                  <Button variant="text-white font-bold bg-[#27dc2a] border-0 hover:bg-[#34cc36] focus:ring-4 focus:ring-[#34cc36] rounded-lg text-sm px-3 py-2 me-2 mb-2">
                    <span className="flex items-center">
                      <img src={IconCCTV} alt="iconCCTV" className="h-5 w-6" />
                      <p>Connect</p>
                    </span>
                  </Button>
                  <button
                    onClick={toggleSwitch}
                    className="text-gray-600 font-bold bg-gray-100 border-0 hover:bg-gray-400 focus:ring-4 focus:bg-gray-400 rounded-lg text-sm px-3 py-2 me-2 mb-2"
                  >
                    <span className="flex justify-center items-center ">
                      <p className="items-center">Switch to exit gate</p>
                      <img
                        src={IconSwitch}
                        alt="iconCCTV"
                        className="h-5 w-4 mx-1 my-0 p-0"
                      />
                    </span>
                  </button>
                </div>
              </div>
            </Card>
          )}
        </div>
        <div className="h-1/4 w-full mt-10">
          <h2 className="font-bold text-3xl mb-4">Certain Conditions</h2>
          <form action="" className="flex gap-4 w-full">
            <InputField
              name="update plate"
              type="text"
              id=""
              variant="h-10 w-80 rounded-lg border-gray-200"
            >
              Input Plate
            </InputField>
            <Button variant="text-gray-600 font-bold bg-[#FFFC55] border-0 hover:bg-yellow-200 focus:ring-4 focus:ring-yellow-200 rounded-lg text-sm px-3 py-0 h-10">
              <span className="flex items-center gap-2">
                <img src={IconGate} alt="iconGate" className="h-5 w-6" />
                <p>Open Gate</p>
              </span>
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CarsMonitoring;
