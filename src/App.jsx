import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWidgets from './components/FloatingWidgets';
import Home from './pages/Home';
import About from './components/About';
import AllCollection from './pages/AllCollection';
import Gallery from './pages/Gallery';
import Videos from './pages/Videos';
import Journal from './pages/Journal';
import Contact from './pages/Contact';
import OwnerDashboard from './pages/OwnerDashboard';
import StaffPanel from './pages/StaffPanel';
import CustomerOrders from './pages/CustomerOrders';
import ComingSoon from './pages/ComingSoon';
import { useHashRoute } from './hooks/useHashRoute';

/**
 * Route table. Add a page by importing it and adding one entry — the Navbar
 * and Footer link to these same paths.
 */
const ROUTES = {
  '/': Home,
  '/about': About,
  '/collections': AllCollection,
  '/gallery': Gallery,
  '/videos': Videos,
  '/journal': Journal,
  '/contact': Contact,
  '/owner': OwnerDashboard,
  '/staff': StaffPanel,
  '/customer': CustomerOrders,
};

const NotFound = () => <ComingSoon title="Page Not Found" />;

export default function App() {
  const { path } = useHashRoute();
  const Page = ROUTES[path] ?? NotFound;

  return (
    <div className="relative min-h-screen bg-[#F9F8F6]">
      <Navbar />
      <Page />
      <Footer />
      <FloatingWidgets />
    </div>
  );
}
