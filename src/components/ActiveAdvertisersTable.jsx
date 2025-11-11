const advertisers = [
  {
    advertiser: 'Happer Net',
    paid: '₦1,200,000.00',
    cpm: 650,
    dfpCpm: 0.33,
    monthlyImpressions: '1,846,153.85',
    dailyImpressions: '61,538',
    homepageImpressions: '9,231',
    location: 'LDR_1,2',
    endDate: '21/07/2025',
    unfilledPercent: '8.33',
    unfilledCount: '62,497',
  },
  {
    advertiser: 'EazySell Nigeria',
    paid: '₦3,000,000.00',
    cpm: 650,
    dfpCpm: 0.33,
    monthlyImpressions: '4,615,384.62',
    dailyImpressions: '153,846',
    homepageImpressions: '23,077',
    location: 'LDR_1,2',
    endDate: '23/07/2025',
    unfilledPercent: '20.83',
    unfilledCount: '156,241',
  },
  {
    advertiser: 'Luna Air',
    paid: '₦4,115,247.00',
    cpm: 650,
    dfpCpm: 0.33,
    monthlyImpressions: '6,331,149.23',
    dailyImpressions: '211,038',
    homepageImpressions: '31,656',
    location: 'MPU_1,2,3',
    endDate: '18/07/2025',
    unfilledPercent: '28.58',
    unfilledCount: '214,324',
  },
  {
    advertiser: 'Betqueen',
    paid: '₦3,055,556.00',
    cpm: 650,
    dfpCpm: 0.33,
    monthlyImpressions: '4,700,855.38',
    dailyImpressions: '156,695',
    homepageImpressions: '23,504',
    location: 'ROS',
    endDate: '13/07/2025',
    unfilledPercent: '21.22',
    unfilledCount: '159,135',
  },
];

// Helper to convert string amounts like "₦1,200,000.00" to numbers
const toNumber = (str) =>
  Number(str.replace(/[^0-9.]/g, '').replace(/,/g, ''));

// Compute totals
const totalPaid = advertisers.reduce((sum, a) => sum + toNumber(a.paid), 0);
const totalDailyImpr = advertisers.reduce(
  (sum, a) => sum + toNumber(a.dailyImpressions),
  0
);
const totalUnfilled = advertisers.reduce(
  (sum, a) => sum + toNumber(a.unfilledCount),
  0
);

const ActiveAdvertisersTable = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-5 mt-8 border border-gray-200 dark:border-gray-700">
      <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
        Active Advertisers
      </h3>
      <div className="overflow-x-auto">
        <table className="min-w-[1000px] w-full text-sm text-left text-gray-700 dark:text-gray-300">
          <thead className="bg-gray-100 dark:bg-gray-700 text-xs uppercase text-gray-600 dark:text-gray-300">
            <tr>
              <th className="px-4 py-3">Advertiser</th>
              <th className="px-4 py-3">Paid (₦/Month)</th>
              <th className="px-4 py-3">CPM</th>
              <th className="px-4 py-3">DFP CPM (£)</th>
              <th className="px-4 py-3">Monthly Impr.</th>
              <th className="px-4 py-3">Daily Impr.</th>
              <th className="px-4 py-3">Homepage Impr.</th>
              <th className="px-4 py-3">Location</th>
              <th className="px-4 py-3">End Date</th>
              <th className="px-4 py-3">Unfilled %</th>
              <th className="px-4 py-3">Unfilled Count</th>
            </tr>
          </thead>
          <tbody>
            {advertisers.map((ad, idx) => (
              <tr
                key={idx}
                className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <td className="px-4 py-3 font-medium">{ad.advertiser}</td>
                <td className="px-4 py-3">{ad.paid}</td>
                <td className="px-4 py-3">{ad.cpm}</td>
                <td className="px-4 py-3">{ad.dfpCpm}</td>
                <td className="px-4 py-3">{ad.monthlyImpressions}</td>
                <td className="px-4 py-3">{ad.dailyImpressions}</td>
                <td className="px-4 py-3">{ad.homepageImpressions}</td>
                <td className="px-4 py-3">{ad.location}</td>
                <td className="px-4 py-3">{ad.endDate}</td>
                <td className="px-4 py-3">{ad.unfilledPercent}%</td>
                <td className="px-4 py-3">{ad.unfilledCount}</td>
              </tr>
            ))}
          </tbody>
          <tfoot className="bg-gray-50 dark:bg-gray-900 font-semibold text-gray-900 dark:text-white">
            <tr>
              <td className="px-4 py-3 text-right" colSpan="1">Total</td>
              <td className="px-4 py-3">₦{totalPaid.toLocaleString()}</td>
              <td className="px-4 py-3"></td>
              <td className="px-4 py-3"></td>
              <td className="px-4 py-3"></td>
              <td className="px-4 py-3">{totalDailyImpr.toLocaleString()}</td>
              <td className="px-4 py-3"></td>
              <td className="px-4 py-3"></td>
              <td className="px-4 py-3"></td>
              <td className="px-4 py-3"></td>
              <td className="px-4 py-3">{totalUnfilled.toLocaleString()}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default ActiveAdvertisersTable;
