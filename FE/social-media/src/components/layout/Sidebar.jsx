// src/components/layout/Sidebar.jsx
import { useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FiPlusCircle } from "react-icons/fi";
import logo from "../../assets/img/logo.png";
import { menuItemDatas } from "../../assets/fake-data/data";

export default function Sidebar({ label }) {
  const navigate = useNavigate();
  const location = useLocation();
  const navItems = Array.isArray(menuItemDatas) ? menuItemDatas : [];

  // derive active label from current URL path so the UI always matches router
  const activeLabel = useMemo(() => {
    const path = location?.pathname ?? "";
    // try to find exact match or the item whose `to` is a prefix of the path
    const match = navItems.find((it) => {
      if (!it || !it.to) return false;
      if (it.to === path) return true;
      // skip root exact match to avoid matching everything
      if (it.to !== "/" && path.startsWith(it.to)) return true;
      return false;
    });
    if (path.startsWith("/create-post")) return "New Post";
    return match?.label ?? navItems[0]?.label ?? "";
  }, [location?.pathname, navItems]);
  return (
    <aside className="w-64 bg-white h-screen fixed left-0 top-0 border-r border-gray-200 hidden lg:block z-100">
      <div className="flex items-center gap-3 p-4 mb-6">
        <img src={logo} alt="Logo" className="w-8 h-8" />
        <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
          Social Media
        </div>
      </div>

      <nav className="p-4 space-y-2">
        {navItems.map((item, idx) => {
          const label = item?.label ?? item?.to ?? `item-${idx}`;
          const to = item?.to;
          const Icon = item?.icon;
          return (
            <button
              key={label}
              onClick={() => {
                try {
                  if (to) navigate(to);
                } catch (err) {
                  // eslint-disable-next-line no-console
                  console.error("Navigation error:", err);
                }
              }}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-lg transition ${
                activeLabel === label
                  ? "bg-blue-500 text-white font-medium"
                  : "hover:bg-gray-200 text-gray-700"
              }`}
            >
              {Icon ? <Icon size={22} /> : null}
              <span>{label}</span>
            </button>
          );
        })}

        <button
          onClick={() => navigate("/create-post")}
          className={`w-full flex items-center gap-4 px-4 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium hover:from-blue-600 hover:to-blue-700 shadow-lg ${
            activeLabel === "New Post" ? "ring-2 ring-blue-400 " : ""
          }`}
        >
          <FiPlusCircle size={22} />
          <span>New Post</span>
        </button>
      </nav>
    </aside>
  );
}
