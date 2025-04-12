
import React from "react";

const ContactMap = () => {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="heading-md mb-4">Our Location</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are conveniently located in Jimba Gede, with easy access to public transportation. 
            Visit us to explore our campus and facilities.
          </p>
        </div>
        
        <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
          {/* Embedded Google Map */}
          <div className="aspect-[21/9]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7301518334377!2d3.3792046!3d6.424580699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xb9ca1ac20725e0e5!2sIkoyi%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1649771234567!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Jimba Gede Secondary School Map"
            ></iframe>
          </div>
          <div className="p-6">
            <div className="flex justify-between flex-wrap gap-4">
              <div>
                <h3 className="font-semibold text-lg">Jimba Gede Secondary School</h3>
                <p className="text-gray-600">123 Education Road, Jimba Gede, Nigeria</p>
              </div>
              <div>
                <a 
                  href="https://maps.google.com/?q=Ikoyi,Lagos,Nigeria" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-school-primary hover:bg-school-secondary text-white px-4 py-2 rounded-md transition-colors"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
