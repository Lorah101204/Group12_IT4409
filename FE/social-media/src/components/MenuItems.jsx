import React from "react";
import { menuItemDatas } from "../assets/fake-data/data";
import { NavLink, useNavigate } from "react-router-dom";
import { FiPlusCircle } from "react-icons/fi";
export default function MenuItems({}) {
  const navigate = useNavigate();
  return (
    <>
      <div className=" w-full px-6 flex flex-col items-center text-gray-700 gap-4  font-medium">
        {menuItemDatas.map(({ to, Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/"}
            onClick={() => {}}
            className={({ isActive }) =>
              `w-full flex items-center gap-4 px-4 py-3 text-xl rounded-lg transition ${
                isActive
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-200 text-gray-700"
              }`
            }
          >
            <Icon size={25} />
            <span>{label}</span>
          </NavLink>
        ))}

        <button
          onClick={() => navigate("/create-post")}
          className="w-full flex items-center gap-4 px-4 py-3 text-xl rounded-lg 
            bg-gradient-to-r from-green-400 to-green-600 text-white font-medium 
            hover:from-blue-600 hover:to-blue-700 shadow-lg "
        >
          <FiPlusCircle size={25} />
          <div>New Post</div>
        </button>
      </div>
    </>
  );
}
