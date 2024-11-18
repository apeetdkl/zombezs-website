import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Team from './pages/Team';
import Services from './pages/Services';
import Projects from './pages/Project';
import Certifications from './pages/Certifications';
import Collaborations from './pages/Collaborations';
import EventsPage from './pages/EventsPage';
import ContactForm from './pages/ContactForm';
import Footer from './components/Footer';

// This component will handle route transition animations
const RouteTransition = ({ children }) => {
  const location = useLocation();
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { tension: 220, friction: 60 },
  });

  return (
    <animated.div style={fadeIn} key={location.key}>
      {children}
    </animated.div>
  );
};

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // React Spring animation for the entire page fade-in
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { tension: 220, friction: 60 },
  });

  // Background color changes when the mobile menu is open
  const backgroundStyle = isMobileMenuOpen ? { backgroundColor: 'black' } : {};

  return (
    <Router>
      {/* Conditionally set the background style */}
      <animated.div style={{ ...fadeIn, ...backgroundStyle }}>
        <div className="bg-[#16181d] text-green-400 font-Doto">
          {/* Routing with transition animations */}
          <Routes>
            <Route 
              path="/" 
              element={
                <RouteTransition>
                  <Navbar setIsMobileMenuOpen={setIsMobileMenuOpen} />
                  <Home />
                  <Team />
                  <Services />
                  <Projects />
                  <Certifications />
                  <Collaborations />
                  <ContactForm />
                  <Footer />
                </RouteTransition>
              } 
            />
            <Route
              path="/events"
              element={
                <RouteTransition>
                  <EventsPage />
                </RouteTransition>
              }
            />
            <Route
              path="/"
              element={
                <RouteTransition>
                  <EventsPage />
                </RouteTransition>
              }
            />
          </Routes>
        </div>
      </animated.div>
    </Router>
  );
}

export default App;