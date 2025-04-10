
import React from "react";
import { Target, BookOpen, User, Award } from "lucide-react";

const Vision = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="heading-md mb-4">Our Vision & Mission</h2>
          <p className="text-gray-600">
            At Jimba Gede Secondary School, we are guided by clear principles that shape our approach to education 
            and our commitment to developing well-rounded individuals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <div className="w-14 h-14 rounded-full bg-school-light flex items-center justify-center mb-6">
              <Target className="h-7 w-7 text-school-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
            <p className="text-gray-700 mb-4">
              To be a leading secondary school that nurtures academic excellence, character development, 
              and innovative thinking in a supportive and inclusive environment.
            </p>
            <p className="text-gray-700">
              We envision our graduates as confident, responsible citizens who contribute positively to 
              society and excel in their chosen paths.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <div className="w-14 h-14 rounded-full bg-school-light flex items-center justify-center mb-6">
              <BookOpen className="h-7 w-7 text-school-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-700 mb-4">
              To provide quality education that develops the intellectual, physical, social, and moral 
              capabilities of each student.
            </p>
            <p className="text-gray-700">
              We are committed to creating a stimulating learning environment where students can discover 
              their potential and develop the skills needed for lifelong learning and success.
            </p>
          </div>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <div className="w-14 h-14 rounded-full bg-school-light flex items-center justify-center mb-6">
              <User className="h-7 w-7 text-school-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Core Values</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-school-primary/10 flex items-center justify-center text-school-primary mr-3 mt-0.5">•</span>
                <span><strong>Excellence:</strong> Striving for the highest standards in all endeavors</span>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-school-primary/10 flex items-center justify-center text-school-primary mr-3 mt-0.5">•</span>
                <span><strong>Integrity:</strong> Acting with honesty, ethics, and responsibility</span>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-school-primary/10 flex items-center justify-center text-school-primary mr-3 mt-0.5">•</span>
                <span><strong>Respect:</strong> Valuing diversity and treating all with dignity</span>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-school-primary/10 flex items-center justify-center text-school-primary mr-3 mt-0.5">•</span>
                <span><strong>Innovation:</strong> Embracing creativity and forward thinking</span>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-school-primary/10 flex items-center justify-center text-school-primary mr-3 mt-0.5">•</span>
                <span><strong>Service:</strong> Contributing positively to our community</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <div className="w-14 h-14 rounded-full bg-school-light flex items-center justify-center mb-6">
              <Award className="h-7 w-7 text-school-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Educational Philosophy</h3>
            <p className="text-gray-700 mb-4">
              We believe that every student has unique talents and abilities that can be nurtured through 
              a well-rounded education that balances academic rigor with character development.
            </p>
            <p className="text-gray-700 mb-4">
              Our educational approach emphasizes:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-school-primary/10 flex items-center justify-center text-school-primary mr-3 mt-0.5">•</span>
                <span>Student-centered learning approaches</span>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-school-primary/10 flex items-center justify-center text-school-primary mr-3 mt-0.5">•</span>
                <span>Development of critical thinking and problem-solving skills</span>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-school-primary/10 flex items-center justify-center text-school-primary mr-3 mt-0.5">•</span>
                <span>Balance of academic, athletic, and artistic pursuits</span>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-school-primary/10 flex items-center justify-center text-school-primary mr-3 mt-0.5">•</span>
                <span>Community involvement and global awareness</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
