import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layouts/Layout";

// Lazy-load pages for performance
const Home = lazy(() => import("./pages/home"));
const Services = lazy(() => import("./pages/services"));
const ServicesInfo = lazy(() => import("./pages/services-info"));

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-[#0b0018] text-white">
      <Layout>
        <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServicesInfo />} />
          </Routes>
        </Suspense>
      </Layout>
    </div>
  );
};

export default App;
