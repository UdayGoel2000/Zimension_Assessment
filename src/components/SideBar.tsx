import React from "react";

type componentProp = {
  arrayOfIdAndName: { id: string; Name: string }[];
  handleSetProjectId: any;
  projectId: string;
};

const SideBar: React.FC<componentProp> = ({
  arrayOfIdAndName,
  handleSetProjectId,
  projectId,
}) => {
  return (
    <div className="w-[25vw] h-[100vh] bg-[#33667C] rounded-[2rem]">
      <h1 className="text-[white] font-[Inter] p-[3rem] font-bold	text-[16px]">
        ReactJS Test
      </h1>
      <div className="h-[75vh] flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          {arrayOfIdAndName?.map((ele) => (
            <button
              className={`w-[171px] h-[39px] ${
                ele.id === projectId
                  ? "bg-[#DBF4FF] border-[1px] border-[#3FA3CD]"
                  : "bg-[#FFFFFF]"
              } m-[10px] rounded-[0.5rem] shadow-2xl`}
              value={ele.id}
              key={ele.id}
              onClick={(e) => handleSetProjectId(e.currentTarget.value)}
            >
              <p
                className={`${
                  ele.id === projectId ? "text-[#3FA3CD]" : "text-[#20455A]"
                }`}
              >
                {ele.Name}
              </p>
            </button>
          ))}
        </div>
        <button className="w-[106px] h-[39px] bg-[#EF3636] m-[10px] rounded-[0.5rem]">
          <p className="text-[white]">Create new</p>
        </button>
      </div>
    </div>
  );
};

export default SideBar;
