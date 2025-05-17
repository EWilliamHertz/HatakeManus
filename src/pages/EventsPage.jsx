import React from 'react';
import EventCard from '../components/EventCard';
import { events } from '../data/events';

const EventsPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Upcoming Events
      </h1>
      
      <div className="mb-8">
        <p className="text-gray-700 dark:text-gray-300">
          Join us at our upcoming TCG events across the Nordics!
        </p>
      </div>
      
      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {events.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
