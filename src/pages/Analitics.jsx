import React from "react";
import { useParams } from "react-router-dom";
import "../assets/style/index.css";
import Header from "../components/Header";
import VisitorRegionAnalytics from "./content/Analytics/VisitorRegionAnalytics";
import VisitorAnalytics from "./content/Analytics/VisitorAnalytics";
import NotFound from "../components/NotFound";

const Analitics = () => {
  const { content } = useParams();

  const renderContent = () => {
    if (content === "visitor-Analytics") return <VisitorAnalytics />;
    if (content === "visitor-Region-Analytics")
      return <VisitorRegionAnalytics />;
    return <NotFound />;
  };

  return (
    <div>
      <Header />
      {renderContent()}
    </div>
  );
};

export default Analitics;
