import React, { useState } from "react";
import SideBar from "./SideBar";
import MainPanel from "./MainPanel";
import useFetch from "../hooks/useFetch";

const Homepage = () => {
  const ProjectData = useFetch([]);
  const [projectId, setProjectId] = useState("1");
  const handleSetProjectId = (id: string) => {
    setProjectId(id);
  };
  return (
    <div className="flex flex-row w-[100%] flex ">
      <SideBar
        arrayOfIdAndName={ProjectData?.map((ele) => ({
          id: ele.id.toString(),
          Name: ele.Name,
        }))}
        handleSetProjectId={handleSetProjectId}
      />
      <MainPanel
        projectDetails={ProjectData?.filter((ele) => ele.id === projectId)[0]}
      />
    </div>
  );
};

export default Homepage;
