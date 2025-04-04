
import { UserCheck, Clock, Medal, Stethoscope } from 'lucide-react';

const features = [
  {
    icon: <UserCheck className="h-8 w-8 text-primary-500" />,
    title: "Experienced Doctors",
    description: "Our team consists of highly qualified and experienced medical professionals dedicated to your wellbeing."
  },
  {
    icon: <Clock className="h-8 w-8 text-primary-500" />,
    title: "24/7 Service",
    description: "We provide round-the-clock healthcare services to ensure you get care whenever you need it."
  },
  {
    icon: <Medal className="h-8 w-8 text-primary-500" />,
    title: "Quality Care",
    description: "We're committed to providing high-quality healthcare with personalized attention to every patient."
  },
  {
    icon: <Stethoscope className="h-8 w-8 text-primary-500" />,
    title: "Modern Equipment",
    description: "Our facilities are equipped with the latest medical technology for accurate diagnosis and treatment."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Why Choose Curago</h2>
          <p className="section-subtitle">Discover the advantages of choosing our healthcare services</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-soft hover:shadow-hover transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="icon-box mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
