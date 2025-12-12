// src/components/layout/Sidebar.jsx
import { useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FiPlusCircle, FiX } from "react-icons/fi";
import logo from "../../assets/img/logo.png";
// import { menuItemDatas } from "../../assets/fake-data/data";
import MenuItems from "../MenuItems";

export default function Sidebar() {
  return (
    <div
      className="absolute fixed  md:w-64 lg:w-70 border-r-2 border-gray-200  inset-y-0 
    left-0  bg-white z-60 transform lg:translate-x-0 
    transition-transform duration-300 max-md:hidden block"
    >
      <div className=" w-full flex items-center justify-center gap-3 mt-6 mb-6 ">
        <img src={logo} alt="logo" className="lg:w-8 lg:h-8 sm:w-5 sm:h-5" />
        <div className="lg:text-2xl sm:text-lg font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
          Social Media
        </div>
      </div>
      <MenuItems />
    </div>
  );
}
