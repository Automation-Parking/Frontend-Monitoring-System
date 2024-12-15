import React from "react";
import { useParams } from "react-router-dom";
import "../assets/style/index.css";
import Header from "../components/Header";
import ReportArchive from "./content/ReportPaper/ReportArchive";
import ReportPaper from "./content/ReportPaper/ReportPaper";
const ReportPapers = () => {
  const { content } = useParams();

  const renderContent = () => {
    if (content === "Report-Paper") return <ReportPaper />;
    if (content === "Report-Archive") return <ReportArchive />;
    return <NotFound />;
  };

  return (
    <div>
      <Header />
      {renderContent()}
    </div>
  );
};

export default ReportPapers;
