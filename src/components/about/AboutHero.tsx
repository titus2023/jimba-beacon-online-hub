
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-school-primary to-school-secondary overflow-hidden py-16 md:py-20">
      <div className="absolute inset-0 bg-[url('/images/pattern-bg.png')] opacity-10"></div>
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="heading-lg mb-6">About Our School</h1>
          <p className="text-xl opacity-90 mb-8">
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
    </section>
  );
};

export default AboutHero;
