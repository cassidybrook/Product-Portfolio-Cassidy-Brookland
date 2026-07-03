import type { PortfolioProfile } from '../types/portfolio';

export const portfolioProfile: PortfolioProfile = {
  name: 'Cassidy Brookland',
  title: 'Product Manager · IoT & Energy · AI-Enhanced Product Leadership',
  location: 'Auckland, New Zealand',
  email: 'cassidybrookland2@gmail.com',
  linkedin: 'https://www.linkedin.com/in/cassidy-brookland-596bb1210/',
  resumeUrl: 'https://cassidybrook.github.io/Product-Portfolio-Cassidy-Brookland/resume.html',
  intro:
    'Product Manager with 3+ years delivering IoT products across agriculture, energy, and smart building sectors, spanning hardware, firmware, and cloud platforms.',
  summary:
    'Backed by 4 years of hands-on electrical industry experience, I bring technical depth that enables direct collaboration with engineering teams and translates stakeholder needs into commercially grounded product roadmaps.',
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
      items: ['Cursor', 'Claude AI', 'Anthropic API', 'LLM Workflow Automation'],
    },
    {
      category: 'Product Delivery',
      items: ['Agile / Scrum', 'Backlog Prioritisation', 'PRD Authoring', 'Cross-functional delivery'],
    },
  ],
  foldedSkills: [
    'Networking & hardware: Raspberry Pi, ESP32, Shelly devices, RAK Wireless LoRaWAN gateways, MikroTik routers and switches, 4G/LTE gateways.',
    'Programming & data: Python, C#, SQL, SQLite, DynamoDB.',
    'DevOps & security: CI/CD pipelines, AWS IAM, Cognito, device authentication, certificate management.',
  ],
  education: [
    {
      id: 'edu-1',
      qualification: 'Diplomas in Software Development (L6) & Information Systems (L5)',
      institution: 'Techtorium NZITT — Auckland',
      period: '2021 – 2023',
      note: 'Equivalent to Years 1–2 of a Bachelor of Information Technology · Consecutive A+ average',
    },
    {
      id: 'edu-2',
      qualification: 'New Zealand Certificate in Electrical Engineering (Trade)',
      institution: 'ETCO — Auckland',
      period: '2018 – 2021',
    },
  ],
  experience: [
    {
      id: 'exp-1',
      role: 'Product & Delivery Manager | Eco Logical Energy Ltd',
      period: 'March 2026 – Present',
      sector: 'Energy & Smart Building Programs',
      highlights: [
        'Introduced LoRaWAN capability for a Neura and Vector partnership, mapping end-to-end data flow across devices, networks, and energy monitoring systems.',
        'Led Agile delivery as Scrum Master across a 30-school smart energy program, running daily standups, managing sprint planning, and prioritising backlog based on Ministry of Education customer feedback.',
        'Managed deployment pipeline to consistently hit a KPI of 3 new customer onboards per month, delivering smart energy monitoring and control systems across 30 school sites and reducing peak load demand to eliminate transformer upgrades.',
        'Coordinated end-to-end IoT deployment lifecycle per site — stakeholder onboarding, electrician coordination, hardware procurement, fault diagnosis, and network troubleshooting.',
        'Reduced site onboarding time by 20% by designing an operational toolset with reusable configuration and dashboard templates, improving deployment scalability across the Eco Smart Energy platform.',
        'Created product requirements documents to build dashboards and virtual metering single-line diagrams.',
      ],
    },
    {
      id: 'exp-2',
      role: 'Technical Product Manager | IoTVentures',
      period: 'June 2023 – March 2026',
      sector: 'IoT · Agriculture & Remote Monitoring',
      highlights: [
        'Owned the full product roadmap from concept to commercial launch for an IoT grain silo monitoring system.',
        'Translated high-level product strategy into technical specifications and user stories across hardware, firmware, and software, managing the backlog for end-to-end system integration.',
        'Scoped and executed proof-of-concept iterations, acceptance testing, and field trials across hardware, firmware, and cloud software to validate features prior to scaling.',
        'Secured a strategic exclusivity agreement to deploy 500 silos per year, scaling the product from pilot to a recurring revenue pipeline.',
        'Built and configured IoT cloud infrastructure using AWS IoT Core, The Things Network, and ChirpStack to support distributed device connectivity across deployments.',
        'Managed cross-functional alignment across engineering, data science, and commercial stakeholders, defining acceptance criteria and driving sprint delivery planning.',
        'Validated product-market fit and system reliability through live technical demonstrations at industry field days and partner events.',
      ],
    },
    {
      id: 'exp-3',
      role: 'Electrician Number One Electrical',
      period: 'January 2018 – December 2021',
      sector: 'Electrical Trade · Automation',
      highlights: [
        'Designed and commissioned smart home automation and IoT systems, integrating connected devices with building management and control platforms.',
        'Programmed and configured alarms, industrial controllers, modems, and automation systems integrated with building management and industrial networks.',
        'Installed and commissioned electrical systems across commercial, industrial, and residential projects.',
        'Designed and validated electrical plans, load calculations, and circuit layouts in compliance with NZ wiring standards and the Electrical Code of Practice.',
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
