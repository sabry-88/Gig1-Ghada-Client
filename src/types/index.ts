export type Theme = 'light' | 'dark';

export interface NavItem {
  label: string;
  href: string;
}

export interface Experience {
  title: string;
  company: string;
  period?: string;
  responsibilities: string[];
}

export interface Skill {
  name: string;
  category: 'technical' | 'soft' | 'language';
}

export interface Education {
  degree: string;
  department: string;
  institution: string;
  highlights: string[];
}
