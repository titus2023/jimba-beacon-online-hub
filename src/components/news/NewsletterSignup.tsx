
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MailIcon } from "lucide-react";

const NewsletterSignup = () => {
  return (
    <section className="py-12 md:py-16 bg-school-primary text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <MailIcon className="h-12 w-12 mx-auto mb-4 opacity-85" />
          <h2 className="heading-lg mb-4">Subscribe to Our Newsletter</h2>
          <p className="mb-8 opacity-85">
            Stay informed about the latest news, events, and important announcements from Jimba Gede Secondary School.
          </p>
          
          <form className="flex flex-col md:flex-row gap-3 max-w-lg mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email address" 
              className="bg-white/20 border-white/30 placeholder:text-white/70 text-white"
              required
            />
            <Button className="bg-white text-school-primary hover:bg-white/90 hover:text-school-secondary">
              Subscribe
            </Button>
          </form>
          
          <p className="mt-4 text-sm opacity-70">
            We respect your privacy and will never share your information.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
