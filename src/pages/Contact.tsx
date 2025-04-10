
import React from "react";
import Layout from "@/components/layout/Layout";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactMap from "@/components/contact/ContactMap";
import FAQ from "@/components/contact/FAQ";

const Contact = () => {
  return (
    <Layout>
      <ContactHero />
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-school-primary mb-6">Send Us a Message</h2>
                <ContactForm />
              </div>
            </div>
            <div>
              <div className="bg-school-light rounded-xl shadow-md p-6 md:p-8 h-full">
                <h2 className="text-2xl font-bold text-school-primary mb-6">Contact Information</h2>
                <ContactInfo />
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactMap />
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-school-primary">Frequently Asked Questions</h2>
            <FAQ />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
