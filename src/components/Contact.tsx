
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Phone, Mail, MessageSquare, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { supabase } from "@/lib/supabase";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      setIsSubmitting(true);
      
      const messageData = {
        ...formData,
        status: 'unread',
      };
      
      const { error } = await supabase
        .from('contact_messages')
        .insert([messageData]);
        
      if (error) throw error;
      
      toast({
        title: "Message sent",
        description: "Thank you for your message. We will get back to you soon!",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Failed to send message",
        description: "Please try again later",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">
            Get in touch with our team for any inquiries or assistance
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-gray-900">Get In Touch</h3>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="icon-box mr-5">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-800 mb-2">Phone</h4>
                    <p className="text-gray-600">+91 1234567890</p>
                    <p className="text-gray-600">+91 9876543210</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="icon-box mr-5">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-800 mb-2">Email</h4>
                    <p className="text-gray-600">info@curago.com</p>
                    <p className="text-gray-600">support@curago.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="icon-box mr-5">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-800 mb-2">WhatsApp</h4>
                    <p className="text-gray-600">+91 8765432109</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-gray-900">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="p-3 rounded-full text-gray-600 hover:text-primary-500 hover:bg-gray-100 transition-all">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="p-3 rounded-full text-gray-600 hover:text-primary-500 hover:bg-gray-100 transition-all">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="p-3 rounded-full text-gray-600 hover:text-primary-500 hover:bg-gray-100 transition-all">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="p-3 rounded-full text-gray-600 hover:text-primary-500 hover:bg-gray-100 transition-all">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <div className="bg-white p-8 rounded-xl shadow-soft">
              <h3 className="text-2xl font-semibold mb-8 text-gray-900">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300"
                    placeholder="Your email address"
                  />
                </div>
                
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300"
                    placeholder="How can we help you?"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full py-6 bg-primary-500 hover:bg-primary-600 text-white shadow-soft hover:shadow-hover"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin mr-2">●</span>
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
