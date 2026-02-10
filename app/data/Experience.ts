import { TOOLS, Tool } from './tools';

export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  companyLogo?: string;
  companyUrl?: string;
  period: string;
  description: string[];
  tools: Tool[];
}

export const experiences: ExperienceItem[] = [
  {
    id: 'exp-1',
    title: 'Software Developer',
    company: 'Trell',
    companyLogo:'https://www.trell.sa/build/assets/logo-DTWrORI7.png',
    companyUrl: 'https://trell.sa',
    period: 'Aug 2025 - Oct 2025',
    description: [
      'Conducted comprehensive quality control testing for the company platform, identifying and documenting issues in Jira[cite: 10].',
      'Resolved frontend issues independently by assigning and completing simple tickets[cite: 11].',
      'Developed and maintained frontend components using React and JavaScript[cite: 11].'
    ],
    tools: [TOOLS.React, TOOLS.JavaScript, TOOLS.Jira]
  },
  {
    id: 'exp-2',
    title: 'Senior Developer',
    company: 'i-be group',
    companyLogo:'https://d1cf06514ccdd585e96f2e1d9fbe2243.cdn.bubble.io/f1727947117491x264249176901952400/Group%205557.svg',
    companyUrl: 'https://ibehub.com',
    period: 'Jan 2024 - Jul 2025',
    description: [
      'Led end-to-end development of i-be Hub, reducing system response time by 30% through backend optimization[cite: 13].',
      'Designed and implemented over 12 specialized dashboards using Bubble.io and Google Data Studio[cite: 14].',
      'Managed development of multiple digital products including Bani and i-be X[cite: 16].',
      'Served as Project Manager and QC Lead for the INFNT platform[cite: 17].'
    ],
    tools: [TOOLS.Bubble, TOOLS.LookerStudio, TOOLS.JavaScript, TOOLS.Jira]
  },
  {
    id: 'exp-3',
    title: 'Technical Specialist',
    company: 'https://ibehub.com',
    companyLogo:'https://d1cf06514ccdd585e96f2e1d9fbe2243.cdn.bubble.io/f1727947117491x264249176901952400/Group%205557.svg',
    companyUrl: 'https://i-be.io',
    period: 'Aug 2022 - Jan 2024',
    description: [
      'Gathered and analyzed client requirements, transforming them into detailed technical specifications[cite: 19].',
      'Managed IT administration tasks including Google Workspace and domain management[cite: 20].',
      'Trained and mentored new developers on Bubble.io development[cite: 21].'
    ],
    tools: [TOOLS.Bubble, TOOLS.Figma, TOOLS.GoogleWorkspace]
  }
];