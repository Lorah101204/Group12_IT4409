// src/components/layout/Header.jsx
import { FiSearch, FiChevronDown } from "react-icons/fi";
import Avatar from "../common/Avatar";
import ava from "../../assets/img/ava.jpg";
import logo from "../../assets/img/logo.png";
export default function Header() {
  return (
    <header className="bg-white border-b border-gray-300 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-8xl mx-auto px-4 py-3 flex items-center justify-between lg:justify-end">
        <div className="flex items-center gap-3 lg:hidden">
          <img src={logo} alt="Logo" className="w-8 h-8" />
        </div>

        <div className="flex items-center gap-4 mr-2">
          <div className="flex  items-center bg-gray-100 rounded-full px-4 py-2">
            <FiSearch className="text-gray-500" />
            <input
              type="text"
              placeholder="Tìm kiếm..."
              className="bg-transparent outline-none ml-2 text-sm"
            />
          </div>

          <div className="flex items-center gap-2">
            <Avatar src={ava} size="sm" />
            <span className="font-medium hidden sm:block">Hùng Phan</span>
            <span className="text-gray-500">
              <FiChevronDown />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
