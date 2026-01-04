export interface ExperienceItem {
  id: string
  title: string
  company: string
  period: string
  description: string[]
  current?: boolean
  skills?: string[]
}

export const experiences: ExperienceItem[] = [
  {
    id: '1',
    title: 'Software Developer',
    company: 'Trell',
    period: 'Aug 2025 – Oct 2025',
    description: [
      'Conducted comprehensive quality control testing for the company platform, identifying and documenting issues in Jira',
      'Resolved frontend issues independently by assigning and completing simple tickets',
      'Developed and maintained frontend components using React and JavaScript'
    ],
    skills: ['React', 'JavaScript', 'Jira', 'Quality Assurance']
  },
  {
    id: '2',
    title: 'Senior Developer',
    company: 'i-be group',
    period: 'Jan 2024 – Jul 2025',
    description: [
      'Led end-to-end development of i-be Hub, an internal operations management system, reducing system response time by 30% through backend optimization',
      'Designed and implemented over 12 specialized dashboards for various departments using Bubble.io and Google Data Studio',
      'Automated internal processes, saving over 20 hours of manual work per month through event-triggered and scheduled workflows',
      'Managed development of multiple digital products including Bani (equipment rental marketplace) and i-be X (AI tools platform)',
      'Served as Project Manager and QC Lead for the INFNT project, overseeing development lifecycle and stakeholder communication'
    ],
    skills: ['Bubble.io', 'Project Management', 'System Optimization', 'Workflow Automation', 'API Integration']
  },
  {
    id: '3',
    title: 'Technical Specialist',
    company: 'i-be',
    period: 'Aug 2022 – Jan 2024',
    description: [
      'Gathered and analyzed client requirements, transforming them into detailed technical specifications and project plans',
      'Managed IT administration tasks including Google Workspace, domain management, and software subscriptions',
      'Trained and mentored new developers on Bubble.io development, improving team onboarding and productivity'
    ],
    skills: ['Requirements Analysis', 'Technical Documentation', 'Team Mentoring', 'IT Administration']
  }
]