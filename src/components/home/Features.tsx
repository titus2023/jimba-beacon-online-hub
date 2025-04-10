
import { Award, BookOpen, Users, Lightbulb, GraduationCap } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Quality Education",
    description: "Our comprehensive curriculum is designed to foster academic excellence and critical thinking skills."
  },
  {
    icon: Users,
    title: "Experienced Teachers",
    description: "Our dedicated team of educators brings expertise and passion to create an engaging learning environment."
  },
  {
    icon: Award,
    title: "Extra-Curricular Activities",
    description: "We offer diverse programs to develop well-rounded individuals with talents beyond academics."
  },
  {
    icon: Lightbulb,
    title: "Modern Facilities",
    description: "Our school is equipped with state-of-the-art facilities to enhance the learning experience."
  },
  {
    icon: GraduationCap,
    title: "University Preparation",
    description: "We pride ourselves on our track record of students gaining admissions to top universities."
  }
];

const Features = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="heading-md mb-4">Why Choose Jimba Gede</h2>
          <p className="text-gray-600">
            At Jimba Gede Secondary School, we are committed to providing a world-class education that 
            prepares students for future success through our unique approach and facilities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="card-school p-6 flex flex-col items-start">
              <div className="w-12 h-12 rounded-full bg-school-light flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-school-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
