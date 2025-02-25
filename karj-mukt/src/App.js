
import ServicesPage from "./pages/ServicePage";
import HomePage from "./pages/HomePage";
import ContactForm from "./components/Form";
import { Routes, Route, Link} from 'react-router'
import AboutUs from "./pages/AboutUs";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      {/* <header className="fixed top-0 left-0 w-full bg-[#1E3A8A] text-white shadow-md py-4 px-6 flex justify-between items-center z-50 md:px-12 lg:px-20">
        <h1 className="text-2xl font-bold">Debt Solutions</h1>
        <nav className="space-x-4 md:space-x-6 lg:space-x-8 text-sm md:text-base">
          <Link to="/" className="hover:text-[#93C5FD]">Home</Link>
          <Link to="/services" className="hover:text-[#93C5FD]">Services</Link>
          <Link to="/AboutUs" className="hover:text-[#93C5FD]">About Us</Link>

        </nav>
      </header> */}

      <Header/>

      {/* Main Content */}
      <main className="flex-grow pt-16">
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/AboutUs" element={<AboutUs />} />
        </Routes>
      </main>

      {/* Footer
      <footer className="bg-[#1E3A8A] text-white text-center py-4 text-sm md:text-base">
        <div className="form-flex flex flex-row justify-between">
          <div className="h-auto"></div>
          <div className="form-div">
            <ContactForm />
          </div>
        </div>
        <p>&copy; {new Date().getFullYear()} Debt Solutions. All Rights Reserved.</p>
      </footer> */}
      <Footer/>
    </div>
    
  );
}
