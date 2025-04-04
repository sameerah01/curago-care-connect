
export interface ServiceableArea {
  id: number;
  name: string;
  is_active: boolean;
  created_at?: string;
}

export interface Department {
  id: number;
  name: string;
  icon: string;
  description: string;
  is_active: boolean;
  created_at?: string;
}

export interface Doctor {
  id: number;
  name: string;
  specialty: string;
  experience: string;
  image: string;
  bio: string;
  qualifications: string;
  rating: number;
  review_count: number;
  is_active: boolean;
  created_at?: string;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
  order_number: number;
  is_active: boolean;
  created_at?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  testimonial: string;
  rating: number;
  is_active: boolean;
  created_at?: string;
}

export interface Appointment {
  id: number;
  name: string;
  phone: string;
  email: string;
  department: string;
  preferred_date: string;
  status: string;
  created_at?: string;
}

export interface ContactMessage {
  id: number;
  name: string;
  email: string;
  message: string;
  status: string;
  created_at?: string;
}
