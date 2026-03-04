import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Members from "./pages/Members";
import WriteToUs from "./pages/WriteToUs.jsx";
import ContactUs from "./pages/ContactUs";
import JoinNow from "./pages/JoinNow";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/members" element={<Members />} />
        <Route path="/write-to-us" element={<WriteToUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/join-now" element={<JoinNow />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
