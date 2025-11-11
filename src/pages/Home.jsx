import ActiveAdvertisersTable from '../components/ActiveAdvertisersTable';
import MiniCharts from '../components/MiniCharts';
import SummaryCards from '../components/SummaryCards';
import UpcomingDeadlines from '../components/UpcomingDeadlines';
import WeeklyActivityCard from '../components/WeeklyActivityCard';

const Home = () => {
  return (
    <div className="space-y-8">
      <SummaryCards />
      <ActiveAdvertisersTable />
      <MiniCharts />

      <div className="flex flex-col md:flex-row gap-6 mt-8">
        <div className="flex-1">
          <UpcomingDeadlines />
        </div>
        <div className="w-full md:max-w-sm">
          <WeeklyActivityCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
