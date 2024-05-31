import React from "react";
import SplashBanner from "../components/SplashBanner";
import AboutUs from "../components/AboutUs";
import Offers from "../components/offers";
import Target from "../components/Target";
import Imgshw from "../components/Imgshw";
import ContactUs from "../components/ContactUs";

type Props = {};

const Home: React.FC<Props> = ({}: Props) => {
  return (
    <div>
      <SplashBanner />
      <AboutUs />
      <Offers />
      <Target />
      <Imgshw />
      <ContactUs />
    </div>
  );
};

export default Home;
