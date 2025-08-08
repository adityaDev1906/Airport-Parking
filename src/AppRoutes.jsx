import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About";
import Faqs from "./components/Faqs";
import Contact from "./components/Contact";
import BristolAirport from "./components/Airports/bristol-airport";
import GatwickAirport from "./components/Airports/gatwick-airport";
import HeathrowAirport from "./components/Airports/heathrow-airport";
import LutonAirport from "./components/Airports/luton-airport";
import ManchesterAirport from "./components/Airports/manchester-airport";
import StanstedAirport from "./components/Airports/stansted-airport";
import ParkingCardComponent from './components/Airports/ParkingCardComponent';
import Airportcheapparking from "./components/Airports/airportcheapparking";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/bristol" element={<BristolAirport />} />
    <Route path="/gatwick" element={<GatwickAirport />} />
    <Route path="/heathrow" element={<HeathrowAirport />} />
    <Route path="/luton" element={<LutonAirport />} />
    <Route path="/manchester" element={<ManchesterAirport />} />
    <Route path="/stansted" element={<StanstedAirport />} />
    <Route path="/faqs" element={<Faqs />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/ParkingCardComponent" element={<ParkingCardComponent />} />
    <Route path="/airportcheapparking" element={<Airportcheapparking />} />
  </Routes>
);

export default AppRoutes;