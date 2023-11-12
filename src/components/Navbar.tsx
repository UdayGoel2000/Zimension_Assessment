import React from "react";
import { ReactComponent as CircleIconsProfile } from "../assets/Circle-icons-profile.svg";

const Navbar = () => {
  return (
    <div className="w-[100%] h-[8vh] flex justify-end items-center">
      <div className="w-[8%] border-2 rounded-full border-[#DDDDDD] flex justify-evenly items-center h-[50%]">
        <p className="text-[#999999]">Account</p>
        <CircleIconsProfile />
      </div>
    </div>
  );
};

export default Navbar;
