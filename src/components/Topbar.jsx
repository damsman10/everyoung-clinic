import { Search, Bell } from "lucide-react";
import ppic from "../assets/ppic.jpg";

const Topbar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <header className="h-[5rem] flex items-center justify-between px-6 bg-white dark:bg-[#1E293B] border-b border-gray-200 dark:border-gray-700 shadow-sm">
      {/* Left Section — Hamburger + Logo */}
      <div className="flex items-center gap-3">
        {/* Hamburger for mobile */}
        <button
          className="lg:hidden text-gray-700 dark:text-gray-300 focus:outline-none"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Logo text (always visible on mobile) */}
        <h1 className="text-lg lg:text-xl font-semibold text-gray-700 dark:text-gray-100">
          EverYoung Clinic
        </h1>
      </div>

      {/* Center Section — Search (hidden on mobile) */}
      <div className="flex-1 justify-center hidden lg:flex px-4">
        <div className="relative w-full max-w-xl">
          <input
            type="text"
            placeholder="Search patients, doctors, or records..."
            className="w-full pl-12 pr-4 py-3 text-sm rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search
            size={16}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-300"
          />
        </div>
      </div>

      {/* Right Section — Notifications + Avatar */}
      <div className="flex items-center gap-4">
        <button className="relative text-gray-600 dark:text-gray-300 hover:text-[#3D78DA] transition">
          <Bell size={20} />
          <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-[10px] px-[4px]">
            2
          </span>
        </button>

        <div
          className="w-10 h-10 rounded-full bg-gray-400 bg-cover bg-center border-2 border-gray-300 dark:border-gray-700 cursor-pointer"
          style={{ backgroundImage: `url(${ppic})` }}
          title="User Profile"
        ></div>
      </div>
    </header>
  );
};

export default Topbar;
