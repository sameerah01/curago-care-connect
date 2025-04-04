
import { useState, useEffect } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { supabase } from "@/lib/supabase";
import { FAQ as FAQType } from "@/types/supabase";
import { useToast } from "@/components/ui/use-toast";

const FAQ = () => {
  const [faqs, setFaqs] = useState<FAQType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  
  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        setIsLoading(true);
        const { data, error } = await supabase
          .from('faqs')
          .select('*')
          .eq('is_active', true)
          .order('order_number');
          
        if (error) throw error;
        
        setFaqs(data || []);
      } catch (error) {
        console.error('Error fetching FAQs:', error);
        toast({
          title: "Failed to load FAQs",
          description: "Please try again later",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchFaqs();
  }, [toast]);

  return (
    <section id="faqs" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Find answers to common questions about our services
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {isLoading ? (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
            </div>
          ) : faqs.length === 0 ? (
            <p className="text-center text-gray-600 py-12">No FAQs available at the moment.</p>
          ) : (
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-gray-50 rounded-lg border-none">
                  <AccordionTrigger className="px-6 py-5 text-left hover:bg-gray-100 rounded-t-lg text-lg font-medium text-gray-800">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-5 text-gray-600 leading-relaxed border-t border-gray-100">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
