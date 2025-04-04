
import { Button } from "@/components/ui/button";
import { Phone } from 'lucide-react';
import { useState, useEffect } from 'react';
import { supabase } from "@/lib/supabase";
import { Department } from "@/types/supabase";
import { useToast } from "@/components/ui/use-toast";
import { Icons } from "@/components/Icons";

const Departments = () => {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        setIsLoading(true);
        const { data, error } = await supabase
          .from('departments')
          .select('*')
          .eq('is_active', true)
          .order('name');
          
        if (error) throw error;
        
        setDepartments(data || []);
      } catch (error) {
        console.error('Error fetching departments:', error);
        toast({
          title: "Failed to load departments",
          description: "Please try again later",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchDepartments();
  }, [toast]);

  return (
    <section id="departments" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Medical Specializations</h2>
          <p className="section-subtitle">
            Our specialized departments are staffed with experienced professionals to provide you with the best healthcare services
          </p>
        </div>
        
        {isLoading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((department, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-8 shadow-soft hover:shadow-hover transition-all duration-300 flex flex-col h-full"
              >
                <div className="flex items-center mb-6">
                  <div className="icon-box mr-4">
                    {Icons[department.icon] || <div className="h-8 w-8 text-primary-500">{department.icon}</div>}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{department.name}</h3>
                </div>
                
                <p className="text-gray-600 flex-grow mb-8">
                  {department.description}
                </p>
                
                <div className="flex flex-col gap-3 mt-auto">
                  <Button variant="outline" className="w-full justify-center hover:bg-gray-50">
                    Available Doctors
                  </Button>
                  <Button className="w-full justify-center bg-primary-500 hover:bg-primary-600 flex items-center gap-2 shadow-soft hover:shadow-hover">
                    <Phone size={16} />
                    <span>Request a call back</span>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
        
        <div className="text-center mt-12">
          <Button variant="link" className="text-primary-500 text-lg font-medium">
            View All Departments
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Departments;
