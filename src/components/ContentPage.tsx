import React from "react";
import { Project as projectDetails } from "../utils/type";

type compProp = { projectDetails: projectDetails };

const ContentPage: React.FC<compProp> = ({ projectDetails }) => {
  return (
    <div className="w-[100%] h-[92vh] bg-[#D9D9D9]">
      <h1>{projectDetails?.Operations}</h1>
    </div>
  );
};

export default ContentPage;
