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
        <Suspense
          fallback={
            <div className="text-center py-20">
              <div className="flex justify-center items-center h-screen">
                <div className="relative animate-spin w-8 h-8">
                  <div className="absolute w-2 h-2 bg-orange-500 rounded-full top-0 left-1/2 transform -translate-x-1/2 animate-bounce delay-0"></div>
                  <div className="absolute w-2 h-2 bg-gray-500 rounded-full top-1/2 left-0 transform -translate-y-1/2 animate-bounce delay-200"></div>
                  <div className="absolute w-2 h-2 bg-purple-500 rounded-full top-1/2 right-0 transform -translate-y-1/2 animate-bounce delay-200"></div>
                  <div className="absolute w-2 h-2 bg-red-500 rounded-full bottom-0 left-1/2 transform -translate-x-1/2 animate-bounce delay-600"></div>
                </div>
              </div>
            </div>
          }
        >
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
