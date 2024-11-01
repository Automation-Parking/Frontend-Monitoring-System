import React from "react";
import { useParams } from "react-router-dom";
import "../assets/style/index.css";
import Header from "../components/Header";
import VisitorAnalytics from "./content/Analytics/VisitorAnalytics";
import VisitorRegionAnalytics from "./content/Analytics/VisitorRegionAnalytics";
import NotFound from "../components/NotFound";
export const Analitics = () => {
  const { content } = useParams();
  if (content === "visitor-Analytics") {
    return (
      <div>
        <Header></Header>
        <VisitorAnalytics></VisitorAnalytics>
      </div>
    );
  } else if (content === "visitor-Region-Analytics") {
    return (
      <div>
        <Header></Header>
        <VisitorRegionAnalytics></VisitorRegionAnalytics>
      </div>
    );
  } else {
    return <NotFound></NotFound>;
  }
};
export default Analitics;
