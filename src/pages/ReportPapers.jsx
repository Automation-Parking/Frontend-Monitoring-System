import React from "react";
import { useParams } from "react-router-dom";
import "../assets/style/index.css";
import Header from "../components/Header";
import ReportArchive from "./content/ReportPaper/ReportArchive";
import ReportPaper from "./content/ReportPaper/ReportPaper";
const ReportPapers = () => {
  const { content } = useParams();
  if (content === "Report-Paper") {
    return (
      <div>
        <Header></Header>
        <ReportPaper></ReportPaper>
      </div>
    );
  } else if (content === "Report-Archive") {
    return (
      <div>
        <Header></Header>
        <ReportArchive></ReportArchive>
      </div>
    );
  } else {
    return <NotFound></NotFound>;
  }
};

export default ReportPapers;
