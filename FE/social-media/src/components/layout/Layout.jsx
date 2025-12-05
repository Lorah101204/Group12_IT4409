// src/components/layout/Layout.jsx
import Header from "./Header";
import Sidebar from "./Sidebar";
import React from "react";

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 lg:ml-64 top-15 relative">{children}</main>
      </div>
    </div>
  );
}
