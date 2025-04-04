
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "What services does Curago provide?",
    answer: "Curago provides a wide range of healthcare services including but not limited to doctor consultations, home healthcare services, diagnostic tests, and medical care across various specialties such as Cardiology, Neurology, Pediatrics, and more."
  },
  {
    question: "How can I book an appointment with a doctor?",
    answer: "You can book an appointment by filling out the appointment form on our website, calling our customer service number, or using our WhatsApp service. Our team will get back to you promptly to confirm your appointment."
  },
  {
    question: "Is my area serviceable by Curago?",
    answer: "Curago currently provides services across Mumbai. You can check if your specific area is serviceable by using our area search feature or contacting our customer service team directly."
  },
  {
    question: "What are your operating hours?",
    answer: "Our online services are available 24/7. For physical consultations, our doctors are available as per their scheduled timings, which you can check during the appointment booking process. For emergencies, we have support available round the clock."
  },
  {
    question: "Do you accept insurance?",
    answer: "Yes, we accept most major insurance providers. Please contact our customer service with your insurance details to verify coverage before your appointment."
  },
  {
    question: "What should I bring to my first appointment?",
    answer: "Please bring your ID proof, insurance card (if applicable), any previous medical records relevant to your condition, list of current medications, and any referral documents if you have been referred by another doctor."
  }
];

const FAQ = () => {
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
        </div>
      </div>
    </section>
  );
};

export default FAQ;
