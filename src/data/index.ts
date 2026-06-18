import { Experience, Skill, Education } from '../types';

export const personalInfo = {
  name: 'Ghada Gaber Abdelnazer',
  title: 'Customer Relations & Sales Professional',
  subtitle: 'Retail · Reception · Tele-Sales',
  email: 'ghadagaber768@gmail.com',
  phone: '+20 115 802 4947',
  location: 'Giza, Egypt',
  linkedin: 'https://www.linkedin.com/in/ghada-gaber-3111441b6',
  summary:
    'Results-oriented professional with hands-on experience across retail sales, medical reception, and tele-sales. Skilled at building lasting customer relationships, consistently hitting sales targets, and managing front-desk operations with precision and warmth. Combines strong linguistic ability — Arabic, English, and Hebrew — with sharp communication skills to connect with diverse clients and deliver outstanding service.',
};

export const experiences: Experience[] = [
  {
    title: 'Senior Sales Associate',
    company: 'Healthy & Tasty',
    responsibilities: [
      'Provided expert product guidance to customers on healthy food choices, elevating the overall shopping experience.',
      'Drove consistent daily sales growth through persuasive communication and relationship-building strategies.',
      'Managed and optimised in-branch product displays to maximise visibility and operational efficiency.',
    ],
  },
  {
    title: 'Receptionist',
    company: 'Physical Therapy Center',
    responsibilities: [
      'Coordinated appointment schedules for patients and healthcare providers, reducing wait times significantly.',
      'Maintained medical records and administrative files with high accuracy and strict confidentiality.',
      'Handled patient inquiries, booking workflows, and payment processing with professionalism.',
    ],
  },
  {
    title: 'Tele-Sales Representative',
    company: 'Engineering Training Courses Company',
    responsibilities: [
      'Contacted prospective clients to promote specialised engineering training programmes.',
      'Clearly communicated course details, pricing structures, and value propositions to potential students.',
      'Consistently met and exceeded sales targets through effective follow-up and communication.',
      'Maintained and updated customer database and tracked sales records for reporting.',
    ],
  },
];

export const skills: Skill[] = [
  { name: 'Microsoft Office Suite', category: 'technical' },
  { name: 'Customer Database Management', category: 'technical' },
  { name: 'Point of Sale (POS) Systems', category: 'technical' },
  { name: 'Effective Communication', category: 'soft' },
  { name: 'Time Management', category: 'soft' },
  { name: 'Problem Solving', category: 'soft' },
  { name: 'Professional Reception Etiquette', category: 'soft' },
  { name: 'Arabic (Native)', category: 'language' },
  { name: 'English (Conversational)', category: 'language' },
  { name: 'Hebrew (Professional)', category: 'language' },
];

export const education: Education = {
  degree: 'Bachelor of Arts',
  department: 'Hebrew Department — Faculty of Oriental Languages',
  institution: 'Cairo University',
  highlights: [
    'Specialised in Hebrew Language and Linguistic Communication.',
    'Developed advanced professional writing and formal communication skills.',
    'Gained cross-cultural competency applicable to international client-facing roles.',
  ],
};

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Connect', href: '#contact' },
];
