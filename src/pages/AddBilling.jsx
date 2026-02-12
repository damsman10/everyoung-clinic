import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddBill = () => {
  const navigate = useNavigate();

  const [billData, setBillData] = useState({
    patient: '',
    doctor: '',
    date: '',
    amount: '',
    status: 'Pending',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBillData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate fields
    if (!billData.patient || !billData.doctor || !billData.date || !billData.amount) {
      alert('Please fill in all required fields.');
      return;
    }

    // Convert amount to number
    const newBill = { ...billData, amount: parseFloat(billData.amount) };

    // Redirect to Billing page with state
    navigate('/billing', { state: { newBill } });
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-lg rounded-xl border border-gray-100">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Add New Bill</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">Patient</label>
          <input
            type="text"
            name="patient"
            value={billData.patient}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-xl border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">Doctor</label>
          <input
            type="text"
            name="doctor"
            value={billData.doctor}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-xl border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">Date</label>
          <input
            type="date"
            name="date"
            value={billData.date}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-xl border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">Amount ($)</label>
          <input
            type="number"
            name="amount"
            value={billData.amount}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-xl border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            min="0"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">Status</label>
          <select
            name="status"
            value={billData.status}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-xl border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Pending">Pending</option>
            <option value="Paid">Paid</option>
            <option value="Overdue">Overdue</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-medium text-sm transition"
        >
          Save Bill
        </button>
      </form>
    </div>
  );
};

export default AddBill;
