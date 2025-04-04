
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 bg-white shadow-sm z-50">
      <div className="container-custom py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-primary-600">
              Curago
              <span className="text-gray-800"> LOGO</span>
            </h1>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">Home</a>
          <a href="#departments" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">Department</a>
          <a href="#doctors" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">Doctors</a>
          <a href="#appointment" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">Appointment</a>
          <a href="#faqs" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">FAQ</a>
          <a href="#about" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">About Us</a>
          <Button variant="default" className="bg-primary-600 hover:bg-primary-700">
            <a href="#contact">Contact Us</a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu}
            className="text-gray-700 hover:text-primary-600 focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <a href="#home" onClick={toggleMenu} className="text-gray-700 hover:text-primary-600 font-medium transition-colors px-4 py-2">Home</a>
            <a href="#departments" onClick={toggleMenu} className="text-gray-700 hover:text-primary-600 font-medium transition-colors px-4 py-2">Department</a>
            <a href="#doctors" onClick={toggleMenu} className="text-gray-700 hover:text-primary-600 font-medium transition-colors px-4 py-2">Doctors</a>
            <a href="#appointment" onClick={toggleMenu} className="text-gray-700 hover:text-primary-600 font-medium transition-colors px-4 py-2">Appointment</a>
            <a href="#faqs" onClick={toggleMenu} className="text-gray-700 hover:text-primary-600 font-medium transition-colors px-4 py-2">FAQ</a>
            <a href="#about" onClick={toggleMenu} className="text-gray-700 hover:text-primary-600 font-medium transition-colors px-4 py-2">About Us</a>
            <a href="#contact" onClick={toggleMenu} className="bg-primary-600 text-white px-4 py-2 rounded-md text-center font-medium">Contact Us</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
