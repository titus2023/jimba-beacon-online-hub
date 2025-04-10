
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, PhoneCall, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer>
      {/* Top Wave Pattern */}
      <div className="w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-20 -mb-1">
          <path fill="#1A365D" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,208C672,213,768,203,864,186.7C960,171,1056,149,1152,149.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      
      {/* Main Footer Content */}
      <div className="bg-school-primary text-white">
        <div className="container-custom section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* School Info */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-12 w-12 bg-gradient-to-br from-school-secondary to-school-accent rounded-lg flex items-center justify-center text-white font-bold shadow-md">JG</div>
                <h3 className="font-bold text-lg">Jimba Gede Secondary School</h3>
              </div>
              <p className="text-gray-300 mb-5">
                Providing quality education and nurturing future leaders through excellence in academics, 
                character development, and community engagement.
              </p>
              <div className="flex space-x-3">
                <a href="#" className="h-9 w-9 rounded-full bg-white/10 hover:bg-school-secondary transition-colors flex items-center justify-center">
                  <Facebook size={18} />
                </a>
                <a href="#" className="h-9 w-9 rounded-full bg-white/10 hover:bg-school-secondary transition-colors flex items-center justify-center">
                  <Twitter size={18} />
                </a>
                <a href="#" className="h-9 w-9 rounded-full bg-white/10 hover:bg-school-secondary transition-colors flex items-center justify-center">
                  <Instagram size={18} />
                </a>
                <a href="#" className="h-9 w-9 rounded-full bg-white/10 hover:bg-school-secondary transition-colors flex items-center justify-center">
                  <Youtube size={18} />
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-5 border-b border-white/20 pb-2">Quick Links</h3>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/academics" className="text-gray-300 hover:text-white transition-colors">Academics</Link></li>
                <li><Link to="/news" className="text-gray-300 hover:text-white transition-colors">News & Events</Link></li>
                <li><Link to="/gallery" className="text-gray-300 hover:text-white transition-colors">Gallery</Link></li>
                <li><Link to="/staff" className="text-gray-300 hover:text-white transition-colors">Staff Directory</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Student Portal</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Parent Portal</a></li>
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-5 border-b border-white/20 pb-2">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="text-school-secondary mt-1" size={18} />
                  <span className="text-gray-300">123 Education Road, Jimba Gede, Nigeria</span>
                </li>
                <li className="flex items-center gap-3">
                  <PhoneCall className="text-school-secondary" size={18} />
                  <a href="tel:+2341234567890" className="text-gray-300 hover:text-white transition-colors">+234 123 456 7890</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="text-school-secondary" size={18} />
                  <a href="mailto:info@jimbagede.edu" className="text-gray-300 hover:text-white transition-colors">info@jimbagede.edu</a>
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
            <div className="bg-white/5 p-5 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Newsletter</h3>
              <p className="text-gray-300 mb-4">Stay updated with our latest news and announcements.</p>
              <form className="flex flex-col gap-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-3 rounded-md bg-white/10 border border-white/20 focus:border-school-secondary focus:outline-none text-white placeholder:text-gray-400" 
                />
                <Button 
                  type="submit"
                  className="py-3 px-4 bg-school-secondary hover:bg-school-accent transition-colors rounded-md font-medium flex items-center justify-center"
                >
                  Subscribe
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright Bar */}
      <div className="bg-[#11223d] py-4">
        <div className="container-custom text-center md:flex md:justify-between md:items-center">
          <p className="text-gray-400 text-sm mb-2 md:mb-0">
            © {new Date().getFullYear()} Jimba Gede Secondary School. All Rights Reserved.
          </p>
          <div className="text-gray-400 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
