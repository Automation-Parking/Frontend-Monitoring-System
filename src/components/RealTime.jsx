import React, { useState, useEffect } from "react";

const Realtime = () => {
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setDateTime(new Date());
        }, 1000);

        return () => clearInterval(interval); // Clear interval on component unmount
    }, []);

    const formattedDate = dateTime.toLocaleDateString("id-ID", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    const formattedTime = dateTime.toLocaleTimeString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
    });

    return (
        <div className="flex justify-center items-center text-center gap-5">
            <p className="text-4xl font-bold text-gray-600">{formattedTime}</p>
            <h2 className="text-end text-l font-semibold mt-5">{formattedDate}</h2>
        </div>
    );
};

export default Realtime;
