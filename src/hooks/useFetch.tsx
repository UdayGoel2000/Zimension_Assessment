import { useEffect, useState } from "react";
import { fetchData } from "../utils/api";
import { Project } from "../utils/type";

// type Project = {
//   id: string;
//   Name: string;
//   Operations: string[];
// };

const useFetch = (initialState: Project[]): Project[] => {
  // const useFetch = (initialState: Project[]): { Project: Project[] } => {
  const [projectData, setProjectData] = useState<Project[]>(initialState);

  useEffect(() => {
    const data = fetchData();
    setProjectData(data.Project);
  }, []);

  return projectData;
  //   return { Project: projectData };
};

export default useFetch;
