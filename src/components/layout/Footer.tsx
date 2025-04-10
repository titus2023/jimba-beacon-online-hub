
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, PhoneCall, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-10 w-10 bg-school-secondary rounded-full flex items-center justify-center text-white font-bold text-sm">JG</div>
              <h3 className="font-bold text-lg">Jimba Gede Secondary School</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Providing quality education and nurturing future leaders through excellence in academics, 
              character development, and community engagement.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="h-8 w-8 rounded-full bg-gray-700 hover:bg-school-primary transition-colors flex items-center justify-center">
                <Facebook size={16} />
              </a>
              <a href="#" className="h-8 w-8 rounded-full bg-gray-700 hover:bg-school-primary transition-colors flex items-center justify-center">
                <Twitter size={16} />
              </a>
              <a href="#" className="h-8 w-8 rounded-full bg-gray-700 hover:bg-school-primary transition-colors flex items-center justify-center">
                <Instagram size={16} />
              </a>
              <a href="#" className="h-8 w-8 rounded-full bg-gray-700 hover:bg-school-primary transition-colors flex items-center justify-center">
                <Youtube size={16} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-school-secondary transition-colors">About Us</Link></li>
              <li><Link to="/academics" className="text-gray-300 hover:text-school-secondary transition-colors">Academics</Link></li>
              <li><Link to="/news" className="text-gray-300 hover:text-school-secondary transition-colors">News & Events</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-school-secondary transition-colors">Gallery</Link></li>
              <li><Link to="/staff" className="text-gray-300 hover:text-school-secondary transition-colors">Staff Directory</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-school-secondary transition-colors">Contact Us</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-school-secondary transition-colors">Student Portal</a></li>
              <li><a href="#" className="text-gray-300 hover:text-school-secondary transition-colors">Parent Portal</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="text-school-secondary mt-1" size={18} />
                <span className="text-gray-300">123 Education Road, Jimba Gede, Nigeria</span>
              </li>
              <li className="flex items-center gap-3">
                <PhoneCall className="text-school-secondary" size={18} />
                <a href="tel:+2341234567890" className="text-gray-300 hover:text-school-secondary transition-colors">+234 123 456 7890</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-school-secondary" size={18} />
                <a href="mailto:info@jimbagede.edu" className="text-gray-300 hover:text-school-secondary transition-colors">info@jimbagede.edu</a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="text-school-secondary mt-1" size={18} />
                <div>
                  <p className="text-gray-300">Monday - Friday: 8:00 AM - 4:00 PM</p>
                  <p className="text-gray-300">Saturday: 9:00 AM - 12:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Newsletter</h3>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter to receive updates and news.</p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:border-school-secondary focus:outline-none text-white" 
              />
              <button 
                type="submit"
                className="py-2 px-4 bg-school-primary hover:bg-school-secondary transition-colors rounded font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Copyright Bar */}
      <div className="bg-gray-950 py-4">
        <div className="container-custom text-center md:flex md:justify-between md:items-center">
          <p className="text-gray-400 text-sm mb-2 md:mb-0">
            © {new Date().getFullYear()} Jimba Gede Secondary School. All Rights Reserved.
          </p>
          <div className="text-gray-400 text-sm">
            <a href="#" className="hover:text-school-secondary transition-colors">Privacy Policy</a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-school-secondary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
