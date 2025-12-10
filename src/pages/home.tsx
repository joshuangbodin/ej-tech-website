import React from "react";
import { Helmet } from "react-helmet-async";

import SplashBanner from "../components/SplashBanner";
import AboutUs from "../components/AboutUs";
import Offers from "../components/offers";
import Target from "../components/Target";
import ContactUs from "../components/ContactUs";

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>EjTech Agency — Web Development, Branding & AI Solutions</title>

        <meta
          name="description"
          content="EjTech Agency builds premium websites, SaaS applications, AI automations, branding and digital solutions for businesses in Nigeria and globally."
        />

        <meta
          name="keywords"
          content="web design agency Nigeria, branding agency Lagos, software developers Nigeria, AI automation, SaaS development, EjTech Agency"
        />

        <link rel="canonical" href="https://ejtechagency.com/" />

        {/* OpenGraph / Social */}
        <meta property="og:title" content="EjTech Agency — Web & AI Solutions" />
        <meta
          property="og:description"
          content="We create high-performance websites, brand identities, apps, and AI systems that grow your business."
        />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://ejtechagency.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />

        {/* Schema / Structured Data */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "EjTech Agency",
            "image": "https://ejtechagency.com/og-image.png",
            "url": "https://ejtechagency.com",
            "description": "Web development, SaaS, branding, UI/UX and AI automation services.",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "NG"
            }
          }
          `}
        </script>
      </Helmet>

      {/* Actual homepage content */}
      <SplashBanner />
      <AboutUs />
      <Offers />
      <Target />
      <ContactUs />
    </>
  );
};

export default Home;
