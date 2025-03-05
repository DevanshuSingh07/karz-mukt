
import ServicesPage from "./pages/ServicePage";
import HomePage from "./pages/HomePage";
import { Routes, Route, Link} from 'react-router'
import AboutUs from "./pages/AboutUs";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Testimonials from "./components/Testimonials";
import ContactUs from "./pages/ContactUs";
import TermsAndConditions from "./pages/TermsAndConditions";
import { useEffect } from "react";
import { useLocation } from "react-router";
import { initGA, logPageView } from "./analytics";
import Sitemap from "./pages/Sitemap";
import { Helmet } from "react-helmet";


export default function App() {
  const location = useLocation();



  useEffect(() => {
    initGA();
    logPageView(location.pathname);
  }, [location]);


  const titles = {
    "/": "KarzMukt - Debt Solution Settle Your Debts Legally",
    "/aboutUs": "About Us - Empowering Financial Freedom | Karz-Mukt",
    "/services": "Our Services - Debt Solutions ",
    "/contact": "Contact Us - Get Expert Debt Solutions | Karz-Mukt",
    "/privacy-policy": "Your Data, Your Trust | Karz-Mukt",
    "/terms": "Know Your Rights & Responsibilities | Karz-Mukt",
    "/sitemap": "Sitemap - Navigate Easily Through Karz-Mukt",

  };

  return (
    
    <div className="min-h-screen flex flex-col">
      <Helmet>
      <title>{titles[location.pathname] || "Default Title"} - Karzmukt</title>
      </Helmet>

      <Header/>

      {/* Main Content */}
      <main className="flex-grow pt-16">
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/terms&conditions" element={<TermsAndConditions/>} />
          <Route path="/sitemap" element={<Sitemap/>} />


        </Routes>
      </main>

      <Footer/>
    </div>
    
  );
}
