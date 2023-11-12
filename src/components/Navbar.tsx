import React from "react";
import { ReactComponent as CircleIconsProfile } from "../assets/Circle-icons-profile.svg";

const Navbar = () => {
  return (
    <div className="h-[8vh] flex justify-end items-center">
      <div className="w-[98px] border-2 rounded-full border-[#DDDDDD] flex justify-evenly items-center h-[50%]">
        <p className="text-[#999999]">Account</p>
        <div>
          <CircleIconsProfile />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
