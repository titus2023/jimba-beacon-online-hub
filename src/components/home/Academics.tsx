
import { Button } from "@/components/ui/button";
import { TrendingUp, FileText, Calendar, Award } from "lucide-react";

const Academics = () => {
  return (
    <section className="py-12 md:py-16 bg-school-light">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-md mb-4">Academic Excellence</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our academic programs are designed to challenge students intellectually and prepare them 
            for higher education and future careers through rigorous and engaging curriculum.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <TrendingUp className="mr-2 h-5 w-5 text-school-primary" />
                Our Academic Performance
              </h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">WAEC Pass Rate</span>
                    <span className="font-medium">95%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-school-primary h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">University Admission Rate</span>
                    <span className="font-medium">92%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-school-primary h-2 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">National Competition Awards</span>
                    <span className="font-medium">87%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-school-primary h-2 rounded-full" style={{ width: '87%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Sports Achievements</span>
                    <span className="font-medium">90%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-school-primary h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 border-t border-gray-100">
              <div className="flex items-center gap-2 mb-4">
                <Award className="h-5 w-5 text-school-secondary" />
                <h4 className="font-semibold">Recent Achievements</h4>
              </div>
              <ul className="space-y-2">
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span className="text-gray-700">1st place in the Regional Science Competition</span>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span className="text-gray-700">Best School Award in National Mathematics Olympiad</span>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span className="text-gray-700">Outstanding Performance in Arts & Culture Festival</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                  <FileText className="h-6 w-6 text-school-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Curriculum Overview</h3>
                  <p className="text-gray-600 mb-4">
                    Our curriculum is comprehensive, challenging and designed to develop critical thinking,
                    problem-solving abilities and creativity in students.
                  </p>
                  <Button variant="outline" size="sm">
                    View Curriculum
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                  <Calendar className="h-6 w-6 text-school-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Academic Calendar</h3>
                  <p className="text-gray-600 mb-4">
                    Stay updated with important dates including term schedules, examination periods, 
                    and school events to plan effectively.
                  </p>
                  <Button variant="outline" size="sm">
                    Download Calendar
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-center md:text-left">
              <Button className="bg-school-primary hover:bg-school-secondary">
                Explore All Academic Programs
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academics;
