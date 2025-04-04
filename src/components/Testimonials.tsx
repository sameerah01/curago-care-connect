
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { supabase } from "@/lib/supabase";
import { Testimonial } from "@/types/supabase";
import { useToast } from "@/components/ui/use-toast";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setIsLoading(true);
        const { data, error } = await supabase
          .from('testimonials')
          .select('*')
          .eq('is_active', true)
          .order('rating', { ascending: false });
          
        if (error) throw error;
        
        setTestimonials(data || []);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
        toast({
          title: "Failed to load testimonials",
          description: "Please try again later",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchTestimonials();
  }, [toast]);
  
  const itemsPerPage = 2;
  const maxIndex = Math.max(0, testimonials.length - itemsPerPage);
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
  };
  
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };
  
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">What Our Patients Say</h2>
          <p className="section-subtitle">
            Hear what our patients have to say about their experience with Curago
          </p>
        </div>
        
        {isLoading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
          </div>
        ) : testimonials.length === 0 ? (
          <p className="text-center text-gray-600 py-12">No testimonials available at the moment.</p>
        ) : (
          <div className="relative">
            {/* Carousel Navigation */}
            <div className="absolute top-1/2 -left-4 md:-left-8 transform -translate-y-1/2 z-10">
              <button 
                className={`p-3 rounded-full bg-white shadow-soft hover:shadow-hover ${currentIndex === 0 ? 'text-gray-300 cursor-not-allowed' : 'text-primary-500 hover:bg-gray-50'}`}
                onClick={handlePrev}
                disabled={currentIndex === 0}
              >
                <ChevronLeft size={24} />
              </button>
            </div>
            
            <div className="overflow-hidden">
              <div 
                className="flex transition-all duration-500 ease-in-out" 
                style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div 
                    key={testimonial.id} 
                    className="w-full sm:w-1/2 px-4 flex-shrink-0"
                    style={{ minWidth: `${100 / itemsPerPage}%` }}
                  >
                    <div className="bg-white p-8 rounded-xl h-full flex flex-col shadow-soft">
                      <div className="text-primary-100 mb-6">
                        <Quote size={36} className="text-primary-200" />
                      </div>
                      
                      <blockquote className="text-gray-700 italic flex-grow mb-8">"{testimonial.testimonial}"</blockquote>
                      
                      <div className="flex items-center mt-auto">
                        <div className="h-14 w-14 rounded-full overflow-hidden bg-gray-100 mr-4">
                          <img 
                            src={testimonial.avatar} 
                            alt={testimonial.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                          <div className="flex items-center mt-1">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                size={14} 
                                className={i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-200"}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="absolute top-1/2 -right-4 md:-right-8 transform -translate-y-1/2 z-10">
              <button 
                className={`p-3 rounded-full bg-white shadow-soft hover:shadow-hover ${currentIndex >= maxIndex ? 'text-gray-300 cursor-not-allowed' : 'text-primary-500 hover:bg-gray-50'}`}
                onClick={handleNext}
                disabled={currentIndex >= maxIndex}
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        )}
        
        {/* Dots for pagination */}
        {!isLoading && testimonials.length > 0 && (
          <div className="flex justify-center mt-8">
            {testimonials.slice(0, maxIndex + 1).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-2 mx-1 rounded-full ${
                  index === currentIndex ? 'bg-primary-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
