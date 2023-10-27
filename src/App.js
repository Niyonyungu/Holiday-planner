import "./App.css";
import Navbar from "./components/NavBar";
import Homepage from "./components/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./components/AboutUs";
import Tour from "./pages/Tour";
import Login from "./pages/Login";
import Sign from "./pages/SignUp";
import TourDetail from "./pages/TourDetails";
import Dasboard from "./pages/Dashboard";
import DashMain from "./components/DashMain";
import TourDashboard from "./pages/TourDashboard";
import Testimonials from "./components/Testimonials";
import TourForm from "./pages/TourForm";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Homepage />} />
            <Route path="about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Sign />} />
            <Route path="/tourdetail" element={<TourDetail />} />
            <Route path="/tour" element={<Tour />} />
          </Route>
          <Route path="/dashboard" element={<Dasboard />}>
            <Route index element={<DashMain />} />
            <Route path="tourdashboard" element={<TourDashboard />} />
            <Route path="tourform" element={<TourForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
