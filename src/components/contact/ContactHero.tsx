
import React from "react";
import { Mail, PhoneCall } from "lucide-react";

const ContactHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-school-primary to-school-secondary overflow-hidden py-16 md:py-20">
      <div className="absolute inset-0 bg-[url('/images/pattern-bg.png')] opacity-10"></div>
      
      {/* Abstract Shapes */}
      <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-white opacity-10 animate-float"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-white opacity-5 animate-float animation-delay-2000"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center text-white">
            <h1 className="heading-lg mb-6">Get In Touch</h1>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              We're here to answer any questions you may have about our school, programs, 
              or admission process. Feel free to reach out to us.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-5 py-3">
                <PhoneCall className="text-school-secondary mr-3" size={20} />
                <a href="tel:+2341234567890" className="text-white hover:text-school-light transition-colors">+234 123 456 7890</a>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-5 py-3">
                <Mail className="text-school-secondary mr-3" size={20} />
                <a href="mailto:info@jimbagede.edu" className="text-white hover:text-school-light transition-colors">info@jimbagede.edu</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Wave Pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-16">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-full">
          <path fill="#ffffff" fillOpacity="1" d="M0,32L48,53.3C96,75,192,117,288,122.7C384,128,480,96,576,90.7C672,85,768,107,864,112C960,117,1056,107,1152,101.3C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default ContactHero;
