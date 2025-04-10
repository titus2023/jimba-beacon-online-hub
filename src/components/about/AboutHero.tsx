
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-school-primary to-school-secondary overflow-hidden py-16 md:py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/images/pattern-bg.png')] opacity-10"></div>
      
      {/* Abstract Shapes */}
      <div className="absolute top-20 right-10 w-40 h-40 rounded-full bg-white opacity-10 animate-float"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 rounded-full bg-white opacity-5 animate-float animation-delay-2000"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <div className="inline-block px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm mb-6">
            <span className="text-white/90 text-sm font-medium">Established 1985</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">Discover Our Story</h1>
          <p className="text-xl opacity-90 mb-8 mx-auto">
            Jimba Gede Secondary School is committed to academic excellence, 
            character development, and preparing students for future success.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-school-primary hover:bg-school-light">
              Join Our Community
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Virtual Tour
            </Button>
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

export default AboutHero;
