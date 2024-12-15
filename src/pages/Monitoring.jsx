import React from "react";
import { useParams } from "react-router-dom";
import "../assets/style/index.css";
import Header from "../components/Header";
import MotorcyclesMonitoring from "./content/Monitoring/MotorcyclesMonitoring";
import CarsMonitoring from "./content/Monitoring/CarsMonitoring";
import ArchiveCCTV from "./content/Monitoring/ArchiveCCTV";

const Monitoring = () => {
  const { content } = useParams();

  const renderContent = () => {
    if (content === "Motorcycle-Monitoring") return <MotorcyclesMonitoring />;
    if (content === "Car-Monitoring") return <CarsMonitoring />;
    if (content === "CCTV-Archive") return <ArchiveCCTV />;
    return <NotFound />;
  };

  return (
    <div>
      <Header />
      {renderContent()}
    </div>
  );
};

export default Monitoring;
