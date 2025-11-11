const upcomingCampaigns = [
  {
    id: 1,
    campaign: 'Back-to-School Promo',
    advertiser: 'Microseconds',
    endDate: '2025-07-04'
  },
  {
    id: 2,
    campaign: 'July Awareness Blitz',
    advertiser: 'Afripost',
    endDate: '2025-07-10'
  },
  {
    id: 3,
    campaign: 'Summer Tech Deals',
    advertiser: 'TechMart',
    endDate: '2025-07-12'
  },
  {
    id: 4,
    campaign: 'Anniversary Giveaway',
    advertiser: 'MediaFix',
    endDate: '2025-07-02'
  }
];

const WeeklyActivityCard = () => {
  const today = new Date();
  const sevenDaysFromNow = new Date();
  sevenDaysFromNow.setDate(today.getDate() + 7);

  const campaignsEndingThisWeek = upcomingCampaigns.filter(({ endDate }) => {
    const end = new Date(endDate);
    return end >= today && end <= sevenDaysFromNow;
  }).length;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-5 w-full border border-gray-200 dark:border-gray-700">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        This Week’s Activity
      </h3>
      <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
        <li className="flex justify-between">
          <span>📢 Campaigns Started</span>
          <span className="font-semibold text-gray-900 dark:text-white">5</span>
        </li>
        <li className="flex justify-between">
          <span>🛑 Campaigns Ending</span>
          <span className="font-semibold text-gray-900 dark:text-white">
            {campaignsEndingThisWeek}
          </span>
        </li>
        <li className="flex justify-between">
          <span>💼 New Advertisers</span>
          <span className="font-semibold text-gray-900 dark:text-white">2</span>
        </li>
        <li className="flex justify-between">
          <span>💰 Revenue This Week</span>
          <span className="font-semibold text-gray-900 dark:text-white">₦450,000</span>
        </li>
      </ul>
    </div>
  );
};

export default WeeklyActivityCard;
