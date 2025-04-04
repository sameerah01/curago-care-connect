
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-b from-white to-blue-50 section-padding">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 animate-slide-in">
            Welcome to <span className="text-primary-600">Curago</span>
          </h1>
          
          <div className="w-24 h-1 bg-gradient-to-r from-primary-300 to-primary-600 rounded-full mb-8"></div>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
            Your trusted healthcare partner in Mumbai. We provide high-quality healthcare services with experienced doctors across multiple specializations.
          </p>
          
          <Button className="btn-primary shadow-lg shadow-primary-100">
            Request a call back
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
