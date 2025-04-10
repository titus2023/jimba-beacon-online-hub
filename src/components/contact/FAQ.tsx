
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is the admission process for new students?",
    answer: "Our admission process includes an application form, entrance examination, and an interview. Applications typically open in January for the following academic year. Please contact our admissions office for specific dates and requirements."
  },
  {
    question: "What are the school hours?",
    answer: "School hours are from 8:00 AM to 3:00 PM, Monday through Friday. Students are expected to arrive by 7:45 AM for the morning assembly."
  },
  {
    question: "Does the school provide transportation services?",
    answer: "Yes, we offer transportation services for students in select areas. Please inquire with our administrative office for routes, schedules, and fees."
  },
  {
    question: "What extracurricular activities are available?",
    answer: "We offer a wide range of extracurricular activities including sports teams, debate club, science club, arts and crafts, music, drama, and community service programs."
  },
  {
    question: "How does the school communicate with parents?",
    answer: "We maintain regular communication with parents through our online portal, quarterly newsletters, parent-teacher conferences, and email updates. Emergency notifications are sent via text message."
  },
  {
    question: "What is your school's approach to discipline?",
    answer: "We emphasize positive reinforcement and character development. Our disciplinary approach focuses on teaching responsibility, respect, and appropriate behavior through clear guidelines and consistent consequences."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 md:py-16">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="heading-md mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our school, programs, and policies. 
            If you don't see your question here, please contact us directly.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  className="w-full flex justify-between items-center p-5 text-left bg-white hover:bg-gray-50 transition-colors"
                  onClick={() => toggleQuestion(index)}
                >
                  <h3 className="font-medium text-gray-800">{faq.question}</h3>
                  <ChevronDown 
                    className={`h-5 w-5 text-gray-500 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} 
                  />
                </button>
                {openIndex === index && (
                  <div className="p-5 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <p className="text-gray-700 mb-4">Still have questions?</p>
            <a 
              href="mailto:info@jimbagede.edu" 
              className="text-school-primary hover:text-school-secondary font-medium"
            >
              Contact us for more information
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
