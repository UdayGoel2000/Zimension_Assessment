import React from "react";
import { ReactComponent as Add } from "../assets/Add.svg";
import { Project as projectDetails } from "../utils/type";

type compProp = { projectDetails: projectDetails };

const ContentPage: React.FC<compProp> = ({ projectDetails }) => {
  return (
    <div className="w-[100%] h-[92vh] bg-[#D9D9D9] p-[60px] flex flex-col justify-evenly items-center font-bold">
      <div className="w-[160px] h-[43px] bg-[#FDFDFD] text-[black]">
        <h1 className="mx-[50px] my-[9px]">{projectDetails?.Name}</h1>
      </div>
      <div className="p-[5%]">
        {projectDetails?.Operations?.map((ele, i) => (
          <div className="flex justify-start" key={i}>
            <div className="w-[171px] h-[39px] bg-[#FADFDF] m-[10px] rounded-[0.5rem] shadow-2xl flex justify-evenly items-center mr-[61px]">
              <p className="text-[#935757]">{ele.OPerationName}</p>
            </div>
            <div className="w-[171px] h-[39px] bg-[#404E53] m-[10px] shadow-2xl flex justify-evenly items-center">
              <p className="text-[#FFFFFF]">{ele.Tools}</p>
            </div>
            <div className="w-[35px] h-[35px] m-[11px] flex items-center justify-center bg-[red] rounded-full">
              <div className="absolute w-6 h-0.5 bg-white transform rotate-45"></div>
              <div className="absolute w-6 h-0.5 bg-white transform -rotate-45"></div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-[60%] flex flex-col items-start">
        <div className="px-[12px]">
          <Add />
        </div>
        <p className="text-xs">New Operation</p>
      </div>
    </div>
  );
};

export default ContentPage;
