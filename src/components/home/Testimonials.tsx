
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "Jimba Gede Secondary School has provided my child with excellent education and mentorship. The teachers are dedicated and the environment is conducive for learning.",
    name: "Mrs. Adebayo",
    role: "Parent",
  },
  {
    id: 2,
    quote: "I've seen tremendous growth in my academic performance and confidence since joining this school. The teachers are supportive and always ready to help.",
    name: "Chinedu Okonkwo",
    role: "Student",
  },
  {
    id: 3,
    quote: "As a former student who is now thriving in university, I can attribute much of my success to the foundation laid at Jimba Gede Secondary School.",
    name: "Amina Ibrahim",
    role: "Alumni",
  },
];

const Testimonials = () => {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-md mb-4">What People Say About Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it – hear from our community of parents, students, and alumni 
            about their experiences with Jimba Gede Secondary School.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <Quote className="h-8 w-8 text-school-secondary mb-4" />
              <p className="text-gray-700 mb-6 italic">"{item.quote}"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                  <span className="text-gray-500 font-medium">{item.name.charAt(0)}</span>
                </div>
                <div>
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
