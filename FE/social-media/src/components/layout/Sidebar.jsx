// src/components/layout/Sidebar.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiHome,
  FiUser,
  FiMessageCircle,
  FiUsers,
  FiPlusCircle,
} from "react-icons/fi";
import logo from "../../assets/img/logo.png";

const navItems = [
  { icon: FiHome, label: "Feed", path: "/" },
  { icon: FiUser, label: "Profile", path: "/profile" },
  { icon: FiMessageCircle, label: "Message", path: "/chat" },
  { icon: FiUsers, label: "Connections", path: "/connections" },
];

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState("Feed");
  const navigate = useNavigate();
  return (
    <aside className="w-64 bg-white h-screen fixed left-0 top-0 border-r border-gray-200 hidden lg:block z-100">
      <div className="flex items-center gap-3 p-4 mb-6">
        <img src={logo} alt="Logo" className="w-8 h-8" />
        <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
          Social Media
        </div>
      </div>

      <nav className="p-4 space-y-2">
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => {
              setActiveItem(item.label);
              navigate(item.path);
            }}
            className={`w-full flex items-center gap-4 px-4 py-3 rounded-lg transition ${
              activeItem === item.label
                ? "bg-blue-500 text-white font-medium"
                : "hover:bg-gray-100 text-gray-700"
            }`}
          >
            <item.icon size={22} />
            <span>{item.label}</span>
          </button>
        ))}

        <button
          onClick={() => navigate("/create-post")}
          className="w-full flex items-center gap-4 px-4 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium hover:from-blue-600 hover:to-blue-700 shadow-lg"
        >
          <FiPlusCircle size={22} />
          <span>New Post</span>
        </button>
      </nav>
    </aside>
  );
}
