import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Stethoscope,
  CalendarCheck,
  CreditCard,
  BarChart4,
  X,
} from "lucide-react";
import DarkModeToggle from "./DarkModeToggle";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const baseClass =
    "block px-4 py-2 rounded-[8px] hover:bg-[#b9cff2] hover:text-[#303D54] transition-colors";
  const activeClass = "bg-[#3D78DA] text-white";

  return (
    <>
      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen bg-gray-900 border-r border-gray-700 flex flex-col justify-between transform transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        {/* Logo + Close button */}
        <div className="flex items-center justify-between px-5 pt-6 pb-2">
          <div className="text-[1.6rem] font-bold text-white leading-tight">
            EverYoung CMS
          </div>

          {/* Close button (mobile only) */}
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-gray-400 hover:text-white lg:hidden"
          >
            <X size={22} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 mt-10 text-white">
          <ul className="space-y-2 w-[85%] mx-auto">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `${baseClass} ${isActive ? activeClass : ""}`
                }
                onClick={() => setSidebarOpen(false)}
              >
                <div className="flex items-center gap-3">
                  <LayoutDashboard size={18} />
                  Dashboard
                </div>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/patients"
                className={({ isActive }) =>
                  `${baseClass} ${isActive ? activeClass : ""}`
                }
                onClick={() => setSidebarOpen(false)}
              >
                <div className="flex items-center gap-3">
                  <Users size={18} />
                  Patients
                </div>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/doctors"
                className={({ isActive }) =>
                  `${baseClass} ${isActive ? activeClass : ""}`
                }
                onClick={() => setSidebarOpen(false)}
              >
                <div className="flex items-center gap-3">
                  <Stethoscope size={18} />
                  Doctors
                </div>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/appointments"
                className={({ isActive }) =>
                  `${baseClass} ${isActive ? activeClass : ""}`
                }
                onClick={() => setSidebarOpen(false)}
              >
                <div className="flex items-center gap-3">
                  <CalendarCheck size={18} />
                  Appointments
                </div>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/billing"
                className={({ isActive }) =>
                  `${baseClass} ${isActive ? activeClass : ""}`
                }
                onClick={() => setSidebarOpen(false)}
              >
                <div className="flex items-center gap-3">
                  <CreditCard size={18} />
                  Billing
                </div>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/reports"
                className={({ isActive }) =>
                  `${baseClass} ${isActive ? activeClass : ""}`
                }
                onClick={() => setSidebarOpen(false)}
              >
                <div className="flex items-center gap-3">
                  <BarChart4 size={18} />
                  Reports
                </div>
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Bottom: Dark Mode + Version */}
        <div className="flex flex-col items-center justify-center gap-3 text-gray-400 text-sm pb-6">
          <DarkModeToggle />
          <div className="text-xs tracking-wide text-gray-500">v 1.0.0</div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
