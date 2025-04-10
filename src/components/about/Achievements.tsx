
import React from "react";
import { Award, Trophy, Users, BookOpen, Medal } from "lucide-react";

const achievements = [
  {
    year: "2023",
    title: "National Science Competition Champions",
    description: "Our students won first place in the National Secondary Schools Science Competition.",
    icon: Trophy
  },
  {
    year: "2022",
    title: "100% University Admission Rate",
    description: "All our graduating students secured admission into tertiary institutions.",
    icon: BookOpen
  },
  {
    year: "2021",
    title: "Regional Sports Champions",
    description: "Our school won the regional inter-school sports competition for the third consecutive year.",
    icon: Medal
  },
  {
    year: "2020",
    title: "Best School in Community Service",
    description: "Recognized for outstanding community service projects led by our students.",
    icon: Users
  },
  {
    year: "2019",
    title: "Excellence in Educational Standards",
    description: "Awarded the Certificate of Excellence in Educational Standards by the Ministry of Education.",
    icon: Award
  }
];

const stats = [
  { value: "35+", label: "Years of Excellence" },
  { value: "5,000+", label: "Alumni Worldwide" },
  { value: "100%", label: "University Placement" },
  { value: "50+", label: "Academic Awards" }
];

const Achievements = () => {
  return (
    <section className="section-padding bg-gray-50" id="achievements">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-md mb-4">Our Achievements</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Over the years, Jimba Gede Secondary School has built a strong reputation for excellence, 
            reflected in numerous achievements and recognitions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {achievements.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6"
                >
                  <div className="shrink-0">
                    <div className="w-16 h-16 rounded-full bg-school-light flex items-center justify-center">
                      <item.icon className="h-8 w-8 text-school-primary" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                      <span className="text-sm bg-school-light text-school-primary px-2 py-1 rounded-full">
                        {item.year}
                      </span>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-semibold text-lg mb-4">Key Statistics</h3>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 border border-gray-100 rounded-md">
                    <div className="text-2xl md:text-3xl font-bold text-school-primary mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-semibold text-lg mb-4">Academic Performance</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium">University Admission Rate</span>
                    <span className="text-sm font-medium">100%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-school-primary h-2.5 rounded-full w-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium">National Exam Pass Rate</span>
                    <span className="text-sm font-medium">98%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-school-primary h-2.5 rounded-full w-[98%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium">Advanced Placement Success</span>
                    <span className="text-sm font-medium">92%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-school-primary h-2.5 rounded-full w-[92%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium">Science & Math Competitions</span>
                    <span className="text-sm font-medium">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-school-primary h-2.5 rounded-full w-[85%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
