import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AppRoutes from "./routes/AppRoutes";
import Coaches from "./components/Coaches/Coaches";
import Testimonials from "./components/Testimonials/Testimonials";


function App() {
  return (
    <>
    <Navbar />
    <AppRoutes />
    <Coaches />
    <Testimonials />
    <Footer />
    </>
  );
}

export default App;