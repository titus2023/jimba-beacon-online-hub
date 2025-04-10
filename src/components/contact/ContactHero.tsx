
import React from "react";

const ContactHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-school-primary to-school-secondary overflow-hidden py-14 md:py-16">
      <div className="absolute inset-0 bg-[url('/images/pattern-bg.png')] opacity-10"></div>
      <div className="container-custom relative z-10">
        <div className="max-w-2xl mx-auto text-center text-white">
          <h1 className="heading-lg mb-4">Contact Us</h1>
          <p className="text-xl opacity-90">
            We're here to answer any questions you may have about our school, programs, or admission process. 
            Feel free to reach out to us using any of the methods below.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
