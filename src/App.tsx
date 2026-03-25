import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import EnrollModal from './components/EnrollModal';

// Direct imports for core pages to eliminate navigation latency
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import Publications from './pages/Publications';

// Lazy load secondary pages
const DentalTreatments = lazy(() => import('./pages/DentalTreatments'));
const CosmetologyClinic = lazy(() => import('./pages/CosmetologyClinic'));
const Academy = lazy(() => import('./pages/Academy'));
const Doctors = lazy(() => import('./pages/Doctors'));
const PatientStories = lazy(() => import('./pages/PatientStories'));
const Branches = lazy(() => import('./pages/Branches'));

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

const Loading = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const ScrollToTop = () => {
  const { pathname, key } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, key]);

  return null;
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/treatments/dental" element={<DentalTreatments />} />
              <Route path="/treatments/cosmetology" element={<CosmetologyClinic />} />
              <Route path="/academy" element={<Academy />} />
              <Route path="/doctors" element={<Doctors />} />
              <Route path="/patient-stories" element={<PatientStories />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/publications" element={<Publications />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/branches" element={<Branches />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <EnrollModal />
      </div>
    </Router>
  );
}
