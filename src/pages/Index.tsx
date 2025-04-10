
import React from "react";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import Announcements from "@/components/home/Announcements";
import Features from "@/components/home/Features";
import Academics from "@/components/home/Academics";
import Gallery from "@/components/home/Gallery";
import Testimonials from "@/components/home/Testimonials";
import ContactCTA from "@/components/home/ContactCTA";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Announcements />
      <Features />
      <Academics />
      <Gallery />
      <Testimonials />
      <ContactCTA />
    </Layout>
  );
};

export default Index;
