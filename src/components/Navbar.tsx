
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`sticky top-0 bg-white z-50 transition-all duration-300 ${isScrolled ? 'shadow-soft' : 'border-b border-gray-100'}`}>
      <div className="container-custom py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <h1 className="text-2xl font-semibold text-gray-900">
              Curago
            </h1>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          <a href="#home" className="text-gray-700 hover:text-primary-500 font-medium transition-colors">Home</a>
          <a href="#departments" className="text-gray-700 hover:text-primary-500 font-medium transition-colors">Department</a>
          <a href="#doctors" className="text-gray-700 hover:text-primary-500 font-medium transition-colors">Doctors</a>
          <a href="#appointment" className="text-gray-700 hover:text-primary-500 font-medium transition-colors">Appointment</a>
          <a href="#faqs" className="text-gray-700 hover:text-primary-500 font-medium transition-colors">FAQ</a>
          <a href="#about" className="text-gray-700 hover:text-primary-500 font-medium transition-colors">About Us</a>
          <Button className="bg-primary-500 hover:bg-primary-600 text-white font-medium shadow-soft hover:shadow-hover">
            <a href="#contact">Contact Us</a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu}
            className="text-gray-700 hover:text-primary-500 focus:outline-none p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <a href="#home" onClick={toggleMenu} className="text-gray-700 hover:text-primary-500 font-medium transition-colors px-4 py-2">Home</a>
            <a href="#departments" onClick={toggleMenu} className="text-gray-700 hover:text-primary-500 font-medium transition-colors px-4 py-2">Department</a>
            <a href="#doctors" onClick={toggleMenu} className="text-gray-700 hover:text-primary-500 font-medium transition-colors px-4 py-2">Doctors</a>
            <a href="#appointment" onClick={toggleMenu} className="text-gray-700 hover:text-primary-500 font-medium transition-colors px-4 py-2">Appointment</a>
            <a href="#faqs" onClick={toggleMenu} className="text-gray-700 hover:text-primary-500 font-medium transition-colors px-4 py-2">FAQ</a>
            <a href="#about" onClick={toggleMenu} className="text-gray-700 hover:text-primary-500 font-medium transition-colors px-4 py-2">About Us</a>
            <a href="#contact" onClick={toggleMenu} className="bg-primary-500 text-white px-4 py-3 rounded-lg text-center font-medium shadow-soft">Contact Us</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
