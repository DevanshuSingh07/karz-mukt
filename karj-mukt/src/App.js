
import ServicesPage from "./pages/ServicePage";
import HomePage from "./pages/HomePage";
import { Routes, Route} from 'react-router'
import AboutUs from "./pages/AboutUs";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Testimonials from "./components/Testimonials";
import ContactUs from "./pages/ContactUs";
import TermsAndConditions from "./pages/TermsAndConditions";
import { useLocation } from "react-router";
import Sitemap from "./pages/Sitemap";
import keywords from'./content.json'
import titles from'./content.json'
import meta from'./content.json'
import BlogPage from "./pages/Blogs";
import { HelmetProvider } from "react-helmet-async";


export default function App() {
  const location = useLocation();

  console.log(keywords);
  


 


  return (
    <HelmetProvider>
    <div className="min-h-screen flex flex-col">


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
          <Route path="/blogs" element={<BlogPage/>} />


        </Routes>
      </main>

      <Footer/>
    </div>
    </HelmetProvider>
  );
}
