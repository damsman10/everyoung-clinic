import React from "react";
import { UserPlus, Phone, Mail, Calendar, Home, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom"; // ✅ import useNavigate

const AddPatient = () => {
  const navigate = useNavigate(); // ✅ initialize navigate

  return (
    <div className="p-6 space-y-10">

      {/* TOP HEADER */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => navigate(-1)} // ✅ go back one page
          className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
        >
          <ArrowLeft size={20} className="text-gray-600" />
        </button>

        <div>
          <h1 className="text-3xl font-bold text-gray-800">Add New Patient</h1>
          <p className="text-gray-500 mt-1">
            Enter the details of a new patient into the clinic system
          </p>
        </div>
      </div>

      {/* FORM CONTAINER */}
      <div className="bg-white shadow-lg rounded-2xl border border-gray-100 p-8">

        {/* SECTION: PERSONAL INFO */}
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          Personal Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <InputField label="Full Name" icon={<UserPlus size={18} />} />
          <InputField label="Phone Number" icon={<Phone size={18} />} />
          <InputField label="Email Address" icon={<Mail size={18} />} />
          <InputField label="Date of Birth" type="date" icon={<Calendar size={18} />} />

          {/* GENDER SELECT */}
          <div className="space-y-1">
            <label className="text-gray-600 font-medium">Gender</label>
            <select className="w-full p-3 border border-gray-200 rounded-xl bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none">
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>

          <InputField label="Address" icon={<Home size={18} />} />
        </div>

        <hr className="my-10" />

        {/* SECTION: MEDICAL INFO */}
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          Medical Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField label="Blood Group" placeholder="O+, A-, B+, etc." />
          <InputField label="Genotype" placeholder="AA, AS, SS" />

          <div className="md:col-span-2 space-y-1">
            <label className="text-gray-600 font-medium">Medical Notes</label>
            <textarea
              rows={4}
              placeholder="Additional medical notes, allergies, conditions..."
              className="w-full p-3 border border-gray-200 rounded-xl bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
        </div>

        {/* SUBMIT BUTTON */}
        <button className="mt-10 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-xl shadow-md transition flex items-center justify-center gap-2">
          <UserPlus size={20} /> Submit Patient Record
        </button>

      </div>
    </div>
  );
};

/* ---------------- INPUT COMPONENT ---------------- */
const InputField = ({ label, icon, type = "text", placeholder }) => (
  <div className="space-y-1">
    <label className="text-gray-600 font-medium">{label}</label>

    <div className="relative">
      {icon && (
        <span className="absolute left-3 top-3 text-gray-400">{icon}</span>
      )}

      <input
        type={type}
        placeholder={placeholder || label}
        className={`w-full p-3 ${
          icon ? "pl-10" : ""
        } border border-gray-200 rounded-xl bg-gray-50 
        focus:ring-2 focus:ring-blue-500 outline-none`}
      />
    </div>
  </div>
);

export default AddPatient;
