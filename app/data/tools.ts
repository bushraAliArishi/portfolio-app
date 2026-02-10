export interface Tool {
  name: string;
  logoUrl: string;
}

export const TOOLS: Record<string, Tool> = {
  // Languages & Frameworks
  React: { name: 'React', logoUrl: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/react.svg' },
  JavaScript: { name: 'JavaScript', logoUrl: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/javascript.svg' },
  TypeScript: { name: 'TypeScript', logoUrl: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/typescript.svg' },
  Java: { name: 'Java', logoUrl: 'https://www.vectorlogo.zone/logos/java/java-icon.svg' },
  SpringBoot: { name: 'Spring Boot', logoUrl: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/springboot.svg' },
  
  // No-Code & Data
  Bubble: { name: 'Bubble.io', logoUrl: 'https://cdn.worldvectorlogo.com/logos/bubble-2.svg' },
  LookerStudio: { name: 'Looker Studio', logoUrl: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/googledatastudio.svg' },
  PostgreSQL: { name: 'PostgreSQL', logoUrl: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/postgresql.svg' },
  MySQL: { name: 'MySQL', logoUrl: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/mysql.svg' },
  
  // Design & Management
  Figma: { name: 'Figma', logoUrl: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/figma.svg' },
  Jira: { name: 'Jira', logoUrl: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/jira.svg' },
  GoogleWorkspace: { name: 'Google Workspace', logoUrl: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/googleworkspace.svg' },
  ChatGPT: { name: 'OpenAI API', logoUrl: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/openai.svg' },
};