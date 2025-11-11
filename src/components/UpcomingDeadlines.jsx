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

const UpcomingDeadlines = () => {
  const today = new Date();
  const sevenDaysFromNow = new Date();
  sevenDaysFromNow.setDate(today.getDate() + 7);

  const filteredCampaigns = upcomingCampaigns.filter(({ endDate }) => {
    const end = new Date(endDate);
    return end >= today && end <= sevenDaysFromNow;
  });

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700">
      <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
        Upcoming Campaign Deadlines
      </h3>

      {filteredCampaigns.length > 0 ? (
        <ul>
          {filteredCampaigns.map(({ id, campaign, advertiser, endDate }, index) => (
            <li
              key={id}
              className={`pb-3 mb-3 ${
                index !== filteredCampaigns.length - 1
                  ? 'border-b border-gray-200 dark:border-gray-700'
                  : ''
              }`}
            >
              <p className="font-medium text-gray-900 dark:text-white">{campaign}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{advertiser}</p>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">
                Ends on {new Date(endDate).toLocaleDateString()}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 dark:text-gray-400">No campaigns ending in the next 7 days.</p>
      )}
    </div>
  );
};

export default UpcomingDeadlines;
