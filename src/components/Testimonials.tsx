
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Rahul Khanna",
    avatar: "/placeholder.svg",
    testimonial: "The care I received from Curago was exceptional. The doctors were knowledgeable and took the time to understand my concerns. The home healthcare service was prompt and professional.",
    rating: 5
  },
  {
    id: 2,
    name: "Anita Desai",
    avatar: "/placeholder.svg",
    testimonial: "I was nervous about finding good healthcare for my elderly mother, but Curago made it so easy. Their staff is compassionate, and the doctors provided excellent care. Highly recommend!",
    rating: 5
  },
  {
    id: 3,
    name: "Vikram Mehta",
    avatar: "/placeholder.svg",
    testimonial: "Curago has transformed how we manage healthcare in our family. The convenience of booking appointments and the quality of medical care are outstanding. Thank you for your service!",
    rating: 4
  },
  {
    id: 4,
    name: "Priyanka Shah",
    avatar: "/placeholder.svg",
    testimonial: "The pediatrician from Curago was amazing with my children. She was patient, thorough, and made them feel comfortable during the examination. We'll definitely be using Curago again.",
    rating: 5
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
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
        
        {/* Dots for pagination */}
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
      </div>
    </section>
  );
};

export default Testimonials;
