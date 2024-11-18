import React from 'react';
import { motion } from 'framer-motion';

const events = [
  {
    id: 1,
    name: "Tech Conference 2024",
    date: "Dec 1, 2024",
    location: "San Francisco, CA",
    image: "/collaborations/CS.png",
    description: "Join industry leaders and tech enthusiasts to discuss the future of technology.",
  },
  {
    id: 2,
    name: "Startup Pitch Day",
    date: "Dec 15, 2024",
    location: "Los Angeles, CA",
    image: "/collaborations/CS.png",
    description: "An exciting day where startups pitch their ideas to top investors.",
  },
  {
    id: 3,
    name: "Hackathon 2025",
    date: "Jan 10, 2025",
    location: "New York, NY",
    image: "/collaborations/CS.png",
    description: "Collaborate with peers and build innovative solutions in a 48-hour hackathon.",
  },
  {
    id: 1,
    name: "Tech Conference 2024",
    date: "Dec 1, 2024",
    location: "San Francisco, CA",
    image: "/collaborations/CS.png",
    description: "Join industry leaders and tech enthusiasts to discuss the future of technology.",
  },
  {
    id: 1,
    name: "Tech Conference 2024",
    date: "Dec 1, 2024",
    location: "San Francisco, CA",
    image: "/collaborations/CS.png",
    description: "Join industry leaders and tech enthusiasts to discuss the future of technology.",
  },
];

const EventsPage = () => {
  return (
    <motion.div
      className="bg-gradient-to-r from-blue-900 to-purple-900 min-h-screen text-white flex flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="flex flex-col items-center justify-center w-full h-40"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-6xl font-bold text-center font-Doto">Explore Our Events</h1>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 sm:p-6 lg:p-10 w-full max-w-6xl"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        {events.map((event) => (
          <motion.div
            key={event.id}
            className="p-6 bg-white text-black rounded-xl shadow-xl hover:shadow-2xl transform transition-transform hover:scale-105 overflow-hidden"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="overflow-hidden rounded-t-xl">
              <img
                src={event.image}
                alt={event.name}
                className="w-full h-50 object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="mt-4 font-Doto">
              <h2 className="text-2xl font-bold font-Doto">{event.name}</h2>
              <p className="text-gray-700 text-base mt-2 font-Doto">{event.description}</p>
              <p className="text-xl text-gray-700 mt-2 font-Doto">📅 {event.date}</p>
              <p className="text-xl text-gray-700 font-Doto">📍 {event.location}</p>
            </div>
            <div className="mt-4 text-center">
              <motion.button
                className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition transform hover:scale-105"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Register
              </motion.button>
            </div>
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
