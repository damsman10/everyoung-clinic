import React, { useState, useEffect } from "react";
import { User, Search, Trash2, Plus } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Doctors = () => {
  const location = useLocation();
  const newDoctor = location.state?.newDoctor;

  const initialDoctors = [
    { 
      name: "Dr. John Smith", 
      specialty: "Cardiology", 
      phone: "08012345678", 
      email: "john.smith@clinic.com", 
      bio: "Dr. Smith is a highly experienced cardiologist with over 15 years in treating complex heart diseases.", 
      patients: 128, 
      appointments: 42, 
      schedule: "Mon – Fri: 9:00 AM – 4:00 PM"
    },
    { 
      name: "Dr. Sarah Johnson", 
      specialty: "Pediatrics", 
      phone: "08087654321", 
      email: "sarah.johnson@clinic.com", 
      bio: "Dr. Johnson specializes in pediatric care with 10 years of experience in child health.", 
      patients: 95, 
      appointments: 30, 
      schedule: "Tue – Sat: 10:00 AM – 5:00 PM"
    },
    { 
      name: "Dr. Michael Adams", 
      specialty: "Orthopedics", 
      phone: "08099887766", 
      email: "michael.adams@clinic.com", 
      bio: "Dr. Adams is an orthopedic surgeon focusing on joint replacement and sports injuries.", 
      patients: 110, 
      appointments: 25, 
      schedule: "Mon – Fri: 8:00 AM – 3:00 PM"
    },
  ];

  const [doctors, setDoctors] = useState(initialDoctors);

  useEffect(() => {
    if (newDoctor) {
      setDoctors((prev) => [...prev, newDoctor]);
    }
  }, [newDoctor]);

  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this doctor?")) {
      setDoctors((prev) => prev.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="p-6 space-y-10">

      {/* PAGE HEADER LIKE PATIENTS PAGE */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Doctors</h1>
          <p className="text-gray-500 mt-1">Manage and view doctor profiles</p>
        </div>

        <Link to="/add-doctor">
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-medium shadow-md transition">
            <Plus size={20} /> Add Doctor
          </button>
        </Link>
      </div>

      {/* SEARCH BAR */}
      <div className="relative w-full sm:w-1/3">
        <Search className="absolute left-3 top-3 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search doctors..."
          className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      {/* DOCTORS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.map((doctor, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl border border-gray-100 p-6 hover:shadow-xl transition relative"
          >
            {/* DELETE ICON */}
            <button
              onClick={() => handleDelete(index)}
              className="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition"
              title="Delete Doctor"
            >
              <Trash2 size={18} />
            </button>

            {/* HEADER */}
            <div className="flex items-center gap-4 mb-4">
              <User size={36} className="text-blue-500" />
              <div>
                <h2 className="text-lg font-semibold text-gray-800">{doctor.name}</h2>
                <p className="text-gray-500">{doctor.specialty}</p>
              </div>
            </div>

            {/* CONTENT */}
            <div className="space-y-2 text-gray-600 text-sm">
              <p><span className="font-medium">Phone:</span> {doctor.phone}</p>
              <p><span className="font-medium">Email:</span> {doctor.email}</p>
            </div>

            <Link 
              to="/doctor-profile" 
              state={{ doctor }}
              className="block mt-4"
            >
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl text-sm font-medium transition">
                View Profile
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
