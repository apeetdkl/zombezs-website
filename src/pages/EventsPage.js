import React from 'react';
import { motion } from 'framer-motion';

const events = [
  { id: 1, name: "Tech Conference 2024", date: "Dec 1, 2024", location: "San Francisco, CA" },
  { id: 2, name: "Startup Pitch Day", date: "Dec 15, 2024", location: "Los Angeles, CA" },
  { id: 3, name: "Hackathon 2025", date: "Jan 10, 2025", location: "New York, NY" },
];

const EventsPage = () => {
  return (
    <motion.div
      className="bg-gradient-to-r from-blue-900 to-purple-900 min-h-screen text-white flex flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="text-5xl font-bold mt-10"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Explore Our Events
      </motion.h1>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-10 w-full max-w-6xl"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        {events.map((event) => (
          <motion.div
            key={event.id}
            className="p-6 bg-white text-black rounded-xl shadow-xl hover:shadow-2xl transform transition-transform hover:scale-105"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <h2 className="text-2xl font-bold">{event.name}</h2>
            <p className="text-lg text-gray-700">📅 {event.date}</p>
            <p className="text-lg text-gray-700">📍 {event.location}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.a
        href="/"
        className="mt-10 px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Back to Home
      </motion.a>
    </motion.div>
  );
};

export default EventsPage;
