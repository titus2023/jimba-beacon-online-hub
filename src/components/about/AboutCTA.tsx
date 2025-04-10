
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const AboutCTA = () => {
  return (
    <section className="py-16 bg-school-primary text-white">
      <div className="container-custom text-center">
        <h2 className="heading-md mb-4">Join the Jimba Gede Community</h2>
        <p className="text-white/90 max-w-2xl mx-auto mb-8">
          We invite you to be part of our vibrant school community. Schedule a visit to learn more about our 
          programs, meet our teachers, and see our facilities firsthand.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" className="bg-white text-school-primary hover:bg-school-light">
            Schedule a Visit
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
            Admission Process
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
