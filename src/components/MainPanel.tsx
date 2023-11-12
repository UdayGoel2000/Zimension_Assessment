import React from "react";
import Navbar from "./Navbar";
import ContentPage from "./ContentPage";
import { Project as projectDetails } from "../utils/type";

type compProp = { projectDetails: projectDetails };

const MainPanel: React.FC<compProp> = ({ projectDetails }) => {
  return (
    <div className="w-[75vw]">
      <Navbar />
      <ContentPage projectDetails={projectDetails} />
    </div>
  );
};

export default MainPanel;
