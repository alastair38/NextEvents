import { Fragment } from 'react';
import { useRouter } from 'next/router';

import { getFeaturedEvents } from '../dummy-data';
import EventList from '../components/events/event-list';

function HomePage() {
  const featEvents = getFeaturedEvents();

  return(
    <Fragment>
      <EventList items={featEvents} />
    </Fragment>
  );
}

export default HomePage;
