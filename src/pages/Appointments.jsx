import React, { useState, useEffect } from 'react';
import { Search, Trash2, Plus } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Appointments = () => {
  const location = useLocation();
  const newAppointment = location.state?.newAppointment;

  const [appointments, setAppointments] = useState([
    { patient: 'John Doe', doctor: 'Dr. John Smith', date: '2025-11-22', time: '10:00 AM', status: 'Scheduled' },
    { patient: 'Jane Roe', doctor: 'Dr. Sarah Johnson', date: '2025-11-23', time: '1:00 PM', status: 'Completed' },
    { patient: 'Mike Lee', doctor: 'Dr. Michael Adams', date: '2025-11-24', time: '11:30 AM', status: 'Cancelled' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (newAppointment) {
      setAppointments(prev => [...prev, newAppointment]);
    }
  }, [newAppointment]);

  const handleDelete = (index) => {
    if (window.confirm('Are you sure you want to delete this appointment?')) {
      setAppointments(prev => prev.filter((_, i) => i !== index));
    }
  };

  // Filter appointments based on search term
  const filteredAppointments = appointments.filter(appt =>
    appt.patient.toLowerCase().includes(searchTerm.toLowerCase()) ||
    appt.doctor.toLowerCase().includes(searchTerm.toLowerCase()) ||
    appt.date.includes(searchTerm)
  );

  return (
    <div className="p-6 space-y-6">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Appointments</h1>
          <p className="text-gray-500 mt-1">View and manage scheduled appointments</p>
        </div>
        <Link to="/add-appointment">
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-medium shadow-md transition">
            <Plus size={20} /> Add Appointment
          </button>
        </Link>
      </div>

      {/* SEARCH BAR */}
      <div className="relative w-full sm:w-1/3">
        <Search className="absolute left-3 top-3 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search appointments..."
          className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* APPOINTMENTS TABLE */}
      <div className="overflow-x-auto bg-white shadow-lg rounded-xl border border-gray-100">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Doctor</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredAppointments.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-6 py-4 text-center text-gray-500 text-sm">
                  No appointments found.
                </td>
              </tr>
            ) : (
              filteredAppointments.map((appt, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white hover:bg-gray-50' : 'bg-gray-50 hover:bg-gray-100 transition'}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{appt.patient}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{appt.doctor}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{appt.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{appt.time}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className={`font-semibold ${
                      appt.status === 'Scheduled'
                        ? 'text-blue-600'
                        : appt.status === 'Completed'
                        ? 'text-green-600'
                        : 'text-red-600'
                    }`}>
                      {appt.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() => handleDelete(index)}
                      className="text-gray-400 hover:text-red-600 transition"
                      title="Delete Appointment"
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Appointments;
