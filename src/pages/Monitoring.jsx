import React from "react";
import { useParams } from "react-router-dom";
import "../assets/style/index.css";
import Header from "../components/Header";
import MotorcyclesMonitoring from "./content/Monitoring/MotorcyclesMonitoring";
import CarsMonitoring from "./content/Monitoring/CarsMonitoring";
import ArchiveCCTV from "./content/Monitoring/ArchiveCCTV";

function Monitoring() {
  const { content } = useParams();
  if (content === "Motorcycle-Monitoring") {
    return (
      <div>
        <Header></Header>
        <MotorcyclesMonitoring></MotorcyclesMonitoring>
      </div>
    );
  } else if (content === "Car-Monitoring") {
    return (
      <div>
        <Header></Header>
        <CarsMonitoring></CarsMonitoring>
      </div>
    );
  } else if (content === "CCTV-Archive") {
    return (
      <div>
        <Header></Header>
        <ArchiveCCTV></ArchiveCCTV>
      </div>
    );
  } else {
    return <NotFound></NotFound>;
  }
}

export default Monitoring;
