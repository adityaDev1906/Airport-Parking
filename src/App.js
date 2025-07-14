import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer/Footer";
import MainNav from "./components/MainNav";
import AppRoutes from "./AppRoutes";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <div className="App">
          <Header />
          <MainNav />
          <AppRoutes />
        </div>
      </Router>
      <Footer />
    </>
  );
};

export default App;