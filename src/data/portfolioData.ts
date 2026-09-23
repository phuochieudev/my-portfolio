import type { PortfolioData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: 'Hieu Tran Ho Phuoc',
    title: 'Backend / Fullstack Developer',
    tagline:
      'Building scalable APIs and clean, maintainable systems with Node.js, TypeScript, ReactJS, and .NET.',
    location: 'Ho Chi Minh City, Vietnam',
    birthDate: '9 September, 2003',
    email: 'hieuthp99@gmail.com',
    phone: '0935243689',
    avatarInitials: 'HP',
    resumeUrl: '/Hieu-Tran-Ho-Phuoc-CV.pdf',
    socialLinks: [
      {
        id: 'github',
        label: 'GitHub',
        url: 'https://github.com/phuochieudev',
        icon: 'github',
      },
      {
        id: 'linkedin',
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/in/hieutranhophuoc/',
        icon: 'linkedin',
      },
      {
        id: 'email',
        label: 'Email',
        url: 'mailto:hieuthp99@gmail.com',
        icon: 'mail',
      },
      {
        id: 'phone',
        label: 'Phone',
        url: 'tel:+840935243689',
        icon: 'phone',
      },
    ],
  },
  about: {
    eyebrow: 'About Me',
    heading: 'I care about systems that are easy to reason about.',
    paragraphs: [
      'Backend-leaning fullstack developer who enjoys turning ambiguous requirements into RESTful APIs, clean data models, and services that hold up under real usage. Comfortable moving across the stack — from Entity Framework Core and NestJS on the backend to React and TypeScript on the frontend.',
      'I default to clean architecture, strong typing, and modular folder structures, because the fastest way to ship features long-term is to keep the codebase boring and predictable. Currently sharpening my full-stack development skills, with a focus on TypeScript and microservices architecture while building side projects to explore and apply new technologies.',
    ],
    principles: ['Clean Architecture', 'Type-Safe Development', 'RESTful API Design', 'Microservices Thinking'],
  },
  skillCategories: [
    {
      id: 'languages',
      title: 'Languages',
      icon: 'languages',
      skills: ['JavaScript', 'TypeScript', 'Java', 'C/C++', 'C#', 'SQL', 'HTML/CSS'],
    },
    {
      id: 'frontend',
      title: 'Frontend',
      icon: 'frontend',
      skills: ['React.js', 'TailwindCSS', 'Ant Design', 'TanStack Query', 'Zustand', 'Vite'],
    },
    {
      id: 'backend',
      title: 'Backend',
      icon: 'backend',
      skills: ['NestJS', 'ASP.NET Core', '.NET', 'SpringMVC', 'JWT Auth', 'Entity Framework Core'],
    },
    {
      id: 'tools',
      title: 'Systems & Tools',
      icon: 'tools',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Docker', 'Git', 'OOP', 'Microservices'],
    },
  ],
  timeline: [
    {
      id: 'hiptech-solution',
      type: 'work',
      title: '.NET Developer',
      organization: 'Hiptech Solution',
      location: 'Thu Duc - Ho Chi Minh',
      startDate: 'March 2025',
      endDate: 'March 2026',
      current: false,
      points: [
        'WinForm ADC Calibration Keyboard: implemented UI components using .NET (WinForms/WPF).',
        'Music Desktop App Velasora: built a desktop music player application for Corsair, focusing on UI design and API integration with backend services.',
      ],
    },
    {
      id: 'saigon-university',
      type: 'education',
      title: 'Software Engineer in Information Technology',
      organization: 'Saigon University',
      location: 'Ho Chi Minh City',
      startDate: 'August 2021',
      endDate: 'Present',
      current: true,
      points: [
        'Coursework and self-directed projects spanning fullstack web development, database design, and object-oriented software engineering.',
      ],
    },
  ],
  projects: [
    {
      id: 'store-management',
      title: 'Store Management Website',
      role: 'Backend Developer',
      description:
        'Full-stack Retail Store Management System with RESTful APIs, JWT authentication, and Swagger docs. Modern frontend built with Ant Design and TanStack Router/React Query for server-state sync.',
      techStack: [
        'ASP.NET Core 9',
        'ReactJs',
        'TypeScript',
        'PostgreSQL',
        'Entity Framework Core',
        'TailwindCSS',
      ],
      githubUrl: 'https://github.com/phuochieudev/store-manager',
      startDate: 'October 2025',
      endDate: 'December 2025',
      featured: true,
      icon: 'store',
    },
    {
      id: 'ecommerce-microservices',
      title: 'E-commerce (Microservices Architecture)',
      role: 'Fullstack Developer',
      description:
        'Microservices e-commerce platform with independent services for auth, users, products, categories, brands, and orders, containerized with Docker and backed by MySQL/Sequelize.',
      techStack: ['TypeScript', 'NestJS', 'ReactJS', 'PostgreSQL', 'MySQL', 'Docker'],
      githubUrl: 'https://github.com/phuochieudev/Commerce-Website',
      startDate: 'March 2025',
      endDate: 'May 2026',
      icon: 'ecommerce',
    },
    {
      id: 'task-management',
      title: 'Task Management Website',
      role: 'Fullstack Developer',
      description:
        'Trello-inspired task management app with JWT auth, role-based authorization, and drag-and-drop board/column/card management with real-time UI updates.',
      techStack: ['Node.js', 'Express.js', 'MongoDB', 'ReactJs', 'Material UI', 'JWT'],
      githubUrl: 'https://github.com/phuochieudev/task-manager',
      startDate: 'July 2023',
      endDate: 'September 2024',
      icon: 'tasks',
    },
  ],
  contact: {
    eyebrow: 'Get In Touch',
    heading: "Let's build something great together.",
    description:
      "Open to backend, fullstack, or .NET opportunities. Whether it's a role, a project, or just a technical chat — my inbox is open.",
  },
};
