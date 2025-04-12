
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Users, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-school-primary via-school-primary to-school-secondary min-h-[85vh] flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/images/pattern-bg.png')] opacity-10"></div>
      
      {/* Abstract Shapes */}
      <div className="absolute top-20 right-10 w-40 h-40 rounded-full bg-school-secondary opacity-20 animate-float"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 rounded-full bg-school-accent opacity-10 animate-float animation-delay-2000"></div>
      
      <div className="container-custom relative z-10 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white animate-slide-in">
            <div className="inline-block px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm mb-6">
              <span className="text-white/90 text-sm font-medium">Leading Education in Nigeria</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Shaping <span className="text-school-light">Tomorrow's</span> Leaders Today
            </h1>
            <p className="text-xl opacity-90 mb-8 max-w-lg">
              Jimba Gede Secondary School offers a transformative education that develops 
              confident, innovative and responsible global citizens.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild className="bg-white text-school-primary hover:bg-school-light transition-all duration-300 shadow-md">
                <Link to="/academics">
                  Explore Programs
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 transition-all duration-300">
                Virtual Tour
              </Button>
            </div>
            
            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center mb-1">
                  <Users className="h-4 w-4 mr-2 text-school-secondary" />
                  <span className="text-sm text-white/80">Student Body</span>
                </div>
                <span className="text-2xl md:text-3xl font-bold">1,200+</span>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center mb-1">
                  <Calendar className="h-4 w-4 mr-2 text-school-secondary" />
                  <span className="text-sm text-white/80">Est. Year</span>
                </div>
                <span className="text-2xl md:text-3xl font-bold">1985</span>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center mb-1">
                  <GraduationCap className="h-4 w-4 mr-2 text-school-secondary" />
                  <span className="text-sm text-white/80">Graduation Rate</span>
                </div>
                <span className="text-2xl md:text-3xl font-bold">98%</span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="w-full max-w-md bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl animate-fade-in">
              {/* Real school image */}
              <div className="aspect-[4/3] bg-gradient-to-br from-white/5 to-white/20 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581673213381-9f71525fae72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFmcmljYW4lMjBzY2hvb2x8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" 
                  alt="Students at Jimba Gede Secondary School" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 border-t border-white/10">
                <h3 className="text-white text-xl font-bold mb-2">Excellence in Education</h3>
                <p className="text-white/80 mb-4">
                  Our state-of-the-art facilities and dedicated faculty create the perfect environment for academic success.
                </p>
                <Link to="/about" className="text-white flex items-center font-medium hover:text-school-light transition-colors">
                  Discover our campus
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Wave Pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-16">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-full">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L48,106.7C96,117,192,139,288,133.3C384,128,480,96,576,90.7C672,85,768,107,864,112C960,117,1056,107,1152,101.3C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
