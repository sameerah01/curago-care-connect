
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { supabase } from "@/lib/supabase";
import { Doctor } from "@/types/supabase";
import { useToast } from "@/components/ui/use-toast";

const Doctors = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [openModal, setOpenModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        setIsLoading(true);
        const { data, error } = await supabase
          .from('doctors')
          .select('*')
          .eq('is_active', true)
          .order('name');
          
        if (error) throw error;
        
        setDoctors(data || []);
      } catch (error) {
        console.error('Error fetching doctors:', error);
        toast({
          title: "Failed to load doctors",
          description: "Please try again later",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchDoctors();
  }, [toast]);
  
  const itemsPerPage = 3;
  const maxIndex = Math.max(0, doctors.length - itemsPerPage);
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
  };
  
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };
  
  const handleDoctorClick = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
    setOpenModal(true);
  };
  
  return (
    <section id="doctors" className="section-padding bg-blue-50">
      <div className="container-custom">
        <h2 className="section-title text-center">Our Doctors</h2>
        <p className="section-subtitle text-center">
          Meet our team of experienced healthcare professionals dedicated to providing you with exceptional care
        </p>
        
        {isLoading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
          </div>
        ) : doctors.length === 0 ? (
          <p className="text-center text-gray-600 py-12">No doctors available at the moment.</p>
        ) : (
          <div className="relative">
            {/* Carousel Navigation */}
            <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 z-10">
              <button 
                className={`p-2 rounded-full bg-white shadow-md ${currentIndex === 0 ? 'text-gray-300 cursor-not-allowed' : 'text-primary-600 hover:bg-primary-50'}`}
                onClick={handlePrev}
                disabled={currentIndex === 0}
              >
                <ChevronLeft size={24} />
              </button>
            </div>
            
            <div className="overflow-hidden">
              <div 
                className="flex transition-all duration-300 ease-in-out" 
                style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
              >
                {doctors.map((doctor) => (
                  <div 
                    key={doctor.id} 
                    className="w-full sm:w-1/2 lg:w-1/3 px-4 flex-shrink-0"
                    style={{ minWidth: `${100 / itemsPerPage}%` }}
                  >
                    <div 
                      className="card-basic h-full flex flex-col card-hover cursor-pointer"
                      onClick={() => handleDoctorClick(doctor)}
                    >
                      <div className="mb-4 bg-gray-200 rounded-lg h-48 overflow-hidden">
                        <img 
                          src={doctor.image} 
                          alt={doctor.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-1">{doctor.name}</h3>
                      <p className="text-primary-600 font-medium mb-2">{doctor.specialty}</p>
                      <div className="flex items-center mb-4">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star 
                              key={star} 
                              size={16} 
                              className={star <= doctor.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-200"}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-500 ml-2">({doctor.review_count}+ reviews)</span>
                      </div>
                      <p className="text-gray-600 mb-4 flex-grow">Experience: {doctor.experience}</p>
                      <Button className="w-full bg-primary-600 hover:bg-primary-700 mt-auto">
                        View Profile
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
              <button 
                className={`p-2 rounded-full bg-white shadow-md ${currentIndex >= maxIndex ? 'text-gray-300 cursor-not-allowed' : 'text-primary-600 hover:bg-primary-50'}`}
                onClick={handleNext}
                disabled={currentIndex >= maxIndex}
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        )}
        
        {/* Doctor Details Modal */}
        <Dialog open={openModal} onOpenChange={setOpenModal}>
          {selectedDoctor && (
            <DialogContent className="sm:max-w-lg">
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedDoctor.name}</DialogTitle>
                <DialogDescription className="text-primary-600 font-medium">
                  {selectedDoctor.specialty}
                </DialogDescription>
              </DialogHeader>
              
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="bg-gray-200 rounded-lg h-40 sm:h-auto">
                  <img 
                    src={selectedDoctor.image} 
                    alt={selectedDoctor.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                
                <div className="sm:col-span-2">
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800">Qualifications:</h4>
                    <p className="text-gray-600">{selectedDoctor.qualifications}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800">Experience:</h4>
                    <p className="text-gray-600">{selectedDoctor.experience}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800">About:</h4>
                    <p className="text-gray-600">{selectedDoctor.bio}</p>
                  </div>
                </div>
              </div>
              
              <DialogFooter>
                <Button className="w-full sm:w-auto bg-primary-600 hover:bg-primary-700">
                  Book Appointment
                </Button>
              </DialogFooter>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  );
};

export default Doctors;
