import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Firebase Auth Protection
import PrivateRoute from "./components/PrivateRoute";

// Layout Components
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Pages
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Dashboard from "./pages/Dashboard";
import Patients from "./pages/Patients";
import AddPatient from "./pages/AddPatient";
import Doctors from "./pages/Doctors";
import DoctorProfile from "./pages/DoctorProfile";
import AddDoctor from "./pages/AddDoctor";
import Appointments from "./pages/Appointments";
import AddAppointment from "./pages/AddAppointment";
import Billing from "./pages/Billing";
import AddBilling from "./pages/AddBilling";
import Reports from "./pages/Reports";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />

      <Routes>
        {/* Public Route */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />


        {/* Protected Layout */}
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <div className="flex min-h-screen dark:bg-[#1E293B] dark:text-white">
                {/* Sidebar (desktop) */}
                <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

                <div className="flex-1 flex flex-col">
                  {/* Topbar with mobile hamburger */}
                  <Topbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

                  {/* Main Content */}
                  <main className="flex-1 p-6 md:ml-[16rem] bg-[#f1f3f4] dark:bg-gray-700">
                    <Routes>
                      <Route path="/" element={<Dashboard />} />
                      <Route path="/patients" element={<Patients />} />
                      <Route path="/add-patient" element={<AddPatient />} />
                      <Route path="/doctors" element={<Doctors />} />
                      <Route path="/doctor-profile" element={<DoctorProfile />} />
                      <Route path="/add-doctor" element={<AddDoctor />} />
                      <Route path="/appointments" element={<Appointments />} />
                      <Route path="/add-appointment" element={<AddAppointment />} />
                      <Route path="/billing" element={<Billing />} />
                      <Route path="/add-billing" element={<AddBilling />} />
                      <Route path="/reports" element={<Reports />} />
                      <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                  </main>

                  <Footer />
                </div>
              </div>
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
