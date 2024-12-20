import React, { useState, useEffect, useRef } from "react";
import Card from "../../../components/Card";
import HeadCard from "../../../components/HeadCard";
import SearchBar from "../../../components/SearchBar";
import Button from "../../../components/Button";
import IconCCTV from "../../../assets/image/Logo/CCTV.png";
import IconMotorcycle from "../../../assets/image/Logo/fontisto_motorcycle.png";
import IconParking from "../../../assets/image/Logo/parking.png";
import IconGate from "../../../assets/image/Logo/gate.png";
import InputField from "../../../components/InputField";
const MotorcyclesMonitoring = () => {
  let space = 100;

  const [streamSrc, setStreamSrc] = useState(""); // State untuk stream
  const [isStreaming, setIsStreaming] = useState(false); // State untuk status kamera (On/Off)
  const ws = useRef(null);
  const [totalIn, setTotalIn] = useState(0);
  const [errorRecords, setErrorRecords] = useState([]);
  const [selectedRecordId, setSelectedRecordId] = useState("");
  const [manualPlate, setManualPlate] = useState("");
  const [first, setFirst] = useState(0);
  const [last, setLast] = useState(6);
  const [pageNumber, setPageNumber] = useState(1);

  const handleInputChange = (e) => {
    setManualPlate(e.target.value);
  };
  const handleCheckboxChange = (event, recordId) => {
    if (event.target.checked) {
      setSelectedRecordId(recordId);
    } else {
      setSelectedRecordId(null);
    }
  };
  const page = (x, conditions) => {
    if (conditions == "prev" && first != 0) {
      setFirst(first - x * 6);
      setLast(last - x * 6);
      setPageNumber(pageNumber - 1);
    } else if (conditions == "next") {
      setFirst(first + x * 6);
      setLast(last + x * 6);
      setPageNumber(pageNumber + 1);
    }
  };
  useEffect(() => {
    fetchErrorRecords();
    fetchParkingStatus();
    setupWebSocket();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber]);
  const fetchParkingStatus = async () => {
    try {
      const response = await fetch(
        "https://efa7-2404-c0-2420-00-f3bf-19f.ngrok-free.app/api/monitoring"
      );
      const data = await response.json();
      setTotalIn(data.totalIn);
    } catch (error) {
      console.error("Error fetching parking status:", error.message);
    }
  };

  const fetchErrorRecords = async () => {
    try {
      const response = await fetch(
        "https://efa7-2404-c0-2420-00-f3bf-19f.ngrok-free.app/api/error-records"
      );
      const data = await response.json();
      setErrorRecords(data.records);
    } catch (error) {
      console.error("Error fetching error records:", error.message);
    }
  };

  const updateRecord = async () => {
    if (!selectedRecordId) {
      alert("Please select a record to update.");
      return;
    }

    try {
      const response = await fetch(
        "https://efa7-2404-c0-2420-00-f3bf-19f.ngrok-free.app/api/manual-input/update",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            recordId: selectedRecordId,
            platNomor: manualPlate,
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to update record.");
      }

      const result = await response.json();
      alert(result.message);
      fetchErrorRecords(); // Refresh the records after update
      setManualPlate(""); // Clear the input field
      setSelectedRecordId(null); // Reset the selected record
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  const setupWebSocket = () => {
    const ws = new WebSocket(
      "wss://efa7-2404-c0-2420-00-f3bf-19f.ngrok-free.app/ws"
    );
    console.log("WebSocket connection established");
    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      if (message.event === "PARK_IN" || message.event === "PARK_OUT") {
        fetchErrorRecords();
      } else if (message.event === "ERROR") {
        alert(message.message);
      }
    };
  };
  // Fungsi untuk menghidupkan kamera (WebSocket connection)
  const startStreaming = () => {
    if (!ws.current || ws.current.readyState === WebSocket.CLOSED) {
      ws.current = new WebSocket(
        "wss://119a-2404-c0-2520-00-d521-fab6.ngrok-free.app"
      );

      ws.current.onopen = () => {
        console.log("WebSocket connection established");
        ws.current.send(
          JSON.stringify({
            type: "register",
            clientType: "monitor",
            clientId: "monitor1",
          })
        );
      };

      ws.current.onmessage = (message) => {
        try {
          const data = JSON.parse(message.data);
          if (data.type === "stream") {
            setStreamSrc(data.image);
          }
        } catch (error) {
          console.error("Error parsing message data:", error);
        }
      };

      ws.current.onerror = (error) => {
        console.error("WebSocket error:", error);
      };

      ws.current.onclose = () => {
        console.log("WebSocket connection closed");
      };
    }
    setIsStreaming(true); // Set status streaming ke On
  };

  // Fungsi untuk mematikan kamera (menutup WebSocket connection)
  const stopStreaming = () => {
    if (ws.current && ws.current.readyState === WebSocket.OPEN) {
      ws.current.close();
      console.log("WebSocket connection closed manually");
    }
    setIsStreaming(false); // Set status streaming ke Off
    setStreamSrc(""); // Hapus stream yang ditampilkan
  };

  // Handle status streaming berdasarkan tombol
  const toggleStreaming = () => {
    if (isStreaming) {
      stopStreaming();
    } else {
      startStreaming();
    }
  };

  // Membersihkan WebSocket saat komponen unmount
  useEffect(() => {
    return () => {
      if (ws.current) {
        ws.current.close();
      }
    };
  }, []);

  return (
    <div className="flex">
      <div className="w-3/5 ml-10 mt-10 mr-5 mb-5">
        <div className="w-full lg:flex lg:flex-1 lg:justify-between mb-10">
          <Card variant="w-1/2 mr-10">
            <HeadCard>
              <div className="flex justify-center items-center text-center w-full">
                <p className="text-2xl font-bold text-[#ffffff]">
                  Count of Motorcycle Visitors
                </p>
              </div>
            </HeadCard>
            <div className="p-10 flex justify-center items-center text-center w-full">
              <span className="flex justify-center items-center text-center gap-5">
                <img src={IconMotorcycle} alt="" />
                <p className="text-4xl font-bold text-gray-500">{totalIn}</p>
              </span>
            </div>
          </Card>
          <Card variant="w-1/2 ml-10">
            <HeadCard>
              <div className="flex justify-center items-center text-center w-full">
                <p className="text-2xl font-bold text-[#ffffff]">Empty Space</p>
              </div>
            </HeadCard>
            <div className="p-10 flex justify-center items-center text-center w-full">
              <span className="flex justify-center items-center text-center gap-5">
                <img src={IconParking} alt="" />
                <p className="text-4xl font-bold text-gray-500">
                  {space - totalIn}
                </p>
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
          <div className="p-7 min-h-[500px]">
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
                  {errorRecords ? (
                    errorRecords.slice(first, last).map((item) => (
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
                              onChange={(event) =>
                                handleCheckboxChange(event, item.id)
                              }
                            />
                            <label
                              htmlFor={`checkbox-table-search-${item.id}`}
                              className="sr-only"
                            >
                              checkbox
                            </label>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <img src={item.imageLink} alt="platNomor" />
                        </td>
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {item.platNomor}
                        </th>
                        <td className="px-6 py-4">{item.wilayah}</td>
                        <td className="px-6 py-4">{item.kota_provinsi}</td>
                        <td className="px-6 py-4">{item.waktuMasuk}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="7">Loading</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            <nav className="flex justify-start pt-4">
              <ul className="lg:flex lg:flex-1 lg:justify-end">
                <li>
                  <a
                    onClick={() => page(1, "prev")}
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
                    onClick={() => page(1, "next")}
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
                <p className="text-2xl font-bold text-[#ffffff]">
                  Exit Gate Motorcycle Camera
                </p>
              </div>
            </HeadCard>
            <div className="p-8 h-full">
              <div className="w-100 h-3/4 bg-gray-300 shadow-sm rounded-md flex justify-center items-center text-center">
                {streamSrc ? (
                  <img
                    id="stream"
                    className="w-full h-full object-cover rounded-md"
                    src={streamSrc}
                    alt="Camera Stream"
                  />
                ) : (
                  <p className="font-bold text-2xl text-gray-500">
                    CCTV Not Connected
                  </p>
                )}
              </div>
              <div className="py-4 flex items-center">
                <Button
                  onClick={toggleStreaming}
                  variant="text-white font-bold bg-[#27dc2a] border-0 hover:bg-[#34cc36] focus:ring-4 focus:ring-[#34cc36] rounded-lg text-sm px-3 py-2 me-2 mb-2"
                >
                  <span className="flex items-center">
                    <img src={IconCCTV} alt="iconCCTV" className="h-5 w-6" />
                    {isStreaming ? "UnConnect" : "Connect"}
                  </span>
                </Button>
              </div>
            </div>
          </Card>
        </div>
        <div className="h-1/4 w-full mt-10">
          <h2 className="font-bold text-3xl mb-4">Certain Conditions</h2>
          <form action="" className="flex gap-4 w-full">
            <input
              type="hidden"
              value={selectedRecordId}
              className="h-10 w-80 rounded-lg border-gray-200"
              name="idPlate"
            />
            <input
              type="text"
              className="h-10 w-80 rounded-lg border-gray-200"
              name="updatePlate"
              placeholder="Input Plate"
              value={manualPlate}
              onChange={handleInputChange}
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                updateRecord();
              }}
              className="text-gray-600 font-bold bg-[#FFFC55] border-0 hover:bg-yellow-200 focus:ring-4 focus:ring-yellow-200 rounded-lg text-sm px-3 py-0 h-10"
            >
              <span className="flex items-center gap-2">
                <img src={IconGate} alt="iconGate" className="h-5 w-6" />
                <p>Open Gate</p>
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MotorcyclesMonitoring;
