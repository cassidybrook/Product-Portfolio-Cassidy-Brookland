import type { PortfolioProfile } from '../types/portfolio';

export const portfolioProfile: PortfolioProfile = {
  name: 'Cassidy Brookland',
  title: 'Product Manager · IoT & Energy · AI-Enhanced Product Leadership',
  location: 'Auckland, New Zealand',
  email: 'cassidybrookland2@gmail.com',
  linkedin: 'https://www.linkedin.com/in/cassidy-brookland-596bb1210/',
  resumeUrl: 'https://cassidybrook.github.io/Product-Portfolio-Cassidy-Brookland/resume.html',
  intro:
    'I am a Product Manager who builds practical IoT products for energy and smart-building use cases. My focus is turning complex technical systems into clear product decisions, measurable outcomes, and stakeholder-ready experiences that teams can deliver with confidence.',
  productFocus: [
    'IoT product strategy & roadmap delivery',
    'Energy monitoring & peak demand reduction',
    'AI-enhanced product management workflows',
  ],
  summary:
    'Technical Product Manager with 3+ years delivering IoT products across agriculture, energy, and smart building sectors — spanning hardware, firmware, and cloud. Grounded in 4 years of hands-on electrical industry experience, I translate stakeholder needs into commercially grounded roadmaps, collaborate directly with engineering teams, and use AI agents in Cursor to move faster without sacrificing accuracy.',
  site: {
    name: 'Cassidy Brookland',
    tagline: 'Interview portfolio · AI Technical PM · Energy & IoT',
    description:
      'A demo of my work and how I work — built for hiring conversations. Start with Profile for my background in under a minute, then explore the Product Demo to see how I turn IoT data into decisions.',
  },
  impactMetrics: [
    {
      value: '30+',
      label: 'Sites deployed',
      context: 'Multi-site smart energy rollouts managed end-to-end',
    },
    {
      value: '20%',
      label: 'Faster onboarding',
      context: 'Reusable config and dashboard templates',
    },
    {
      value: '3/mo',
      label: 'Customer onboards',
      context: 'Consistent deployment pipeline KPI',
    },
    {
      value: '500/yr',
      label: 'Device scale',
      context: 'Commercial IoT monitoring pipeline delivered',
    },
  ],
  featuredProjects: [
    {
      id: 'fp-dashboard',
      title: 'Interactive KPI dashboard with a PM lens',
      description:
        'Four headline energy-IoT KPIs — click any of them to see why the metric matters, what I noticed in the data, and the decision I would make as PM.',
      tags: ['Product thinking', 'Energy IoT', 'Data storytelling'],
      demoAnchor: 'dashboard',
    },
    {
      id: 'fp-stakeholders',
      title: 'GridPulse stakeholder dashboard',
      description:
        'A fictional energy-IoT product demo that translates LoRaWAN telemetry into decision-ready views for Customer Success, Sales, Marketing, and Ops — no raw JSON in sight.',
      tags: ['React', 'TypeScript', 'Built in Cursor'],
      demoAnchor: 'stakeholders',
    },
    {
      id: 'fp-artifacts',
      title: 'PM artifacts pack',
      description:
        'Architecture diagram, user journey, API data flow, prioritisation matrix, quarterly roadmap, A/B test ideas, tradeoffs, and risks for the fictional GridPulse product.',
      tags: ['Architecture', 'Roadmap', 'Prioritisation'],
      demoAnchor: 'artifacts',
    },
  ],
  skillGroups: [
    {
      category: 'AI & Agent Workflows',
      items: [
        'Cursor IDE',
        'Persona Agent PRD Review',
        'LLM Workflow Automation',
        'Anthropic API',
        'Human-in-the-Loop Verification',
        'PRD & Acceptance Criteria Drafting',
      ],
    },
    {
      category: 'IoT & Cloud Platforms',
      items: [
        'AWS IoT Core',
        'AWS Lambda',
        'API Gateway',
        'CloudWatch',
        'MQTT',
        'LoRaWAN',
        'The Things Network',
        'ChirpStack',
        'ThingsBoard',
      ],
    },
    {
      category: 'Networking & Hardware',
      items: [
        'ESP32',
        'Raspberry Pi',
        'LoRaWAN Gateways',
        'Cellular Gateways',
        'Smart Meters',
        'Industrial Controllers',
        'Building Automation',
      ],
    },
    {
      category: 'Programming & Data',
      items: ['Python', 'C#', 'SQL', 'SQLite', 'DynamoDB', 'TypeScript'],
    },
    {
      category: 'DevOps & Security',
      items: [
        'CI/CD Pipelines',
        'AWS IAM',
        'Cognito',
        'Device Authentication',
        'Certificate Management',
      ],
    },
    {
      category: 'Product Delivery',
      items: [
        'Agile / Scrum',
        'Backlog Prioritisation',
        'PRD Authoring',
        'Field Trials & POCs',
        'Cross-Functional Alignment',
        'Customer Onboarding KPIs',
      ],
    },
  ],
  education: [
    {
      id: 'edu-1',
      qualification: 'Diplomas in Software Development (L6) & Information Systems (L5)',
      institution: 'Techtorium NZITT — Auckland',
      period: '2021 – 2023',
      note: 'Equivalent to Years 1–2 of a Bachelor of IT · Consecutive A+ average',
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
      role: 'Product & Delivery Manager',
      period: '2026 – Present',
      sector: 'Energy · Smart Building Programs',
      highlights: [
        'Introduced LoRaWAN capability for an energy monitoring partnership — mapped end-to-end data flow across devices, networks, and monitoring systems.',
        'Led Agile delivery across a multi-site smart energy rollout, prioritising backlog from customer feedback.',
        'Hit a KPI of 3 new customer onboards per month while reducing peak load demand to defer infrastructure upgrades.',
        'Cut site onboarding time by 20% through reusable configuration and dashboard templates.',
      ],
    },
    {
      id: 'exp-2',
      role: 'Technical Product Manager',
      period: '2023 – 2026',
      sector: 'IoT · Agriculture & Remote Monitoring',
      highlights: [
        'Owned the full product roadmap from concept to commercial launch for a distributed IoT monitoring system.',
        'Translated strategy into specs and user stories across hardware, firmware, and cloud — managing end-to-end integration backlog.',
        'Ran POC iterations, acceptance testing, and field trials before scaling to a recurring revenue pipeline.',
        'Built cloud connectivity infrastructure using AWS IoT Core, TTN, and ChirpStack.',
      ],
    },
    {
      id: 'exp-3',
      role: 'Electrician',
      period: '2018 – 2021',
      sector: 'Electrical Trade · Automation',
      highlights: [
        'Designed and commissioned smart building automation and IoT integrations.',
        'Programmed alarms, industrial controllers, and automation systems on commercial and industrial projects.',
        'Validated electrical plans and load calculations to wiring standards.',
      ],
    },
  ],
  aiSummary: {
    headline: 'AI-enhanced product management, human-verified',
    bullets: [
      'Cursor is my primary product environment — PRDs, prototypes (including this site), and stakeholder dashboards all start there.',
      'Persona agents review every PRD as Engineering, CS, Ops, and Commercial stakeholders before humans see it — alignment gaps surface in hours, not mid-sprint.',
      'AI handles the drafts — story breakdowns, release notes, test scenarios. I keep the judgment calls and priority decisions.',
      'Guardrails over speed: every output is verified against a source of truth, and real stakeholders still sign off before build.',
    ],
    toolchain: 'Cursor · Persona agents · Anthropic API · Human-in-the-loop verification',
  },
  builtWith:
    'This site was designed and built in Cursor — the same environment I use for PRD drafting, persona agent review, and rapid stakeholder UI prototypes.',
};
