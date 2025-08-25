import { z } from 'zod';

// Teacher registration schema
export const teacherRegistrationSchema = z
  .object({
    firstName: z.string().min(2, 'First name must be at least 2 characters'),
    lastName: z.string().min(2, 'Last name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
    confirmPassword: z.string(),
    phone: z.string().optional(),
    subjects: z.array(z.string()).min(1, 'Please select at least one subject'),
    experience: z.string().min(1, 'Please select your experience level'),
    education: z.string().min(1, 'Please select your education level'),
    hourlyRate: z.number().min(10, 'Hourly rate must be at least $10'),
    bio: z.string().min(50, 'Bio must be at least 50 characters'),
    location: z.string().min(1, 'Please enter your location'),
    availability: z.array(z.string()).min(1, 'Please select your availability'),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Passwords don\'t match',
    path: ['confirmPassword'],
  });

// Company registration schema
export const companyRegistrationSchema = z
  .object({
    companyName: z
      .string()
      .min(2, 'Company name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
    confirmPassword: z.string(),
    phone: z.string().optional(),
    companyType: z.string().min(1, 'Please select company type'),
    companySize: z.string().min(1, 'Please select company size'),
    industry: z.string().min(1, 'Please select industry'),
    description: z
      .string()
      .min(50, 'Description must be at least 50 characters'),
    location: z.string().min(1, 'Please enter company location'),
    website: z.string().url('Invalid website URL').optional().or(z.literal('')),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Passwords don\'t match',
    path: ['confirmPassword'],
  });

// Login schema
export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
});

// Profile update schema
export const teacherProfileUpdateSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  phone: z.string().optional(),
  subjects: z.array(z.string()).min(1, 'Please select at least one subject'),
  experience: z.string().min(1, 'Please select your experience level'),
  education: z.string().min(1, 'Please select your education level'),
  hourlyRate: z.number().min(10, 'Hourly rate must be at least $10'),
  bio: z.string().min(50, 'Bio must be at least 50 characters'),
  location: z.string().min(1, 'Please enter your location'),
  availability: z.array(z.string()).min(1, 'Please select your availability'),
  skills: z.array(z.string()).optional(),
  certifications: z.array(z.string()).optional(),
});

// Company profile update schema
export const companyProfileUpdateSchema = z.object({
  companyName: z.string().min(2, 'Company name must be at least 2 characters'),
  phone: z.string().optional(),
  companyType: z.string().min(1, 'Please select company type'),
  companySize: z.string().min(1, 'Please select company size'),
  industry: z.string().min(1, 'Please select industry'),
  description: z.string().min(50, 'Description must be at least 50 characters'),
  location: z.string().min(1, 'Please enter company location'),
  website: z.string().url('Invalid website URL').optional().or(z.literal('')),
  benefits: z.array(z.string()).optional(),
  requirements: z.array(z.string()).optional(),
});

// Search filters schema
export const searchFiltersSchema = z.object({
  subject: z.string().optional(),
  location: z.string().optional(),
  experience: z.string().optional(),
  hourlyRate: z.string().optional(),
  availability: z.string().optional(),
  companyType: z.string().optional(),
  companySize: z.string().optional(),
  sortBy: z.string().optional(),
  sortOrder: z.enum(['asc', 'desc']).optional(),
});
