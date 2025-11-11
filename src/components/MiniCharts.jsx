import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend
} from 'recharts';

const impressionsData = [
  { day: 'Mon', Impressions: 110000 },
  { day: 'Tue', Impressions: 125000 },
  { day: 'Wed', Impressions: 132000 },
  { day: 'Thu', Impressions: 128000 },
  { day: 'Fri', Impressions: 140000 },
  { day: 'Sat', Impressions: 120000 },
  { day: 'Sun', Impressions: 135000 }
];

const spendData = [
  { name: 'Microseconds', value: 1200000 },
  { name: 'Afripost', value: 750000 },
  { name: 'TechMart', value: 950000 },
  { name: 'MediaFix', value: 600000 }
];

const COLORS = ['#3D78DA', '#34D399', '#FBBF24', '#EC4899'];

const MiniCharts = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      
      <div className="Impressions-Line-Chart bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Impressions (Last 7 Days)
        </h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={impressionsData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
            <XAxis dataKey="day" stroke="#8884d8" />
            <YAxis />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-white dark:bg-gray-700 text-sm shadow rounded px-3 py-2 border border-gray-200 dark:border-gray-600">
                      <p className="font-semibold text-gray-800 dark:text-white">
                        {payload[0].value.toLocaleString()} impressions
                      </p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Line
              type="monotone"
              dataKey="Impressions"
              stroke="#3D78DA"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      
      <div className="Spend-Share-Pie-Chart bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Spend Share by Advertiser
        </h3>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={spendData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              label={({ name, percent }) =>
                `${name}: ${(percent * 100).toFixed(0)}%`
              }
            >
              {spendData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MiniCharts;
