import {getFeaturedEvents} from '../dummy-data.jsx'
import EventList from '../components/events/EventList.jsx';

function HomePage() {
  const featuredEvents = getFeaturedEvents()
  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}

export default HomePage;
