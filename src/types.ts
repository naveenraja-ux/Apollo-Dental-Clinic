export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  category: 'dental' | 'cosmetology' | 'academy';
}

export interface Treatment {
  id: string;
  title: string;
  overview: string;
  procedure: string;
  benefits: string[];
  faqs: { question: string; answer: string }[];
}
