import type { PortfolioProfile } from '../types/portfolio';

export const portfolioProfile: PortfolioProfile = {
  name: 'Cassidy Brookland',
  title: 'Product Manager · IoT & Energy · AI-Enhanced Product Leadership',
  location: 'Toronto, Canada',
  email: 'cassidybrookland2@gmail.com',
  linkedin: 'https://www.linkedin.com/in/cassidybrookland',
  resumeUrl: 'https://cassidybrook.github.io/Product-Portfolio-Cassidy-Brookland/resume.html',
  intro:
    "I'm a product and delivery manager with about 3 years in IoT, across agritech and smart energy. Before that I worked as an electrician for 4 years, so I'm comfortable on site and working with engineers. I took a grain silo monitoring product from prototype to commercial launch, secured an exclusivity agreement for 500 silos a year, and now manage a smart energy rollout for schools. I've also done sales along the way, from selling GrainSure to managing clients from first contact through onboarding. I've recently moved to Toronto and I'm looking for product, project and sales roles in IoT, energy and connected hardware.",
  summary:
    'My electrical background means I can work directly with engineers and installers, and turn what customers need into a clear plan.',
  site: {
    name: 'Cassidy Brookland',
    tagline: 'Technical PM · IoT, Energy, Smart Buildings',
    description:
      'A portfolio focused on how I find options with stakeholders, communicate tradeoffs, and iterate after launch.',
  },
  featuredProject: {
    id: 'fp-demo',
    title: 'Interactive KPI demo: product judgment in context',
    description:
      'An interactive IoT and energy KPI walkthrough. Click any KPI to see what I noticed, why it matters, and the decision I would make next as PM.',
    tags: ['Stakeholder-ready storytelling', 'Transparent tradeoffs', 'Post-launch iteration'],
    demoAnchor: 'landing',
  },
  howIThink: {
    title: 'How I Think',
    principles: [
      {
        heading: 'Understanding the why before the what',
        body: 'I do not start with a solution. I start with the question underneath the request, what problem is actually being solved, and for whom, because a technically correct feature built on the wrong why still fails the person using it.',
      },
      {
        heading: 'I bring options, not answers',
        body: 'When a decision affects multiple teams, I do not arrive with a recommendation already locked in. I lay out the real tradeoffs and involve the people who will live with the consequences in choosing between them, because a decision people helped shape is one they will actually support when it gets hard.',
      },
      {
        heading: 'I ask questions that do not presuppose the answer',
        body: 'Discovery is only useful if it can surprise you. I am careful not to ask leading questions that confirm what I already believe. The goal is finding out what is true, not finding evidence for what I want to be true.',
      },
      {
        heading: 'I show my reasoning, not just my conclusion',
        body: 'Tradeoffs are rarely clean. When I recommend a direction, I show what it costs, not just what it gains, because trust is built on people seeing the reasoning, not just trusting the output.',
      },
      {
        heading: 'Shipped is the start of the next cycle, not the finish line',
        body: 'Launch is a checkpoint, not an ending. The real signal comes after, what broke, what got used differently than expected, what the next iteration needs to fix. I build that feedback loop in from day one, not as an afterthought.',
      },
    ],
  },
  skillGroups: [
    {
      category: 'IoT & Cloud Platforms',
      items: [
        'AWS IoT Core',
        'AWS Lambda',
        'API Gateway',
        'CloudWatch',
        'MQTT',
        'Zigbee',
        'LoRaWAN',
        'The Things Network',
        'ChirpStack',
        'ThingsBoard',
      ],
    },
    {
      category: 'AI & Automation',
      items: ['Claude AI', 'Anthropic API', 'LLM Workflow Automation', 'Cursor'],
    },
    {
      category: 'Product Delivery',
      items: ['Agile / Scrum', 'Backlog Prioritisation', 'PRD Authoring', 'Cross-functional delivery'],
    },
  ],
  foldedSkills: [
    'Security: Device Authentication, Certificate Management.',
    'Networking, hardware & firmware: Raspberry Pi, ESP32, Shelly Devices, RAK Wireless LoRaWAN Gateways, MikroTik Routers & Switches, 4G/LTE Cellular Gateways.',
    'Programming & data: Python, SQLite, DynamoDB.',
  ],
  education: [
    {
      id: 'edu-1',
      qualification: 'Diplomas in Software Development (L6) & Information Systems (L5)',
      institution: 'Techtorium NZITT, Auckland',
      period: '2021 – 2023',
      note: "Equal to Years 1 & 2 of a Bachelor's degree · Consecutive A+ average across both diplomas",
    },
    {
      id: 'edu-2',
      qualification: 'New Zealand Certificate in Electrical Engineering (Trade)',
      institution: 'ETCO, Auckland',
      period: '2017 – 2021',
    },
  ],
  experience: [
    {
      id: 'exp-1',
      role: 'Product Delivery Manager | Eco Logical Energy Ltd',
      period: 'March 2026 – Present',
      sector: 'Energy & Smart Building Programs',
      highlights: [
        'Manage client relationships from sales through SaaS platform onboarding across 20 projects.',
        'Run sprint planning and backlog prioritisation in Odoo, aligning delivery priorities against Ministry of Education stakeholder feedback.',
        'Lead on site delivery, coordinating electricians and cross-functional teams to commission monitoring and control systems that reduced peak load enough to eliminate transformer upgrades.',
        'Manage project budgeting, cross-team dependencies and risk across engineering, electricians, and Ministry of Education stakeholders, resolving MODBUS/LoRaWAN connectivity issues to keep installs on schedule.',
      ],
    },
    {
      id: 'exp-2',
      role: 'Product Manager | IoT Ventures',
      period: 'June 2024 – March 2026',
      sector: 'IoT · Agriculture & Remote Monitoring',
      highlights: [
        "Owned product strategy across hardware, firmware, and cloud software, taking GrainSure from validation through commercial launch as the company's foundation product.",
        'Bridged product alignment across hardware, firmware, and software engineering with commercial stakeholders, translating high level goals into technical specs, algorithms, user stories, and acceptance criteria through sprint delivery plans.',
        'Secured a strategic exclusivity agreement with Nutrinza to deploy 500 silos per year, converting a pilot stage product into a recurring revenue pipeline.',
        'Led live technical demonstrations at industry field days and partner events, using direct customer feedback to validate product market fit and system reliability.',
      ],
    },
    {
      id: 'exp-3',
      role: 'Associate Product Manager & Venture Analyst | IoT Ventures',
      period: 'June 2023 – June 2024',
      sector: 'IoT · Agriculture & Remote Monitoring',
      highlights: [
        'Supported the product roadmap from concept through early validation, helping shape the initial idea into GrainSure, a viable IoT grain silo monitoring system that became a foundation product for the company.',
        'Ran proof of concept iterations and acceptance testing across hardware, firmware, and cloud software to validate features before scaling.',
        'Provisioned and managed IoT devices and gateways across AWS IoT Core, The Things Network, and ChirpStack, using DynamoDB to surface device data and operational metrics that supported early product decisions.',
        'Supported technical demonstrations at industry field days and partner events to help validate product market fit.',
      ],
    },
    {
      id: 'exp-4',
      role: 'Associate Product Analyst | Complete Clinical Services',
      period: 'January 2022 – June 2023 (part time)',
      sector: 'Healthcare · Vaccine Transport Hardware',
      highlights: [
        'Managed device reliability and physical performance testing for temperature-sensitive vaccine transport hardware.',
        'Collected user feedback from logistics and healthcare teams, translating operational pain points into hardware feature requests.',
      ],
    },
    {
      id: 'exp-5',
      role: 'Electrician | Number One Electrical',
      period: 'January 2018 – December 2021',
      sector: 'Electrical Trade · Automation',
      highlights: [
        'Designed and commissioned smart home automation and IoT systems, integrating connected devices with building management and control platforms.',
        'Programmed and configured alarms, industrial controllers, modems, and automation systems integrated with building management and industrial networks.',
        'Installed electrical systems across commercial, industrial, and residential projects, single and three phase. Built and assembled industrial control panels and switchboard enclosures for mining site equipment.',
      ],
    },
  ],
  aiSummary: {
    headline: 'AI-enhanced product management, human-verified',
    bullets: [
      'I use Cursor to draft discovery plans, PRDs, and test scenarios, then pressure-test them with stakeholder personas before review.',
      'AI accelerates option generation and synthesis; prioritization and tradeoff calls stay human-owned.',
      'Every draft is verified against source data and stakeholder feedback before it moves into delivery.',
      'Post-launch feedback is fed back into the next cycle, not treated as an afterthought.',
    ],
    toolchain: 'Cursor · Persona agents · Human-in-the-loop verification',
  },
};
