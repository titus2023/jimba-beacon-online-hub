
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import AboutHero from "@/components/about/AboutHero";
import History from "@/components/about/History";
import Leadership from "@/components/about/Leadership";
import Achievements from "@/components/about/Achievements";
import Vision from "@/components/about/Vision";
import AboutCTA from "@/components/about/AboutCTA";

const About = () => {
  const location = useLocation();

  // Handle hash links for navigation
  useEffect(() => {
    // Check if there's a hash in the URL
    if (location.hash) {
      // Find the element with the matching ID
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      
      // If found, scroll to it
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      // If no hash, scroll to top
      window.scrollTo(0, 0);
    }
  }, [location]);

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
