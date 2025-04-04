
import { Clock, UserCheck, Medal, Stethoscope } from 'lucide-react';

const features = [
  {
    icon: <UserCheck className="h-12 w-12 text-primary-600 mb-4" />,
    title: "Experienced Doctors",
    description: "Our team consists of highly qualified and experienced medical professionals dedicated to your wellbeing."
  },
  {
    icon: <Clock className="h-12 w-12 text-primary-600 mb-4" />,
    title: "24/7 Service",
    description: "We provide round-the-clock healthcare services to ensure you get care whenever you need it."
  },
  {
    icon: <Medal className="h-12 w-12 text-primary-600 mb-4" />,
    title: "Quality Care",
    description: "We're committed to providing high-quality healthcare with personalized attention to every patient."
  },
  {
    icon: <Stethoscope className="h-12 w-12 text-primary-600 mb-4" />,
    title: "Modern Equipment",
    description: "Our facilities are equipped with the latest medical technology for accurate diagnosis and treatment."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="section-title text-center">Why Choose Curago</h2>
        <p className="section-subtitle text-center">Discover the advantages of choosing our healthcare services</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="card-basic flex flex-col items-center text-center card-hover"
            >
              {feature.icon}
              <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
