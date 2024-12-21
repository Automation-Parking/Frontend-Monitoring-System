import React, { useState, useEffect } from "react";
import Card from "../../../components/Card";
import HeadCard from "../../../components/HeadCard";
import SearchBar from "../../../components/SearchBar";
import IconExcel from "../../../assets/image/Logo/excel.png";
import Button from "../../../components/Button";
import Modal from "../../../components/Modal";

const ReportPaper = () => {
  const [dataAllVisitor, setDataAllVisitor] = useState(null); // Menyimpan data dari API
  const [pageNumber, setPageNumber] = useState(1);
  const page = (conditions) => {
    if (conditions == "prev" && pageNumber != 1) {
      setPageNumber(pageNumber - 1);
    } else if (conditions == "next") {
      setPageNumber(pageNumber + 1);
    }
  };
  useEffect(() => {
    const getAllVisitor = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/getParkingOut?search=&pageSize=10&page=" +
            pageNumber
        );
        const result = await response.json();
        setDataAllVisitor(result); // Menyimpan hasil ke dalam state
      } catch (error) {
        console.log(error);
      }
    };

    getAllVisitor();
  }, [pageNumber]);
  console.log(dataAllVisitor);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div className="h-full ml-14 mt-12 mr-14 mb-10">
      <Card variant="w-full">
        <HeadCard>
          <div className="flex justify-between items-center text-center w-full">
            <p className="text-2xl font-bold text-white">Report Paper</p>
            <SearchBar></SearchBar>
          </div>
        </HeadCard>
        <div className="p-7">
          <div className="relative overflow-x-auto shadow-sm">
            <div className="flex lg:flex lg:flex-1 lg:justify-end gap-4 p-2">
              <Button
                onClick={openModal}
                variant="flex text-white font-bold bg-[#21ba24] border-0 hover:bg-[#21ba24] focus:ring-2 focus:ring-[#21ba24] hover:border-0 active:border-0 focus:outline-none active:outline-none rounded-full text-sm px-3 py-2 me-2 mb-2"
              >
                <img src={IconExcel} alt="iconExcel" className="h-6 w-6 mr-3" />
                <p className="items-center">Export</p>
              </Button>
              {/* modal */}
              <Modal isOpen={isModalOpen} onClose={closeModal}>
                <div className="flex gap-2 bg-gradient-to-t from-[#029C0F] via-[#01b810] to-[#02cd13] m-0 p-4">
                  <span>
                    <img src={IconExcel} alt="" />
                  </span>
                  <h2 className="text-2xl font-bold text-white">
                    Export to Excel
                  </h2>
                </div>
                <div className="p-6 text-xl font-bold">
                  <form
                    action="http://localhost:3000/api/report"
                    method="POST"
                    onSubmit={(e) => {
                      console.log("Form submitted");
                    }}
                  >
                    <table cellPadding="5">
                      <tbody>
                        <tr>
                          <td>
                            <label htmlFor="">filename</label>
                          </td>
                          <td>:</td>
                          <td>
                            <input
                              type="text"
                              name="fileName"
                              className="rounded-md ml-3 w-full"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label htmlFor="">Bulan/Tahun</label>
                          </td>
                          <td>:</td>
                          <td>
                            <input
                              type="month"
                              name="date"
                              className="rounded-md ml-3 w-full"
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="flex gap-2 mt-4 px-3 py-1 bg-gradient-to-t border-0 from-[#029C0F] via-[#01b810] to-[#02cd13] focus:ring-2 focus:ring-[#21ba24] focus:outline-none active:outline-none text-white rounded-md"
                      >
                        <img src={IconExcel} alt="" />
                        <h2 className="text-xl font-bold text-white">Export</h2>
                      </button>
                    </div>
                  </form>
                </div>
              </Modal>
              <form action="">
                <div className="flex items-center gap-2">
                  <h2 className="font-bold">Month/Year</h2>
                  <input type="month" className="rounded-sm border-gray-500" />
                </div>
              </form>
            </div>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    License Plate
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Vehicle Type
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Entry Time
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Time Out
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Bill
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Region
                  </th>
                  <th scope="col" className="px-6 py-3">
                    City/Province
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
                      <td className="px-6 py-4">{item.waktuKeluar}</td>
                      <td className="px-6 py-4">{item.platNomor}</td>
                      <td className="px-6 py-4">{item.jenisKendaraan}</td>
                      <td className="px-6 py-4">{item.waktuMasuk}</td>
                      <td className="px-6 py-4">{item.waktuKeluar}</td>
                      <td className="px-6 py-4">{item.payment.totalPrice}</td>
                      <td className="px-6 py-4">{item.wilayah}</td>
                      <td className="px-6 py-4">{item.kota_provinsi}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8">Loading Data..</td>
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

    // modal
  );
};
export default ReportPaper;
