import { useEffect } from "react";
// import { useLocation } from "react-router-dom";
import Hero from './components/Hero';
import { About } from './components/About';
import Courses from './components/Courses';
import SpecialCourses from './components/SpecialCourses';
import SummerOffer from './components/SummerOffer';
import Contact from './components/Contact';
import { Footer } from './components/Footer';
import Navbar from './components/Navbar';
import WhyChooseUs from './components/WhyChooseUs';
import StudentReviews from './components/StudentReviews';
import { Toaster } from './components/ui/sonner';
import InquiryPopup from './components/InquiryPopup';
import WhatsAppButton from './components/WhatsAppButton';
import { Navigate, Route, Routes } from 'react-router-dom';
import AdminLogin from './admin/AdminLogin';
import AdminDashboard from './admin/AdminDashboard';
import AdminDashboardWithSearch from './admin/AdminDashboardWithSearch';
import RequireAdmin from './admin/RequireAdmin';

export default function App() {

  // ✅ PageView tracking (route change)
  useEffect(() => {
    if (window.fbq) {
      window.fbq('track', 'PageView');
    }
  }, []);
  useEffect(() => {
    let tracked = false;
    // 75 % scroll tracking

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      if (scrollPercent >= 75 && !tracked) {
        if (window.fbq) {
          window.fbq('trackCustom', 'Scroll75Home');
        }
        tracked = true;
      }
    };

    // time tracking -- 10sec ......
    const timer = setTimeout(() => {
      if (window.fbq) {
        window.fbq('trackCustom', 'TimeSpent10s');
      }
    }, 10000);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <Hero />
              <About />
              <Courses />
              <SpecialCourses />
              <SummerOffer />
              <WhyChooseUs />
              <StudentReviews />
              <Contact />
            </main>
          }
        />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
          element={
            <RequireAdmin>
              <AdminDashboardWithSearch />
            </RequireAdmin>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
      <Toaster />
      <InquiryPopup />
      <WhatsAppButton />
    </div>
  );
}