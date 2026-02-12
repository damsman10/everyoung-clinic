import React from "react";
import { User, Phone, Mail, CalendarDays, ArrowLeft } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const DoctorProfile = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Get doctor data from navigation state
  const doctor = location.state?.doctor;

  // If no doctor is provided, show a fallback
  if (!doctor) {
    return (
      <div className="p-6 text-gray-700">
        <button
          onClick={() => navigate(-1)}
          className="mb-4 p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
        >
          <ArrowLeft size={20} className="text-gray-600" />
        </button>
        <p>No doctor data found.</p>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-10">

      {/* TOP HEADER WITH BACK BUTTON */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => navigate(-1)}
          className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
        >
          <ArrowLeft size={20} className="text-gray-600" />
        </button>

        <div>
          <h1 className="text-3xl font-bold text-gray-800">Doctor Profile</h1>
          <p className="text-gray-500 mt-1">
            Detailed information about the selected doctor
          </p>
        </div>
      </div>

      {/* PROFILE TOP CARD */}
      <div className="bg-white shadow-lg rounded-2xl border border-gray-100 p-8 flex items-start gap-6">
        <div className="bg-blue-50 p-6 rounded-2xl shadow-inner">
          <User size={65} className="text-blue-600" />
        </div>

        <div className="flex-1 space-y-3">
          <h2 className="text-2xl font-semibold text-gray-900">{doctor.name}</h2>
          <p className="text-gray-500 text-sm">{doctor.specialty}</p>

          <div className="space-y-2 text-gray-700 text-sm pt-1">
            <p className="flex items-center gap-2">
              <Phone size={17} className="text-blue-600" /> {doctor.phone}
            </p>
            <p className="flex items-center gap-2">
              <Mail size={17} className="text-blue-600" /> {doctor.email}
            </p>
          </div>
        </div>
      </div>

      {/* ABOUT + STATS SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* ABOUT */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 lg:col-span-2">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">About</h3>
          <p className="text-gray-700 leading-relaxed text-[15px]">
            {doctor.bio}
          </p>
        </div>

        {/* STATS */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 space-y-5">
          <h3 className="text-xl font-semibold text-gray-800 mb-1">Statistics</h3>

          <div className="flex items-center justify-between text-[15px]">
            <span className="text-gray-600">Total Patients</span>
            <span className="font-semibold text-gray-900">{doctor.patients}</span>
          </div>

          <div className="flex items-center justify-between text-[15px]">
            <span className="text-gray-600">Upcoming Appointments</span>
            <span className="font-semibold text-gray-900">{doctor.appointments}</span>
          </div>
        </div>
      </div>

      {/* SCHEDULE */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Schedule</h3>

        <div className="flex items-center gap-3 text-gray-600 text-[15px]">
          <CalendarDays size={20} className="text-blue-600" />
          <p>
            {doctor.schedule || "Mon – Fri: 9:00 AM – 4:00 PM"}
          </p>
        </div>
      </div>

    </div>
  );
};

export default DoctorProfile;
