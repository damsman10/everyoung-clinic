import React from "react";
import {
  Users,
  CalendarDays,
  Stethoscope,
  Wallet,
  ChevronRight,
} from "lucide-react";

const Dashboard = () => {
  return (
    <div className="p-6 space-y-10">

      {/* TOP HEADER */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-400 p-8 rounded-2xl shadow-lg text-white">
        <h1 className="text-3xl font-bold">Clinic Dashboard</h1>
        <p className="text-blue-100 mt-1">
          Overview of clinic operations and today's activity
        </p>
      </div>

      {/* TOP CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        <DashboardCard
          title="Total Patients"
          value="120"
          Icon={Users}
          color="blue"
        />

        <DashboardCard
          title="Appointments Today"
          value="18"
          Icon={CalendarDays}
          color="green"
        />

        <DashboardCard
          title="Active Doctors"
          value="6"
          Icon={Stethoscope}
          color="purple"
        />

        <DashboardCard
          title="Pending Bills"
          value="₦45,000"
          Icon={Wallet}
          color="red"
        />
      </div>

      {/* APPOINTMENTS + QUICK ACTIONS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* APPOINTMENTS */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            Today’s Appointments
          </h2>

          <div className="space-y-4">
            {appointments.map((appt, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition shadow-sm border border-gray-200"
              >
                <div>
                  <p className="font-semibold text-gray-800">{appt.name}</p>
                  <p className="text-sm text-gray-500">
                    {appt.time} · {appt.type}
                  </p>
                </div>

                <StatusPill status={appt.status} />
              </div>
            ))}
          </div>

          {/* VIEW ALL */}
          <button className="mt-6 flex items-center text-blue-600 font-medium hover:underline">
            View all appointments <ChevronRight className="ml-1" size={18} />
          </button>
        </div>

        {/* QUICK ACTIONS */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            Quick Actions
          </h2>

          <div className="space-y-3">

            <QuickBtn text="Register New Patient" color="blue" />
            <QuickBtn text="Book Appointment" color="green" />
            <QuickBtn text="Add Doctor" color="purple" />
            <QuickBtn text="View Reports" color="gray" />

          </div>
        </div>

      </div>
    </div>
  );
};

/* ---------------- COMPONENTS ---------------- */

const DashboardCard = ({ title, value, Icon, color }) => {
  const colorMap = {
    blue: "bg-blue-100 text-blue-600",
    green: "bg-green-100 text-green-600",
    purple: "bg-purple-100 text-purple-600",
    red: "bg-red-100 text-red-600",
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 flex items-center gap-4 hover:shadow-lg transition">
      <div className={`p-3 rounded-xl ${colorMap[color]}`}>
        <Icon size={28} />
      </div>

      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
      </div>
    </div>
  );
};

const appointments = [
  { name: "John Doe", time: "09:30 AM", type: "Dental Checkup", status: "Scheduled" },
  { name: "Sarah Johnson", time: "11:00 AM", type: "Consultation", status: "Checked-in" },
  { name: "Michael Adams", time: "02:15 PM", type: "Follow-up", status: "Pending" },
];

const StatusPill = ({ status }) => {
  const map = {
    Scheduled: "bg-blue-100 text-blue-700",
    "Checked-in": "bg-green-100 text-green-700",
    Pending: "bg-yellow-100 text-yellow-700",
  };
  return (
    <span className={`px-3 py-1 text-sm rounded-lg font-medium ${map[status]}`}>
      {status}
    </span>
  );
};

const QuickBtn = ({ text, color }) => {
  const map = {
    blue: "bg-blue-600 hover:bg-blue-700",
    green: "bg-green-600 hover:bg-green-700",
    purple: "bg-purple-600 hover:bg-purple-700",
    gray: "bg-gray-700 hover:bg-gray-800",
  };

  return (
    <button
      className={`w-full py-3 rounded-lg text-white font-medium transition ${map[color]}`}
    >
      {text}
    </button>
  );
};

export default Dashboard;
