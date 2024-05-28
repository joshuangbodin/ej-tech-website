import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Services from "./pages/services";
import ServicesInfo from "./pages/services-info";
import Layout from "./Layouts/Layout";

type Props = {};

const App: React.FC<Props> = ({}: Props) => {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServicesInfo />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
