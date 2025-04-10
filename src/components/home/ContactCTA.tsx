
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";

const ContactCTA = () => {
  return (
    <section className="relative py-16 bg-gradient-to-r from-school-primary to-school-secondary text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/images/pattern-bg.png')] opacity-10"></div>
      
      {/* Abstract Shapes */}
      <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-white opacity-5 animate-float"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-white opacity-10 animate-float animation-delay-2000"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our School?</h2>
          <p className="text-white/90 text-lg mb-8">
            Take the first step towards providing your child with an excellent education that prepares them for a bright future.
            Contact us today to schedule a tour or learn more about our admission process.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-5 py-3">
              <PhoneCall className="text-white mr-3" size={20} />
              <a href="tel:+2341234567890" className="text-white hover:text-school-light transition-colors">+234 123 456 7890</a>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-5 py-3">
              <Mail className="text-white mr-3" size={20} />
              <a href="mailto:info@jimbagede.edu" className="text-white hover:text-school-light transition-colors">info@jimbagede.edu</a>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild className="bg-white text-school-primary hover:bg-school-light shadow-lg transition-all duration-300">
              <Link to="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 transition-all duration-300">
              Admission Info
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
