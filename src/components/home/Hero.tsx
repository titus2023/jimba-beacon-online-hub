
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-school-primary to-school-secondary overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/pattern-bg.png')] opacity-10"></div>
      <div className="container-custom py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-white animate-slide-in">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Nurturing Excellence, Building Leaders
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-lg">
              Welcome to Jimba Gede Secondary School, where we provide quality education 
              that develops confident, innovative and responsible citizens.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-school-primary hover:bg-school-light">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Virtual Tour
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-md bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl animate-fade-in">
              {/* Placeholder for school image or graphic */}
              <div className="aspect-video bg-white/20 flex items-center justify-center">
                <div className="text-white text-lg">School Image</div>
              </div>
              <div className="p-6">
                <h3 className="text-white text-xl font-bold mb-2">Discover Jimba Gede</h3>
                <p className="text-white/80 mb-4">
                  A place of learning, growth, and opportunity for every student.
                </p>
                <a href="/about" className="text-white/90 hover:text-white flex items-center font-medium">
                  Explore our campus
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
