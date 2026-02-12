import React, { useState, useEffect } from 'react';
import { Trash2, Search, Plus } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Billing = () => {
  const location = useLocation();
  const newBill = location.state?.newBill;

  const [bills, setBills] = useState([
    { patient: 'John Doe', doctor: 'Dr. John Smith', date: '2025-11-22', amount: 200, status: 'Paid' },
    { patient: 'Jane Roe', doctor: 'Dr. Sarah Johnson', date: '2025-11-23', amount: 150, status: 'Pending' },
    { patient: 'Mike Lee', doctor: 'Dr. Michael Adams', date: '2025-11-24', amount: 300, status: 'Overdue' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (newBill) {
      setBills(prev => [...prev, newBill]);
    }
  }, [newBill]);

  const handleDelete = (index) => {
    if (window.confirm('Are you sure you want to delete this bill?')) {
      setBills(prev => prev.filter((_, i) => i !== index));
    }
  };

  // Filter bills by patient, doctor, or date
  const filteredBills = bills.filter(bill =>
    bill.patient.toLowerCase().includes(searchTerm.toLowerCase()) ||
    bill.doctor.toLowerCase().includes(searchTerm.toLowerCase()) ||
    bill.date.includes(searchTerm)
  );

  return (
    <div className="p-6 space-y-6">

      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Billing</h1>
          <p className="text-gray-500 mt-1">Manage patient bills and payments</p>
        </div>
        <Link to="/add-billing">
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-medium shadow-md transition">
            <Plus size={20} /> Add Bill
          </button>
        </Link>
      </div>

      {/* SEARCH */}
      <div className="relative w-full sm:w-1/3">
        <Search className="absolute left-3 top-3 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search bills..."
          className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* BILLS TABLE */}
      <div className="overflow-x-auto bg-white shadow-lg rounded-xl border border-gray-100">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Doctor</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredBills.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-6 py-4 text-center text-gray-500 text-sm">
                  No bills found.
                </td>
              </tr>
            ) : (
              filteredBills.map((bill, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? 'bg-white hover:bg-gray-50 transition' : 'bg-gray-50 hover:bg-gray-100 transition'}
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{bill.patient}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{bill.doctor}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{bill.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">${bill.amount}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className={`font-semibold ${
                      bill.status === 'Paid'
                        ? 'text-green-600'
                        : bill.status === 'Pending'
                        ? 'text-blue-600'
                        : 'text-red-600'
                    }`}>
                      {bill.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() => handleDelete(index)}
                      className="text-gray-400 hover:text-red-600 transition"
                      title="Delete Bill"
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

export default Billing;
