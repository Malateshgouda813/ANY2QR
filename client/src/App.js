import { BrowserRouter, Routes, Route } from "react-router-dom";
import TextQR from "./components/TextQR";
import UrlQR from "./components/UrlQR";
import EmailQR from "./components/EmailQR";
import PhoneQR from "./components/PhoneQR";
import WifiQR from "./components/WifiQR";
import LocationQR from "./components/LocationQR"; 
import ImageQR from "./components/ImageQR";
import SmsQR from "./components/SmsQR";
import VCardQR from "./components/VCardQR";
import UpiQR from "./components/UpiQR";
import SocialQR from "./components/SocialQR";
import EventQR from "./components/EventQR";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />

        <Route path="/text" element={<TextQR />} />
        <Route path="/url" element={<UrlQR />} />
        <Route path="/email" element={<EmailQR />} />
        <Route path="/phone" element={<PhoneQR />} />
        <Route path="/wifi" element={<WifiQR />} />
        <Route path="/location" element={<LocationQR />} />
        <Route path="/image" element={<ImageQR />} />
        <Route path="/sms" element={<SmsQR />} />
        <Route path="/vcard" element={<VCardQR />} />
        <Route path="/upi" element={<UpiQR />} />
        <Route path="/social" element={<SocialQR />} />
        <Route path="/event" element={<EventQR />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;