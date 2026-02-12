import React, { useState } from "react";
import { User, CalendarDays, Clock, FileText, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AddAppointment = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    patient: "",
    doctor: "",
    date: "",
    time: "",
    notes: "",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    if (!formData.patient || !formData.doctor || !formData.date || !formData.time) {
      alert("Please fill all required fields");
      return;
    }

    // Save the appointment somewhere (state, API, context, etc.)
    console.log("New Appointment:", formData);

    // Navigate back or reset form
    navigate("/appointments", { state: { newAppointment: formData } });
  };

  return (
    <div className="p-6 space-y-10">
      <div className="flex items-center gap-4">
        <button
          onClick={() => navigate(-1)}
          className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
        >
          <ArrowLeft size={20} className="text-gray-600" />
        </button>
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Add New Appointment</h1>
          <p className="text-gray-500 mt-1">
            Schedule a new appointment between a patient and a doctor
          </p>
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-2xl border border-gray-100 p-8 space-y-10">
        <h2 className="text-xl font-semibold text-gray-800">Appointment Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField
            label="Patient Name"
            icon={<User size={18} />}
            value={formData.patient}
            onChange={(e) => handleChange("patient", e.target.value)}
          />
          <InputField
            label="Doctor Name"
            icon={<User size={18} />}
            value={formData.doctor}
            onChange={(e) => handleChange("doctor", e.target.value)}
          />
          <InputField
            label="Date"
            type="date"
            icon={<CalendarDays size={18} />}
            value={formData.date}
            onChange={(e) => handleChange("date", e.target.value)}
          />
          <InputField
            label="Time"
            type="time"
            icon={<Clock size={18} />}
            value={formData.time}
            onChange={(e) => handleChange("time", e.target.value)}
          />
          <TextareaField
            label="Notes"
            icon={<FileText size={18} />}
            value={formData.notes}
            onChange={(e) => handleChange("notes", e.target.value)}
          />
        </div>

        <button
          onClick={handleSubmit}
          className="mt-10 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-xl shadow-md transition flex items-center justify-center gap-2"
        >
          <CalendarDays size={20} /> Schedule Appointment
        </button>
      </div>
    </div>
  );
};

const InputField = ({ label, icon, type = "text", value, onChange }) => (
  <div className="space-y-1">
    <label className="text-gray-600 font-medium">{label}</label>
    <div className="relative">
      {icon && <span className="absolute left-3 top-3 text-gray-400">{icon}</span>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={label}
        className={`w-full p-3 ${icon ? "pl-10" : ""} border border-gray-200 rounded-xl bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none`}
      />
    </div>
  </div>
);

const TextareaField = ({ label, icon, value, onChange }) => (
  <div className="space-y-1 md:col-span-2">
    <label className="text-gray-600 font-medium">{label}</label>
    <div className="relative">
      {icon && <span className="absolute left-3 top-3 text-gray-400">{icon}</span>}
      <textarea
        rows={4}
        value={value}
        onChange={onChange}
        placeholder={label}
        className={`w-full p-3 ${icon ? "pl-10" : ""} border border-gray-200 rounded-xl bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none`}
      />
    </div>
  </div>
);

export default AddAppointment;
