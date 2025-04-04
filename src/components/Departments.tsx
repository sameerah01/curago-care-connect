
import { Button } from "@/components/ui/button";
import { Phone, Heart, Brain, Stethoscope, Baby, Eye, Bone } from 'lucide-react';

const departments = [
  {
    name: "Cardiology",
    icon: <Heart className="h-10 w-10 text-primary-600" />,
    description: "Specialized care for heart-related conditions and cardiovascular health."
  },
  {
    name: "Neurology",
    icon: <Brain className="h-10 w-10 text-primary-600" />,
    description: "Expert diagnosis and treatment for neurological disorders."
  },
  {
    name: "Pulmonology",
    icon: <Stethoscope className="h-10 w-10 text-primary-600" />,
    description: "Comprehensive care for respiratory conditions and lung health."
  },
  {
    name: "Pediatrics",
    icon: <Baby className="h-10 w-10 text-primary-600" />,
    description: "Dedicated healthcare for infants, children, and adolescents."
  },
  {
    name: "Ophthalmology",
    icon: <Eye className="h-10 w-10 text-primary-600" />,
    description: "Specialized care for eye-related conditions and vision health."
  },
  {
    name: "Orthopedics",
    icon: <Bone className="h-10 w-10 text-primary-600" />,
    description: "Expert treatment for bone and joint-related conditions."
  }
];

const Departments = () => {
  return (
    <section id="departments" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="section-title text-center">Departments</h2>
        <p className="section-subtitle text-center">
          Our specialized departments are staffed with experienced professionals to provide you with the best healthcare services
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((department, index) => (
            <div 
              key={index} 
              className="card-basic flex flex-col h-full card-hover"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary-50 rounded-lg mr-3">
                  {department.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800">{department.name}</h3>
              </div>
              
              <p className="text-gray-600 flex-grow mb-6">
                {department.description}
              </p>
              
              <div className="flex flex-col gap-2 mt-auto">
                <Button variant="outline" className="w-full justify-center">
                  Available Doctors
                </Button>
                <Button className="w-full justify-center bg-primary-600 hover:bg-primary-700 flex items-center gap-2">
                  <Phone size={16} />
                  <span>Request a call back</span>
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button variant="link" className="text-primary-600 text-lg">
            View All Departments
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Departments;
