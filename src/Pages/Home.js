import React from "react";
import Navigation from "../Components/Navigation";
import Sidebar from "../Components/Sidebar";
import Banner from "../Components/Banner";
import SocialProof from "../Components/SocialProof";
import Services from "../Components/Services";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

const Home = () => {

  return (
    <div>
      <Navigation />
      <Sidebar />
      <Banner />
      <SocialProof />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
