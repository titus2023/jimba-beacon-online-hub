
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
          {/* Placeholder for Google Maps integration */}
          <div className="aspect-[21/9] bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500 text-lg">Google Maps Integration</span>
          </div>
          <div className="p-6">
            <div className="flex justify-between flex-wrap gap-4">
              <div>
                <h3 className="font-semibold text-lg">Jimba Gede Secondary School</h3>
                <p className="text-gray-600">123 Education Road, Jimba Gede, Nigeria</p>
              </div>
              <div>
                <a 
                  href="https://maps.google.com" 
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
