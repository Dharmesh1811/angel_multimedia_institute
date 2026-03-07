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

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
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
      <Footer />
      <Toaster />
      <InquiryPopup />
      <WhatsAppButton />
    </div>
  );
}
