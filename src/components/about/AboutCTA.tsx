
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const AboutCTA = () => {
  return (
    <section className="relative py-16 bg-gradient-to-r from-school-primary to-school-secondary text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/images/pattern-bg.png')] opacity-10"></div>
      
      {/* Abstract Shapes */}
      <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-white opacity-5 animate-float"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-white opacity-10 animate-float animation-delay-2000"></div>
      
      <div className="container-custom relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the Jimba Gede Community</h2>
        <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg">
          We invite you to be part of our vibrant school community. Schedule a visit to learn more about our 
          programs, meet our teachers, and see our facilities firsthand.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" className="bg-white text-school-primary hover:bg-school-light shadow-lg transition-all duration-300">
            Schedule a Visit
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 transition-all duration-300">
            Admission Process
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
