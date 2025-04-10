
import { Button } from "@/components/ui/button";

const ContactCTA = () => {
  return (
    <section className="py-12 md:py-16 bg-school-primary text-white">
      <div className="container-custom text-center">
        <h2 className="heading-md mb-4">Ready to Join Our School?</h2>
        <p className="text-white/90 max-w-2xl mx-auto mb-8">
          Take the first step towards providing your child with an excellent education that prepares them for a bright future.
          Contact us today to schedule a tour or learn more about our admission process.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" className="bg-white text-school-primary hover:bg-school-light">
            Contact Us
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
            Admission Info
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
