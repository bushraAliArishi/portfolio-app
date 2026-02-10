export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  icon?: string;
}

export const certifications: Certification[] = [
  {
    id: 'cert-1',
    title: 'Web Development Using Java',
    issuer: 'Tuwaiq Academy',
    date: 'Jan 2025',
  },
  {
    id: 'cert-2',
    title: 'Cloud Computing & AI',
    issuer: 'Tuwaiq Academy',
    date: 'Aug 2024',
  },
  {
    id: 'cert-3',
    title: 'Alibaba Cloud Certified: Cloud Engineer',
    issuer: 'Alibaba Cloud',
    date: '2024',
  },
  {
    id: 'cert-4',
    title: 'Ethical Generative AI',
    issuer: 'Alibaba Cloud',
    date: '2024',
  },
  {
    id: 'cert-5',
    title: 'Digital Transformation Professional',
    issuer: 'MCI',
    date: '2021',
  },
  {
    id: 'cert-6',
    title: 'CCNA - Cisco Certified Network Associate',
    issuer: 'Princess Nourah University',
    date: '2019',
  }
];