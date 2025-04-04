
import { Button } from "@/components/ui/button";
import { Phone, Heart, Brain, Stethoscope, Baby, Eye, Bone } from 'lucide-react';

const departments = [
  {
    name: "Cardiology",
    icon: <Heart className="h-8 w-8 text-primary-500" />,
    description: "Specialized care for heart-related conditions and cardiovascular health."
  },
  {
    name: "Neurology",
    icon: <Brain className="h-8 w-8 text-primary-500" />,
    description: "Expert diagnosis and treatment for neurological disorders."
  },
  {
    name: "Pulmonology",
    icon: <Stethoscope className="h-8 w-8 text-primary-500" />,
    description: "Comprehensive care for respiratory conditions and lung health."
  },
  {
    name: "Pediatrics",
    icon: <Baby className="h-8 w-8 text-primary-500" />,
    description: "Dedicated healthcare for infants, children, and adolescents."
  },
  {
    name: "Ophthalmology",
    icon: <Eye className="h-8 w-8 text-primary-500" />,
    description: "Specialized care for eye-related conditions and vision health."
  },
  {
    name: "Orthopedics",
    icon: <Bone className="h-8 w-8 text-primary-500" />,
    description: "Expert treatment for bone and joint-related conditions."
  }
];

const Departments = () => {
  return (
    <section id="departments" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Medical Specializations</h2>
          <p className="section-subtitle">
            Our specialized departments are staffed with experienced professionals to provide you with the best healthcare services
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((department, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-soft hover:shadow-hover transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex items-center mb-6">
                <div className="icon-box mr-4">
                  {department.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{department.name}</h3>
              </div>
              
              <p className="text-gray-600 flex-grow mb-8">
                {department.description}
              </p>
              
              <div className="flex flex-col gap-3 mt-auto">
                <Button variant="outline" className="w-full justify-center hover:bg-gray-50">
                  Available Doctors
                </Button>
                <Button className="w-full justify-center bg-primary-500 hover:bg-primary-600 flex items-center gap-2 shadow-soft hover:shadow-hover">
                  <Phone size={16} />
                  <span>Request a call back</span>
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="link" className="text-primary-500 text-lg font-medium">
            View All Departments
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Departments;
