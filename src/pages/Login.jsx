import React, { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";
import IconParkingBlue from "../assets/image/Logo/parkingbiru.png";
import IconBraincore from "../assets/image/Logo/bclogo.jpeg";
import IconParkingWhite from "../assets/image/Logo/parkingputih.png";

import { useNavigate } from "react-router-dom";
const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === "" || password === "") {
            setError("*Username dan Password tidak bboleh kosong");
        } else {
            setError("");
            navigate("/Monitoring/Motorcycle-Monitoring");
        } 
    };
    return (

        <div className="flex">
            {/* <div className="w-1/2 h-screen justfy-center item-center"> */}
            <div className="w-1/2 justfy-center item-center">
                    <span className="flex justify-center items-center text-center gap-5">
                        <img src={IconParkingBlue} alt="" className="flex size-24" />
                        <p className="text-4xl font-bold text-gray-600">10 : 00</p>
                    </span>
                    <h2 className="text-end text-l font-semibold mt-5">Sabtu, 12 Desember 2024</h2>
                    <div className="flex bg-[#36517e]">
                    <p className="ml-5 mt-3 mb-3 text-l mb-6 text-white">Login Parking Supervisor</p>
                    </div>
                    <form onSubmit={handleSubmit} className="ml-5 mr-5">
                        <div className="relative my-4">
                            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="block w-full py-2.5 px-0 text-sm text-black bg-transparent border-0 border-b-2 border-grey-300 appearance-none dark:focus:border-grey-600 focus:outline-none focus:ring-0 focus:text-grey focus:border-grey-600 peer" placeholder=" "/>
                            <label htmlFor=""className="absolute text-sm duration-300 transform -translate scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6">Username</label>
                        </div>
                        <div className="relative mu-4">
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="block w-full py-2.5 px-0 text-sm text-black bg-transparent border-0 border-b-2 border-grey-300 appearance-none dark:focus:border-grey-600 focus:outline-none focus:ring-0 focus:text-grey focus:border-grey-600 peer" placeholder=" "/>
                            <label htmlFor="" className="absolute text-sm duration-300 transform -translate scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                        </div>
            
                        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
                    <div className="flex justify-center mt-10">
                        <button 
                            type="submit" className="w-1/4 text-[14px] bg-[#36517e] roundedbg-blue-500 py-1 hover:bg-blue-900 transition-colors duration-300 text-white">Log in
                        </button>
                    </div>
                    </form>
                    <p className="flex justify-center mt-5 font-semibold ext-blue-900 ">Created by Braincore.id</p>
            </div>

            {/* #36517e */}

            <div className="flex w-1/2 h-screen bg-[#36517e] justify-center items-center flex-col">
                <div className="flex items-center space-x-4 mb-8">
                    <img src={IconBraincore} alt="Braincore Logo" className="w-16 h-16" />
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-current text-white w-6 h-6"
                    fill="white"
                    viewBox="0 0 14 14"
                    id="X--Streamline-Typeface"
                    >
                    <desc>{"X Streamline Icon: https://streamlinehq.com"}</desc>
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.5 1 11 13m-0.5 -12L3 13"
                        strokeWidth={1}
                    />
                    </svg>
                    <img src={IconParkingWhite} alt="Parking White Icon" className="w-16 h-16" />
                </div>
                <h1 className="text-white text-4xl font-bold text-center mb-4">Brain-Parking</h1>
                <p className="text-white text-lg text-center px-6">
                    Combination of IoT, Machine Learning, and Website
                </p>
            </div>


        </div>
    )

  
};

export default Login;

