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
    console.log(imageSrc);
    const response = await fetch(
      "https://braincore-parking-v1-49333590966.asia-southeast2.run.app/prediction",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ image: imageSrc }),
      },
      console.log(JSON.stringify({ image: imageSrc }))
    );
    const data = await response.json();
    console.log(data);

    //   const responseBackend = await fetch(
    //     "https://2d9f-180-243-125-250.ngrok-free.app/api/parkir/masuk",
    //     {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(data.data),
    //     }
    //   );

    //   const databackend = await responseBackend.json();
    //   console.log(databackend);

    //   const responseIoT = fetch("http://192.168.29.138/gerbangMasuk");
    //   console.log(responseIoT);
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
