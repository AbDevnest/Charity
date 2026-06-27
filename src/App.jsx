import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Donation from "./components/Donation";
import Events from "./components/Events";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import OtpPopup from "./components/OtpPopup";

// Admin Components (ye abhi banayenge)
import AdminLogin from "./pages/Admin/AdminLogin";
import AdminLayout from "./pages/Admin/AdminLayout";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminSubscribers from "./pages/Admin/AdminSubscribers";
import AdminContacts from "./pages/Admin/AdminContacts";
import AdminVisitors from "./pages/Admin/AdminVisitors";
import ProtectedRoute from "./components/Admin/ProtectedRoute";

// Website Layout Function
function WebsiteLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Donation />
        <Events />
        <Team />
        <Testimonials />
        <FAQ />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <OtpPopup />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*  Public Website Route */}
        <Route path="/" element={<WebsiteLayout />} />

        {/*  Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        
        <Route path="/admin" element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }>
          <Route index element={<AdminDashboard />} />
          <Route path="subscribers" element={<AdminSubscribers />} />
          <Route path="contacts" element={<AdminContacts />} />
          <Route path="visitors" element={<AdminVisitors />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}