import React from "react";
import { FaHome, FaChartLine, FaWallet, FaUser, FaStore, FaBox, FaQuestionCircle, FaSignOutAlt } from "react-icons/fa";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-[#0f1c2e] text-white flex flex-col py-6 px-4 space-y-4">
      <div className="text-2xl font-bold mb-6">AlphaTrend24</div>
      <nav className="space-y-4">
        <SidebarLink icon={<FaHome />} label="Home" active />
        <SidebarLink icon={<FaChartLine />} label="Trades" />
        <SidebarLink icon={<FaWallet />} label="Finance" />
        <SidebarLink icon={<FaUser />} label="Profile" />
        <SidebarLink icon={<FaStore />} label="Markets" />
        <SidebarLink icon={<FaBox />} label="Packages" />
        <SidebarLink icon={<FaQuestionCircle />} label="Help" />
        <SidebarLink icon={<FaSignOutAlt />} label="Logout" />
      </nav>
    </aside>
  );
}

function SidebarLink({ icon, label, active }) {
  return (
    <div className={`flex items-center space-x-3 py-2 px-3 rounded-md cursor-pointer ${active ? "bg-green-600" : "hover:bg-gray-700"}`}>
      {icon}
      <span>{label}</span>
    </div>
  );
}
