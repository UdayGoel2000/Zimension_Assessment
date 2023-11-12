import React, { useState, useEffect } from "react";
import SideBar from "./SideBar";
import MainPanel from "./MainPanel";
import useFetch from "../hooks/useFetch";
import { Project } from "../utils/type";

const Homepage = () => {
  const data = useFetch([]);
  const [projectData, setProjectData] = useState<Project[]>([]);
  const [projectId, setProjectId] = useState("1");
  const handleSetProjectId = (id: string) => {
    setProjectId(id);
  };
  const handlesetProjectData = (newData: Project) => {
    // setProjectData(newData);
  };
  useEffect(() => {
    setProjectData(data);
  }, [projectData]);
  return (
    <div className="flex flex-row w-[100%] flex ">
      <SideBar
        arrayOfIdAndName={projectData?.map((ele) => ({
          id: ele.id.toString(),
          Name: ele.Name,
        }))}
        handleSetProjectId={handleSetProjectId}
        projectId={projectId}
      />
      <MainPanel
        projectDetails={projectData?.filter((ele) => ele.id === projectId)[0]}
      />
    </div>
  );
};

export default Homepage;
