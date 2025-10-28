import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ReservationWidget from './components/ReservationWidget';
import Home from './pages/Home';
import About from './pages/About';
import Cuisine from './pages/Cuisine';
import Reservation from './pages/Reservation';
import Events from './pages/Events';
import Careers from './pages/Careers';

function App() {
  const [isReservationOpen, setIsReservationOpen] = React.useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cuisine" element={<Cuisine />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/events" element={<Events />} />
            <Route path="/careers" element={<Careers />} />
          </Routes>
        </main>
        <Footer />
        
        {/* Global Reservation Widget */}
        <ReservationWidget 
          isOpen={isReservationOpen} 
          onClose={() => setIsReservationOpen(false)} 
        />
      </div>
    </Router>
  );
}

export default App;