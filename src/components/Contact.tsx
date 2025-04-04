
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Phone, Mail, MessageSquare, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, this would send the form data to a backend
    console.log("Contact form submitted:", formData);
    alert("Thank you for your message. We will get back to you soon!");
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="section-padding bg-primary-600 text-white">
      <div className="container-custom">
        <h2 className="section-title text-center text-white">Contact Us</h2>
        <p className="section-subtitle text-center text-primary-100">
          Get in touch with our team for any inquiries or assistance
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-700 p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Phone</h4>
                    <p className="text-primary-100">+91 1234567890</p>
                    <p className="text-primary-100">+91 9876543210</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-700 p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Email</h4>
                    <p className="text-primary-100">info@curago.com</p>
                    <p className="text-primary-100">support@curago.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-700 p-3 rounded-lg mr-4">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">WhatsApp</h4>
                    <p className="text-primary-100">+91 8765432109</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-primary-700 p-3 rounded-full hover:bg-primary-800 transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="bg-primary-700 p-3 rounded-full hover:bg-primary-800 transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="bg-primary-700 p-3 rounded-full hover:bg-primary-800 transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="bg-primary-700 p-3 rounded-full hover:bg-primary-800 transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <div className="bg-white text-gray-800 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Send us a Message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300"
                      placeholder="Your email address"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300"
                      placeholder="How can we help you?"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-primary-600 hover:bg-primary-700">
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
