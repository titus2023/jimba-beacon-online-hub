
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const StaffCTA = () => {
  return (
    <section className="py-12 md:py-16 bg-school-primary text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
          <p className="text-lg mb-8 opacity-90">
            We're always looking for talented educators and staff members who are passionate about 
            making a difference in students' lives. Explore our current openings and become part of 
            our community.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <a href="mailto:careers@jimbagede.edu">Email Careers</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StaffCTA;
