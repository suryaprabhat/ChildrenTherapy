import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../src/components/ui/Navbar";
import Footer from "../src/components/ui/Footer";
import HomePage from "../src/pages/HomePage";
import AboutPage from "../src/pages/About";
import Services from "../src/pages/Services";
import BookAppointments from "../src/pages/BookAppointments";
import ContactPage from "../src/pages/Contact Us";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-blue-50 text-gray-900">
        <Navbar />
        <Routes>
          <Route path="/Home" element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/Book Appointments" element={<BookAppointments />} />
          <Route path="/Contact" element={<ContactPage />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/About" element={<AboutPage />} />
         </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
