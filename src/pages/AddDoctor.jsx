import React, { useState } from "react";
import { User, Phone, Mail, CalendarDays, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AddDoctor = () => {
  const navigate = useNavigate();

  // Form state
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    specialty: "",
    dob: "",
    bio: "",
    schedule: "",
    patients: 0,
    appointments: 0,
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!form.name || !form.specialty || !form.email) {
      alert("Please fill in at least Name, Specialty, and Email.");
      return;
    }

    // Navigate back to Doctors page, passing the new doctor in state
    navigate("/doctors", { state: { newDoctor: form } });
  };

  return (
    <div className="p-6 space-y-10">

      {/* TOP HEADER */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => navigate(-1)}
          className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
        >
          <ArrowLeft size={20} className="text-gray-600" />
        </button>

        <div>
          <h1 className="text-3xl font-bold text-gray-800">Add New Doctor</h1>
          <p className="text-gray-500 mt-1">
            Enter the details of a new doctor into the clinic system
          </p>
        </div>
      </div>

      {/* FORM CONTAINER */}
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-2xl border border-gray-100 p-8 space-y-10">

        {/* PERSONAL INFO */}
        <h2 className="text-xl font-semibold text-gray-800">Personal Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField label="Full Name" name="name" value={form.name} onChange={handleChange} icon={<User size={18} />} />
          <InputField label="Phone Number" name="phone" value={form.phone} onChange={handleChange} icon={<Phone size={18} />} />
          <InputField label="Email Address" name="email" value={form.email} onChange={handleChange} icon={<Mail size={18} />} />
          <InputField label="Specialty" name="specialty" value={form.specialty} onChange={handleChange} placeholder="Cardiology, Pediatrics, etc." />
          <InputField label="Date of Birth" name="dob" type="date" value={form.dob} onChange={handleChange} icon={<CalendarDays size={18} />} />
        </div>

        {/* PROFESSIONAL INFO */}
        <h2 className="text-xl font-semibold text-gray-800">Professional Information</h2>
        <div className="space-y-6">
          <div className="space-y-1">
            <label className="text-gray-600 font-medium">Bio</label>
            <textarea
              name="bio"
              value={form.bio}
              onChange={handleChange}
              rows={4}
              placeholder="Short professional biography..."
              className="w-full p-3 border border-gray-200 rounded-xl bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div className="space-y-1">
            <label className="text-gray-600 font-medium">Work Schedule</label>
            <input
              name="schedule"
              value={form.schedule}
              onChange={handleChange}
              type="text"
              placeholder="e.g., Mon – Fri: 9:00 AM – 4:00 PM"
              className="w-full p-3 border border-gray-200 rounded-xl bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
        </div>

        {/* SUBMIT */}
        <button
          type="submit"
          className="mt-10 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-xl shadow-md transition flex items-center justify-center gap-2"
        >
          <User size={20} /> Submit Doctor Record
        </button>
      </form>
    </div>
  );
};

/* ---------------- INPUT COMPONENT ---------------- */
const InputField = ({ label, icon, type = "text", name, value, onChange, placeholder }) => (
  <div className="space-y-1">
    <label className="text-gray-600 font-medium">{label}</label>

    <div className="relative">
      {icon && <span className="absolute left-3 top-3 text-gray-400">{icon}</span>}

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder || label}
        className={`w-full p-3 ${icon ? "pl-10" : ""} border border-gray-200 rounded-xl bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none`}
      />
    </div>
  </div>
);

export default AddDoctor;
