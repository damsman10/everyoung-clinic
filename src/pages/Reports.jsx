import React, { useState } from "react";
import {
  Calendar,
  Printer,
  FileSpreadsheet,
  FileText,
} from "lucide-react";
import { Line, Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

const Reports = () => {
  const [filters, setFilters] = useState({
    start: "",
    end: "",
    doctor: "",
  });

  const appointmentData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Appointments",
        data: [12, 18, 10, 22, 19, 8],
        borderColor: "#2563eb",
        backgroundColor: "rgba(37, 99, 235, 0.2)",
        tension: 0.4,
      },
    ],
  };

  const patientGrowthData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "New Patients",
        data: [25, 34, 40, 45, 38, 50],
        borderColor: "#16a34a",
        backgroundColor: "rgba(22, 163, 74, 0.2)",
        tension: 0.35,
      },
    ],
  };

  const revenueExpenseData = {
    labels: ["Jan", "Feb", "Mar", "Apr"],
    datasets: [
      {
        label: "Revenue",
        data: [500000, 650000, 600000, 800000],
        backgroundColor: "#16a34a",
      },
      {
        label: "Expenses",
        data: [300000, 400000, 380000, 420000],
        backgroundColor: "#dc2626",
      },
    ],
  };

  const appointmentStatusData = {
    labels: ["Completed", "Scheduled", "Cancelled"],
    datasets: [
      {
        data: [60, 25, 15],
        backgroundColor: ["#16a34a", "#2563eb", "#dc2626"],
      },
    ],
  };

  const doctorPerformanceData = {
    labels: ["Dr. Smith", "Dr. Johnson", "Dr. Adams"],
    datasets: [
      {
        label: "Appointments",
        data: [42, 30, 25],
        backgroundColor: "#2563eb",
      },
    ],
  };

  const billingSummary = [
    { id: "BILL-001", patient: "John Doe", amount: "₦45,000", status: "Paid", date: "2025-11-10" },
    { id: "BILL-002", patient: "Jane Roe", amount: "₦30,000", status: "Pending", date: "2025-11-11" },
    { id: "BILL-003", patient: "Sarah Lee", amount: "₦60,000", status: "Paid", date: "2025-11-12" },
  ];

  return (
    <div className="p-6 space-y-10">

      {/* ---------------- FILTER PANEL ---------------- */}
      <div className="bg-white p-6 rounded-2xl shadow border border-gray-100 flex flex-wrap gap-4 items-end">
        
        <div>
          <label className="text-gray-600 font-medium">Start Date</label>
          <input
            type="date"
            className="block mt-1 p-3 border rounded-xl bg-gray-50"
            value={filters.start}
            onChange={(e) => setFilters({ ...filters, start: e.target.value })}
          />
        </div>

        <div>
          <label className="text-gray-600 font-medium">End Date</label>
          <input
            type="date"
            className="block mt-1 p-3 border rounded-xl bg-gray-50"
            value={filters.end}
            onChange={(e) => setFilters({ ...filters, end: e.target.value })}
          />
        </div>

        <div>
          <label className="text-gray-600 font-medium">Doctor</label>
          <select
            className="block mt-1 p-3 border rounded-xl bg-gray-50"
            value={filters.doctor}
            onChange={(e) => setFilters({ ...filters, doctor: e.target.value })}
          >
            <option value="">All Doctors</option>
            <option>Dr. John Smith</option>
            <option>Dr. Sarah Johnson</option>
            <option>Dr. Michael Adams</option>
          </select>
        </div>

        <button className="ml-auto bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-3 rounded-xl transition">
          Apply Filters
        </button>
      </div>

      {/* ---------------- APPOINTMENT CHART ---------------- */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
        <h2 className="text-xl font-semibold mb-4">Appointments Summary</h2>
        <Line data={appointmentData} />
      </div>

      {/* ---------------- TWO CHARTS ROW ---------------- */}
      <div className="grid lg:grid-cols-2 gap-6">

        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h2 className="text-xl font-semibold mb-4">Patient Growth</h2>
          <Line data={patientGrowthData} />
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h2 className="text-xl font-semibold mb-4">Revenue vs Expenses</h2>
          <Bar data={revenueExpenseData} />
        </div>

      </div>

      {/* ---------------- APPOINTMENT STATUS PIE ---------------- */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 w-full lg:w-1/2 mx-auto">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Appointment Status Breakdown
        </h2>
        <Pie data={appointmentStatusData} />
      </div>

      {/* ---------------- DOCTOR PERFORMANCE ---------------- */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
        <h2 className="text-xl font-semibold mb-4">Doctor Performance</h2>
        <Bar data={doctorPerformanceData} />
      </div>

      {/* ---------------- BILLING SUMMARY TABLE ---------------- */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
        <h2 className="text-xl font-semibold mb-4">Billing Summary</h2>

        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-600 text-sm">
              <th className="py-3 px-4 text-left">Bill ID</th>
              <th className="py-3 px-4 text-left">Patient</th>
              <th className="py-3 px-4 text-left">Amount</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-left">Date</th>
            </tr>
          </thead>

          <tbody>
            {billingSummary.map((bill, index) => (
              <tr key={index} className="border-b">
                <td className="py-3 px-4">{bill.id}</td>
                <td className="py-3 px-4">{bill.patient}</td>
                <td className="py-3 px-4">{bill.amount}</td>
                <td className="py-3 px-4 font-medium">{bill.status}</td>
                <td className="py-3 px-4">{bill.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ---------------- EXPORT BUTTONS ---------------- */}
      <div className="flex justify-end gap-4">
        <button className="flex items-center gap-2 bg-gray-100 px-5 py-3 rounded-xl hover:bg-gray-200 transition">
          <FileText size={18} /> Export PDF
        </button>
        <button className="flex items-center gap-2 bg-gray-100 px-5 py-3 rounded-xl hover:bg-gray-200 transition">
          <FileSpreadsheet size={18} /> Export Excel
        </button>
        <button className="flex items-center gap-2 bg-gray-100 px-5 py-3 rounded-xl hover:bg-gray-200 transition">
          <Printer size={18} /> Print
        </button>
      </div>
    </div>
  );
};

export default Reports;
