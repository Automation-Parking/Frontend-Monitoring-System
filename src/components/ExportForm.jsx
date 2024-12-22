// ExportForm.jsx
import React, { useState } from "react";

const ExportForm = ({ onSubmit }) => {
  const [fileName, setFileName] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = sessionStorage.getItem("token"); // Retrieve the token
    if (token) {
      onSubmit({ fileName, date, token }); // Pass the form data and token to the parent
    } else {
      alert("Authorization token is missing!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <table cellPadding="5">
        <tbody>
          <tr>
            <td>
              <label htmlFor="fileName">Filename</label>
            </td>
            <td>:</td>
            <td>
              <input
                type="text"
                id="fileName"
                name="fileName"
                value={fileName}
                onChange={(e) => setFileName(e.target.value)}
                className="rounded-md ml-3 w-full"
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="date">Bulan/Tahun</label>
            </td>
            <td>:</td>
            <td>
              <input
                type="month"
                id="date"
                name="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
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
          <img src="/path/to/iconExcel.png" alt="Excel Icon" />
          <h2 className="text-xl font-bold text-white">Export</h2>
        </button>
      </div>
    </form>
  );
};

export default ExportForm;
