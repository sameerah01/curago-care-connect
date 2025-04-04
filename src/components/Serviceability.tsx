
import { Phone, MessageSquare, MapPin, Check } from 'lucide-react';
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
    <section className="section-padding bg-blue-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Location Information */}
          <div className="flex flex-col justify-center">
            <h2 className="section-title">We are in Mumbai</h2>
            <p className="text-lg text-gray-600 mb-6">
              Bringing quality healthcare services to your doorstep across Mumbai.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button className="flex items-center justify-center gap-2 btn-primary flex-1">
                <Phone size={18} />
                <span>Call Us</span>
              </Button>
              <Button className="flex items-center justify-center gap-2 btn-secondary flex-1">
                <MessageSquare size={18} />
                <span>Chat Us</span>
              </Button>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center mb-4">
                <MapPin className="text-primary-600 mr-2" />
                <h3 className="text-xl font-bold">Serviceable Areas</h3>
              </div>
              
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Search for your area..."
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {displayedAreas.map((area, index) => (
                  <div key={index} className="flex items-center">
                    <Check size={16} className="text-green-500 mr-1" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
              
              {filteredAreas.length > 6 && (
                <button 
                  className="text-primary-600 mt-4 font-medium"
                  onClick={() => setShowAllAreas(!showAllAreas)}
                >
                  {showAllAreas ? "Show less" : "Show more"}
                </button>
              )}
              
              <div className="mt-6 text-center">
                <p className="text-gray-600 mb-2">Don't see your area? Call now to check if your area is serviceable</p>
                <div className="flex flex-col sm:flex-row justify-center gap-3">
                  <Button variant="outline" className="flex items-center gap-2">
                    <Phone size={16} />
                    <span>Call Us</span>
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <MessageSquare size={16} />
                    <span>WhatsApp Us</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Map/Image Placeholder */}
          <div className="bg-gray-200 rounded-xl h-[400px] md:h-auto flex items-center justify-center">
            <div className="text-center">
              <MapPin size={48} className="text-gray-400 mx-auto mb-2" />
              <p className="text-lg text-gray-600">Map of Mumbai and Serviceable Areas</p>
              <p className="text-sm text-gray-500">(Map image would go here)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Serviceability;
