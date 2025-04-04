
import { Phone, MessageSquare, MapPin, Check, Search } from 'lucide-react';
import { useState } from 'react';
import { Button } from "@/components/ui/button";

const serviceableAreas = [
  "Andheri", "Bandra", "Borivali", "Chembur", "Dadar", 
  "Goregaon", "Juhu", "Kandivali", "Khar", "Kurla",
  "Malad", "Powai", "Santacruz", "Vile Parle", "Worli"
];

const Serviceability = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showAllAreas, setShowAllAreas] = useState(false);
  
  const filteredAreas = serviceableAreas.filter(area => 
    area.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const displayedAreas = showAllAreas ? filteredAreas : filteredAreas.slice(0, 6);

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="flex justify-center">
          {/* Location Information */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">We are in Mumbai</h2>
            <p className="text-lg text-gray-600 mb-8">
              Bringing quality healthcare services to your doorstep across Mumbai.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button className="flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 text-white shadow-soft hover:shadow-hover py-6 flex-1">
                <Phone size={18} />
                <span>Call Us</span>
              </Button>
              <Button variant="outline" className="flex items-center justify-center gap-2 hover:bg-gray-50 border-gray-200 py-6 flex-1">
                <MessageSquare size={18} />
                <span>Chat Us</span>
              </Button>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-soft">
              <div className="flex items-center mb-6">
                <MapPin className="text-primary-500 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-gray-800">Serviceable Areas</h3>
              </div>
              
              
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                {displayedAreas.map((area, index) => (
                  <div key={index} className="flex items-center">
                    <Check size={16} className="text-primary-500 mr-2" />
                    <span className="text-gray-700">{area}</span>
                  </div>
                ))}
              </div>
              
              {filteredAreas.length > 6 && (
                <button 
                  className="text-primary-500 font-medium flex items-center"
                  onClick={() => setShowAllAreas(!showAllAreas)}
                >
                  {showAllAreas ? "Show less" : "Show more"}
                </button>
              )}
              
              <div className="mt-8 pt-6 border-t border-gray-100">
                <p className="text-gray-600 mb-4 text-center">Don't see your area? Contact us to check if your area is serviceable</p>
                <div className="flex flex-col sm:flex-row justify-center gap-3">
                  <Button variant="outline" className="flex items-center gap-2 border-gray-200 hover:bg-gray-50">
                    <Phone size={16} />
                    <span>Call Us</span>
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2 border-gray-200 hover:bg-gray-50">
                    <MessageSquare size={16} />
                    <span>WhatsApp Us</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Serviceability;
