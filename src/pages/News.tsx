
import React from "react";
import Layout from "@/components/layout/Layout";
import NewsHero from "@/components/news/NewsHero";
import NewsSection from "@/components/news/NewsSection";
import EventsCalendar from "@/components/news/EventsCalendar";
import NewsletterSignup from "@/components/news/NewsletterSignup";

const News = () => {
  return (
    <Layout>
      <NewsHero />
      <NewsSection />
      <EventsCalendar />
      <NewsletterSignup />
    </Layout>
  );
};

export default News;
