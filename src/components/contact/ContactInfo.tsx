
import React from "react";
import { MapPin, Phone, Mail, Clock, Globe } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8">
      <h2 className="heading-sm mb-6">Contact Information</h2>
      
      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div className="shrink-0 mt-1">
            <div className="w-10 h-10 rounded-full bg-school-light flex items-center justify-center">
              <MapPin className="h-5 w-5 text-school-primary" />
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">Address</h3>
            <p className="text-gray-600">
              123 Education Road<br/>
              Jimba Gede, Nigeria
            </p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="shrink-0 mt-1">
            <div className="w-10 h-10 rounded-full bg-school-light flex items-center justify-center">
              <Phone className="h-5 w-5 text-school-primary" />
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
            <p className="text-gray-600">
              <a href="tel:+2341234567890" className="hover:text-school-primary">+234 123 456 7890</a><br/>
              <a href="tel:+2341234567891" className="hover:text-school-primary">+234 123 456 7891</a>
            </p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="shrink-0 mt-1">
            <div className="w-10 h-10 rounded-full bg-school-light flex items-center justify-center">
              <Mail className="h-5 w-5 text-school-primary" />
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
            <p className="text-gray-600">
              <a href="mailto:info@jimbagede.edu" className="hover:text-school-primary">info@jimbagede.edu</a><br/>
              <a href="mailto:admissions@jimbagede.edu" className="hover:text-school-primary">admissions@jimbagede.edu</a>
            </p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="shrink-0 mt-1">
            <div className="w-10 h-10 rounded-full bg-school-light flex items-center justify-center">
              <Clock className="h-5 w-5 text-school-primary" />
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">Office Hours</h3>
            <p className="text-gray-600">
              Monday - Friday: 8:00 AM - 4:00 PM<br/>
              Saturday: 9:00 AM - 12:00 PM<br/>
              Sunday: Closed
            </p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="shrink-0 mt-1">
            <div className="w-10 h-10 rounded-full bg-school-light flex items-center justify-center">
              <Globe className="h-5 w-5 text-school-primary" />
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">Social Media</h3>
            <div className="flex space-x-3 mt-2">
              <a href="#" className="h-8 w-8 rounded-full bg-gray-200 hover:bg-school-primary hover:text-white transition-colors flex items-center justify-center">
                <span className="text-sm">FB</span>
              </a>
              <a href="#" className="h-8 w-8 rounded-full bg-gray-200 hover:bg-school-primary hover:text-white transition-colors flex items-center justify-center">
                <span className="text-sm">TW</span>
              </a>
              <a href="#" className="h-8 w-8 rounded-full bg-gray-200 hover:bg-school-primary hover:text-white transition-colors flex items-center justify-center">
                <span className="text-sm">IG</span>
              </a>
              <a href="#" className="h-8 w-8 rounded-full bg-gray-200 hover:bg-school-primary hover:text-white transition-colors flex items-center justify-center">
                <span className="text-sm">YT</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
