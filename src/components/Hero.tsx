
import { Button } from "@/components/ui/button";
import { Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-white py-20 md:py-28">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <span className="text-primary-500 font-medium mb-2">Healthcare Simplified</span>
          <h1 className="mb-6">
            <span className="text-gray-700 font-normal block mb-2">Welcome to</span>
            <span className="text-gray-900 font-bold">Curago</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl">
            Your trusted healthcare partner in Mumbai. We provide high-quality healthcare services with experienced doctors across multiple specializations.
          </p>
          
          <Button className="px-8 py-6 text-lg bg-primary-500 hover:bg-primary-600 text-white shadow-soft hover:shadow-hover flex items-center gap-2">
            <Phone className="h-5 w-5" />
            Request a call back
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
