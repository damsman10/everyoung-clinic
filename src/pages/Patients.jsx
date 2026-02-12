import React from "react";
import { Search, Plus, Phone, Mail } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const Patients = () => {
  return (
    <div className="p-6 space-y-10">

      {/* PAGE HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Patients</h1>
          <p className="text-gray-500 mt-1">Manage and view patient records</p>
        </div>

        <Link to="/add-patient">
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-medium shadow-md transition">
            <Plus size={20} /> Add Patient
          </button>
        </Link>
      </div>

      {/* SEARCH + FILTERS */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">

        {/* Search Bar */}
        <div className="relative w-full lg:w-1/3">
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search patients..."
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Filters */}
        {/* <div className="flex items-center gap-3 flex-wrap">
          <FilterPill label="All" active />
          <FilterPill label="New" />
          <FilterPill label="Returning" />
          <FilterPill label="Debtors" />
        </div> */}

      </div>

      {/* PATIENT LIST */}
      <div className="bg-white shadow-lg rounded-2xl border border-gray-100 overflow-hidden">

        {/* TABLE HEADER */}
        <div className="grid grid-cols-6 px-6 py-3 bg-gray-50 text-sm font-semibold text-gray-600">
          <p className="col-span-2">Patient</p>
          <p>Contact</p>
          <p>Gender</p>
          <p>Last Visit</p>
          <p>Status</p>
        </div>

        {/* LIST CONTENT */}
        <div className="divide-y divide-gray-100">
          {patients.map((p, index) => (
            <div
              key={index}
              className="grid grid-cols-6 px-6 py-4 hover:bg-gray-50 transition"
            >
              {/* PATIENT INFO */}
              <div className="col-span-2 flex items-center gap-3">
                <img
                  src={`https://api.dicebear.com/7.x/initials/svg?seed=${p.name}`}
                  alt="avatar"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-semibold text-gray-800">{p.name}</p>
                  <p className="text-sm text-gray-500">ID: {p.id}</p>
                </div>
              </div>

              {/* CONTACT */}
              <div className="flex flex-col gap-1">
                <a
                  href={`tel:${p.phone}`}
                  className="flex items-center gap-1 text-blue-600 text-sm hover:underline"
                >
                  <Phone size={14} /> {p.phone}
                </a>

                <a
                  href={`mailto:${p.email}`}
                  className="flex items-center gap-1 text-gray-600 text-sm hover:underline"
                >
                  <Mail size={14} /> {p.email}
                </a>
              </div>

              {/* Gender */}
              <p className="text-gray-700">{p.gender}</p>

              {/* Last Visit */}
              <p className="text-gray-700">{p.lastVisit}</p>

              {/* Status */}
              <StatusPill status={p.status} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ---------------- COMPONENTS ---------------- */

const FilterPill = ({ label, active }) => (
  <button
    className={`px-4 py-2 rounded-full text-sm font-medium transition ${
      active
        ? "bg-blue-600 text-white shadow-md"
        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
    }`}
  >
    {label}
  </button>
);

const StatusPill = ({ status }) => {
  const color =
    status === "Active"
      ? "bg-green-100 text-green-700"
      : status === "Debtor"
      ? "bg-red-100 text-red-700"
      : "bg-yellow-100 text-yellow-700";

  return (
    <span className={`px-3 py-1 rounded-lg text-sm font-medium ${color}`}>
      {status}
    </span>
  );
};

/* ---------------- SAMPLE DATA ---------------- */

const patients = [
  {
    name: "John Doe",
    id: "P-00123",
    phone: "08012345678",
    email: "john@example.com",
    gender: "Male",
    lastVisit: "Jan 10, 2025",
    status: "Active",
  },
  {
    name: "Sarah Johnson",
    id: "P-00456",
    phone: "08123456789",
    email: "sarah@example.com",
    gender: "Female",
    lastVisit: "Feb 4, 2025",
    status: "Active",
  },
  {
    name: "Michael Adams",
    id: "P-00999",
    phone: "09098765432",
    email: "adams@example.com",
    gender: "Male",
    lastVisit: "Dec 21, 2024",
    status: "Debtor",
  },
];

export default Patients;
