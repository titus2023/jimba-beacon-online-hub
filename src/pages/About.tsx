
import React from "react";
import Layout from "@/components/layout/Layout";
import AboutHero from "@/components/about/AboutHero";
import History from "@/components/about/History";
import Leadership from "@/components/about/Leadership";
import Achievements from "@/components/about/Achievements";
import Vision from "@/components/about/Vision";
import AboutCTA from "@/components/about/AboutCTA";

const About = () => {
  return (
    <Layout>
      <AboutHero />
      <div className="container-custom py-12 md:py-16">
        <History />
        <Vision />
        <Leadership />
        <Achievements />
      </div>
      <AboutCTA />
    </Layout>
  );
};

export default About;
