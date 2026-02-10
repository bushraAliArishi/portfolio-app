import { TOOLS, Tool } from './tools';

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  logoUrl?: string;    // Small icon/logo for the project
  imageUri?: string;   // Large screenshot of the website/app
  tools: Tool[];
  link?: string;       // Direct link to the live project
}

export const projects: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'i-be Hub',
    category: 'Operations Management',
    description: 'A centralized hub for internal task and communication management[cite: 182]. Features role-based dashboards and automated submission/approval workflows[cite: 185].',
    logoUrl: 'https://d1cf06514ccdd585e96f2e1d9fbe2243.cdn.bubble.io/f1727947117491x264249176901952400/Group%205557.svg', 
    imageUri: '', 
    tools: [TOOLS.Bubble, TOOLS.JavaScript, TOOLS.LookerStudio],
    link: 'https://ibehub.com'},
     {
    id: 'proj-2',
    title: 'Bani',
    category: 'Marketplace',
    description: 'A marketplace for construction equipment rentals featuring automated booking logic, payment integration, and financial modules for accounting[cite: 153, 160].',
    logoUrl: 'https://img.icons8.com/color/96/crane.png',
    imageUri: 'https://images.unsplash.com/photo-1581094288338-2314dddb73a1?auto=format&fit=crop&q=80&w=800',
    tools: [TOOLS.Bubble, TOOLS.JavaScript],
    link: 'http://banibuilder.com/' 
  },
  {
    id: 'proj-3',
    title: 'i-be X',
    category: 'AI Platform',
    description: 'A youth-centric AI platform offering smart tools and chatbots using custom prompt structures and dynamic backend workflows[cite: 175, 177].',
    logoUrl: 'https://img.icons8.com/fluency/96/artificial-intelligence.png',
    imageUri: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800', 
    tools: [TOOLS.Bubble, TOOLS.ChatGPT],
    link: 'http://ibe-x.com/' 
  },
  {
    id: 'proj-4',
    title: 'INFNT',
    category: 'Freelance & Event Platform',
    description: 'A dual-purpose platform for freelancers and event planners[cite: 166]. Includes service listings, integrated bookings, and automated account setup[cite: 166, 170].',
    logoUrl: 'https://img.icons8.com/color/96/crowd.png',
    imageUri: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800', 
    tools: [TOOLS.Bubble, TOOLS.GoogleWorkspace, TOOLS.Jira],
    link: 'http://infntsolutions.com/' 
  },
  {
    id: 'proj-5',
    title: 'Focus',
    category: 'Graduation Project',
    description: 'A full-stack backend system for managing booking workflows between photographers and editors[cite: 144]. Includes role-based status updates and API validation[cite: 146, 149].',
    logoUrl: 'https://img.icons8.com/color/96/camera.png',
    imageUri: 'https://images.unsplash.com/photo-1493863641943-9b68992a8d07?auto=format&fit=crop&q=80&w=800', 
    tools: [TOOLS.Java, TOOLS.SpringBoot, TOOLS.React, TOOLS.Figma, TOOLS.MySQL],
    link: 'https://github.com/bushraAliArishi/graduate-project-Focus' 
  }
];