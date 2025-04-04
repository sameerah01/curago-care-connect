
import { ChevronRight, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-gray-900">Curago</h3>
            <p className="text-gray-600 mb-6">
              Providing quality healthcare services to Mumbai residents, ensuring better health and wellbeing for all.
            </p>
            <div className="flex items-center text-gray-600">
              <MapPin size={18} className="mr-2 text-primary-500" />
              <p>Mumbai, Maharashtra, India</p>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-gray-900">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a href="#home" className="text-gray-600 hover:text-primary-500 transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-2 text-primary-500" />
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#departments" className="text-gray-600 hover:text-primary-500 transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-2 text-primary-500" />
                  <span>Departments</span>
                </a>
              </li>
              <li>
                <a href="#doctors" className="text-gray-600 hover:text-primary-500 transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-2 text-primary-500" />
                  <span>Doctors</span>
                </a>
              </li>
              <li>
                <a href="#appointment" className="text-gray-600 hover:text-primary-500 transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-2 text-primary-500" />
                  <span>Appointment</span>
                </a>
              </li>
              <li>
                <a href="#faqs" className="text-gray-600 hover:text-primary-500 transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-2 text-primary-500" />
                  <span>FAQs</span>
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-gray-900">Contact Info</h3>
            <ul className="space-y-5">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-primary-500 mr-3 mt-1" />
                <div>
                  <p className="text-gray-900 font-medium">Call Us</p>
                  <p className="text-gray-600">+91 1234567890</p>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-primary-500 mr-3 mt-1" />
                <div>
                  <p className="text-gray-900 font-medium">Email Us</p>
                  <p className="text-gray-600">info@curago.com</p>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary-500 mr-3 mt-1" />
                <div>
                  <p className="text-gray-900 font-medium">Location</p>
                  <p className="text-gray-600">Mumbai, Maharashtra, India</p>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Operating Hours */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-gray-900">Operating Hours</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>9:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span>9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span>10:00 AM - 4:00 PM</span>
              </li>
              <li className="mt-6 text-primary-500 font-semibold">
                24/7 Emergency Service Available
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="border-t border-gray-200 py-6">
        <div className="container-custom">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} Curago. All rights reserved. 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
