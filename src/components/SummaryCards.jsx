
import {
  FolderKanban,
  PlayCircle,
  Eye,
  CreditCard,
  ArrowUpRight,
  ArrowDownRight,
  MoveRight
} from 'lucide-react';

const summaryData = [
  {
    title: 'Total Campaigns',
    value: '24',
    icon: FolderKanban,
    color: 'text-blue-600',
    iconBg: 'bg-blue-100 dark:bg-blue-800/30',
    trend: { direction: 'none', percent: 0 }
  },
  {
    title: 'Active Campaigns',
    value: '12',
    icon: PlayCircle,
    color: 'text-green-600',
    iconBg: 'bg-green-100 dark:bg-green-800/30',
    trend: { direction: 'down', percent: -1 }
  },
  {
    title: 'Total Impressions',
    value: '1,234,000',
    icon: Eye,
    color: 'text-purple-600',
    iconBg: 'bg-purple-100 dark:bg-purple-800/30',
    trend: { direction: 'up', percent: 7.2 }
  },
  {
    title: 'Total Spend',
    value: '₦3,200,000',
    icon: CreditCard,
    color: 'text-yellow-600',
    iconBg: 'bg-yellow-100 dark:bg-yellow-800/30',
    trend: { direction: 'up', percent: 10.4 }
  }
];

const SummaryCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {summaryData.map(({ title, value, icon: Icon, color, iconBg, trend }, index) => {
        const isUp = trend.direction === 'up';
        const isDown = trend.direction === 'down';
        const isNone = trend.direction === 'none';

        return (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl p-5 min-h-[120px] flex flex-col justify-between border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-start justify-between">
              <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
              <div className={`p-2 rounded-full ${iconBg}`}>
                <Icon className={`w-5 h-5 ${color}`} />
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-3">
              {value}
            </h2>

            <div className="mt-auto">
              {trend && (
                <div
                  className={`text-sm mt-1 font-medium flex items-center space-x-1 ${
                    isUp
                      ? 'text-green-600'
                      : isDown
                      ? 'text-red-600'
                      : 'text-gray-500'
                  }`}
                >
                  <span>
                    {isUp ? (
                      <ArrowUpRight size={14} />
                    ) : isDown ? (
                      <ArrowDownRight size={14} />
                    ) : (
                      <MoveRight size={14} />
                    )}
                  </span>
                  <span>
                    {trend.percent === 0
                      ? 'No change'
                      : `${Math.abs(trend.percent)}% vs last week`}
                  </span>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SummaryCards;
