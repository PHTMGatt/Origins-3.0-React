// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

// Layout
import Header from "./components/Layout/Header";
import Nav from "./components/Layout/Nav";
import Footer from "./components/Layout/Footer";

// Pages
import MainGuide from "./components/Pages/MainGuide";
import FireStaff from "./components/Pages/FireStaff";
import IceStaff from "./components/Pages/IceStaff";
import WindStaff from "./components/Pages/WindStaff";
import LightningStaff from "./components/Pages/LightningStaff";

// Global Toggle Provider
import EffectsProvider from "./components/Layout/Effects.jsx";

// Global Styles
import "./global.css";
import "./global.d.ts";

function App() {
  return (
    <EffectsProvider>
      <div className="layout-container">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<MainGuide />} />
            <Route path="/FireStaff" element={<FireStaff />} />
            <Route path="/IceStaff" element={<IceStaff />} />
            <Route path="/WindStaff" element={<WindStaff />} />
            <Route path="/LightningStaff" element={<LightningStaff />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </EffectsProvider>
  );
}

export default App;
