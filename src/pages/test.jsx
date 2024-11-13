import Webcam from "react-webcam";
import React, { useRef, useCallback } from "react";

const test = () => {
  const videoOption = {
    width: 720,
    height: 480,
    facingMode: "environment",
  };
  const webcamRef = useRef(null);
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    return imageSrc;
  }, [webcamRef]);

  const predict = async () => {
    const imageSrc = capture();
    const response = await fetch("http://127.0.0.1:5000/prediction", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ image: imageSrc }),
    });
    const data = await response.json();
    console.log(data);

    const responseBackend = await fetch("http://127.0.0.1:5000/prediction", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    
    const databackend = await responseBackend.json();
    console.log(databackend);

    const responseIoT = fetch("http://192.168.88.138/gerbangMasuk");
    console.log(responseIoT);
  };
  return (
    <div>
      <h1> Coba ML</h1>
      <Webcam
        ref={webcamRef}
        screenshotFormat="image/png"
        audio={false}
        videoConstraints={videoOption}
      />
      <button onClick={predict}>predict</button>
    </div>
    
  );
};

export default test;
