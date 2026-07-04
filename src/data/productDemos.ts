import type { KpiInsight } from '../types/pmArtifacts';

export type DemoDetailSectionId =
  | 'problem'
  | 'discovery'
  | 'stories'
  | 'prioritization'
  | 'architecture'
  | 'decision'
  | 'kpis'
  | 'postlaunch'
  | 'outcomes';

export interface DiscoveryQuestion {
  question: string;
}

export interface UserStory {
  role: string;
  goal: string;
  outcome: string;
}

export interface RiceFeature {
  name: string;
  reach: number;
  impact: number;
  confidence: number;
  effort: number;
}

export interface RoadmapLane {
  lane: 'Now' | 'Next' | 'Later';
  items: { name: string; reasoning: string }[];
}

export interface EffortImpactItem {
  name: string;
  quadrant: 'quick-wins' | 'strategic-bets' | 'fill-ins' | 'defer';
}

export interface ArchitectureStep {
  from: string;
  to: string;
  protocol: string;
  note: string;
}

export interface DecisionOption {
  option: string;
  benefits: string;
  cost: string;
}

export interface OutcomeMetric {
  label: string;
  before: string;
  after: string;
  note: string;
}

export interface ProductDemoCase {
  id: 'pastureiq' | 'wattwallet' | 'harvestlink';
  label: string;
  shortDescription: string;
  syntheticDisclosure: string;
  problemFraming: string;
  discovery: {
    approach: string;
    questions: DiscoveryQuestion[];
    learningShift: string;
  };
  userStories: UserStory[];
  prioritization: {
    rice?: RiceFeature[];
    roadmap?: RoadmapLane[];
    effortImpact: EffortImpactItem[];
  };
  architecture: {
    summary: string;
    steps: ArchitectureStep[];
  };
  decisionMoment: {
    conflict: string;
    participants: string[];
    options: DecisionOption[];
    chosen: string;
  };
  kpis: KpiInsight[];
  postLaunchIteration: string;
  outcomes: OutcomeMetric[];
}

export const demoSectionOrder: { id: DemoDetailSectionId; label: string }[] = [
  { id: 'problem', label: 'Problem' },
  { id: 'discovery', label: 'Discovery' },
  { id: 'stories', label: 'User stories' },
  { id: 'prioritization', label: 'Prioritization' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'decision', label: 'Decision moment' },
  { id: 'kpis', label: 'KPI interaction' },
  { id: 'postlaunch', label: 'Post launch' },
  { id: 'outcomes', label: 'Outcomes' },
];

export const productDemos: Record<'pastureiq' | 'wattwallet' | 'harvestlink', ProductDemoCase> = {
  pastureiq: {
    id: 'pastureiq',
    label: 'AgriTech: PastureIQ',
    shortDescription:
      'Wearable livestock monitoring engineered to stay connected in dead zones, with mesh relay, priority alerting, and scoped AI agents.',
    syntheticDisclosure:
      'All names, metrics, and scenarios in this tab are invented for demonstration.',
    problemFraming:
      'I framed PastureIQ around one practical issue. Farmers were losing confidence in health alerts because dead zones delayed updates. That made intervention timing unreliable and reduced trust in the platform during high risk periods.',
    discovery: {
      approach:
        'I used non-leading interviews with growers, grain buyers, and field technicians. I asked for recent decision moments, then mapped what signals they trusted or ignored before discussing feature ideas.',
      questions: [
        { question: 'Walk me through the last time you acted on a spoilage alert. What made you trust that alert?' },
        { question: 'When silo conditions change, what decision has to happen in the next 24 hours?' },
        { question: 'Which data point creates the most disagreement between farm operations and grain buyers?' },
      ],
      learningShift:
        'My initial assumption was that users needed more alerts. Discovery showed they needed fewer alerts with clearer confidence signals and explicit owner actions.',
    },
    userStories: [
      {
        role: 'Grower',
        goal: 'see alert confidence by silo',
        outcome: 'I can prioritize physical checks before quality risk escalates',
      },
      {
        role: 'Grower',
        goal: 'view fill level and moisture trend in one screen',
        outcome: 'I can plan drying and dispatch windows without exporting data',
      },
      {
        role: 'Grain buyer',
        goal: 'review condition history before pickup scheduling',
        outcome: 'I can reduce disputes about grade and storage handling',
      },
      {
        role: 'Grain buyer',
        goal: 'receive a weekly risk summary',
        outcome: 'I can coordinate transport earlier during high risk periods',
      },
      {
        role: 'Field technician',
        goal: 'see battery and gateway health in commissioning view',
        outcome: 'I can resolve telemetry faults before users lose trust in alerts',
      },
    ],
    prioritization: {
      rice: [
        { name: 'Alert confidence scoring', reach: 52, impact: 3, confidence: 80, effort: 4 },
        { name: 'Battery aware firmware fallback', reach: 34, impact: 2, confidence: 70, effort: 6 },
        { name: 'Shared grower buyer weekly digest', reach: 41, impact: 2, confidence: 85, effort: 3 },
        { name: 'Custom per silo thresholds UI', reach: 18, impact: 1, confidence: 60, effort: 5 },
      ],
      effortImpact: [
        { name: 'Alert confidence scoring', quadrant: 'quick-wins' },
        { name: 'Shared grower buyer weekly digest', quadrant: 'quick-wins' },
        { name: 'Battery aware firmware fallback', quadrant: 'strategic-bets' },
        { name: 'Custom per silo thresholds UI', quadrant: 'defer' },
      ],
    },
    architecture: {
      summary:
        'I kept the architecture at product level with clear reliability boundaries across field, network, cloud, and insight layers.',
      steps: [
        {
          from: 'Silo sensor nodes',
          to: 'LoRaWAN gateway',
          protocol: 'LoRaWAN uplink',
          note: 'Temperature, moisture, fill level, and battery metrics every 15 minutes',
        },
        {
          from: 'Gateway',
          to: 'ChirpStack and The Things Network',
          protocol: 'LoRaWAN network services',
          note: 'Join validation, deduplication, and payload forwarding',
        },
        {
          from: 'Network services',
          to: 'AWS IoT Core',
          protocol: 'MQTT',
          note: 'Normalized telemetry topics for downstream processing',
        },
        {
          from: 'AWS IoT Core',
          to: 'Decision API and dashboard',
          protocol: 'Rules and REST',
          note: 'Confidence scoring, alert narratives, and stakeholder specific views',
        },
      ],
    },
    decisionMoment: {
      conflict:
        'Firmware behavior caused false spoilage alerts at low battery voltage. Support requested threshold relaxations, while agronomy stakeholders wanted strict sensitivity.',
      participants: ['Growers', 'Grain buyer ops lead', 'Firmware engineer', 'Customer support manager'],
      options: [
        {
          option: 'Relax thresholds globally',
          benefits: 'Immediate alert volume drop',
          cost: 'Higher risk of missing real spoilage events',
        },
        {
          option: 'Firmware patch only',
          benefits: 'Fixes root edge case',
          cost: 'Release lead time and staged rollout risk',
        },
        {
          option: 'Staged patch plus confidence scoring',
          benefits: 'Short term clarity plus long term reliability',
          cost: 'More cross team coordination and support retraining',
        },
      ],
      chosen:
        'We chose staged patch plus confidence scoring. It balanced immediate trust recovery with technical correctness, and all participant groups agreed on rollout checkpoints.',
    },
    kpis: [
      {
        id: 'silo-false-positive',
        label: 'False positive alert rate',
        value: '7.8%',
        trend: 'Down from 13.4% in 6 weeks',
        whyItMatters:
          'False positives drive alert fatigue. Once teams stop trusting alerts, real quality risks are ignored.',
        insightNoticed:
          'Most false positives clustered on low battery nodes in one firmware cohort, not across all sites.',
        pmDecision:
          'Prioritize battery aware fallback and confidence scoring before expanding custom threshold controls.',
      },
      {
        id: 'silo-prep-time',
        label: 'Deployment prep time',
        value: '6.2 days',
        trend: 'Down from 9.1 days',
        whyItMatters:
          'Prep time controls how quickly distributor partners can activate new sites without overloading support.',
        insightNoticed:
          'Sites with prevalidated gateway templates avoid most kickoff delays.',
        pmDecision:
          'Standardize commissioning kits and block go live unless template checks pass.',
      },
      {
        id: 'silo-alert-confidence',
        label: 'Alert confidence accepted',
        value: '82%',
        trend: 'Up from 54%',
        whyItMatters:
          'Confidence adoption indicates whether users trust the model enough to act without manual reconciliation.',
        insightNoticed:
          'Growers responded faster when confidence was paired with owner action text.',
        pmDecision:
          'Ship role based action suggestions with every high risk alert and review impact after one cycle.',
      },
    ],
    postLaunchIteration:
      'After launch, support tickets dropped but decision lag stayed high at two buyer accounts. The next cycle introduced shared weekly digests and explicit ownership tags per alert. That change improved follow through and reduced cross team handoffs.',
    outcomes: [
      {
        label: 'False positive alerts',
        before: '13.4%',
        after: '7.8%',
        note: 'Improved trust in remote monitoring actions',
      },
      {
        label: 'Deployment prep time',
        before: '9.1 days',
        after: '6.2 days',
        note: 'Distributor onboarding became more repeatable',
      },
      {
        label: 'High risk alert response time',
        before: '19 hours',
        after: '11 hours',
        note: 'Action ownership text improved speed',
      },
    ],
  },
  wattwallet: {
    id: 'wattwallet',
    label: 'Smart Energy: WattWallet',
    shortDescription:
      'Prepay energy payments engineered to work offline, with edge computing, tamper resistant design, and scoped AI agents.',
    syntheticDisclosure:
      'All names, metrics, and scenarios in this tab are invented for demonstration.',
    problemFraming:
      'I framed WattWallet around one recurring issue. Teams had payment and meter telemetry, but each function interpreted it differently, which led to inconsistent decisions. Customer Success needed clear intervention priorities, Ops needed reliable alerting, and Sales needed outcome stories without exposing raw telemetry noise.',
    discovery: {
      approach:
        'I ran interviews and workflow shadowing with Customer Success managers, Ops coordinators, and Sales leads. I focused on decision handoffs and where data translation failed.',
      questions: [
        { question: 'What is the first action you take when a site crosses a peak threshold?' },
        { question: 'Which dashboard view helps you decide fastest, and which view slows you down?' },
        { question: 'When Sales and Ops disagree on site status, what evidence settles it?' },
      ],
      learningShift:
        'I assumed one unified dashboard would reduce confusion. Discovery showed role based views with shared metric definitions reduced conflict faster.',
    },
    userStories: [
      {
        role: 'Customer Success manager',
        goal: 'see ranked sites at risk with next actions',
        outcome: 'I can schedule outreach before ticket escalation',
      },
      {
        role: 'Customer Success manager',
        goal: 'track unresolved high severity alerts',
        outcome: 'I can close operational loops with clear ownership',
      },
      {
        role: 'Operations lead',
        goal: 'monitor gateway and connectivity health',
        outcome: 'I can isolate infrastructure issues before data goes stale',
      },
      {
        role: 'Operations lead',
        goal: 'view deployment readiness blockers',
        outcome: 'I can remove commissioning delays earlier',
      },
      {
        role: 'Sales lead',
        goal: 'share outcome summaries without raw telemetry exports',
        outcome: 'I can run expansion conversations with confidence',
      },
    ],
    prioritization: {
      roadmap: [
        {
          lane: 'Now',
          items: [
            {
              name: 'Role based dashboard shell',
              reasoning: 'Highest decision friction came from mixed audience views',
            },
            {
              name: 'Unresolved high severity queue',
              reasoning: 'Critical for customer trust and CS handoff clarity',
            },
            {
              name: 'Connectivity SLA monitor',
              reasoning: 'Stale telemetry was the hidden root cause in multiple escalations',
            },
          ],
        },
        {
          lane: 'Next',
          items: [
            {
              name: 'Onboarding throughput tracker',
              reasoning: 'Needed for scale planning after stability improvements',
            },
            {
              name: 'Savings narrative generator',
              reasoning: 'Supports Sales and Marketing once core reliability is stable',
            },
            {
              name: 'Cross team decision log',
              reasoning: 'Improves traceability for tradeoff calls',
            },
          ],
        },
        {
          lane: 'Later',
          items: [
            {
              name: 'Custom customer workspace templates',
              reasoning: 'Valuable but increases maintenance overhead too early',
            },
            {
              name: 'Automated optimization recommendations',
              reasoning: 'Depends on stronger baseline data quality',
            },
            {
              name: 'Partner API exposure',
              reasoning: 'Sequenced after role based UI adoption is proven',
            },
          ],
        },
      ],
      effortImpact: [
        { name: 'Role based dashboard shell', quadrant: 'quick-wins' },
        { name: 'Unresolved high severity queue', quadrant: 'quick-wins' },
        { name: 'Connectivity SLA monitor', quadrant: 'strategic-bets' },
        { name: 'Automated optimization recommendations', quadrant: 'defer' },
      ],
    },
    architecture: {
      summary:
        'I used a layered data flow that keeps telemetry ingest separate from stakeholder insight generation.',
      steps: [
        {
          from: 'Building meters and controllers',
          to: 'LoRaWAN gateways',
          protocol: 'LoRaWAN and edge buffering',
          note: 'Power and status data streamed on fixed intervals',
        },
        {
          from: 'Gateways',
          to: 'The Things Network and ChirpStack',
          protocol: 'LoRaWAN network services',
          note: 'Device joins, payload routing, and delivery confirmation',
        },
        {
          from: 'Network services',
          to: 'AWS IoT Core',
          protocol: 'MQTT',
          note: 'Central ingest with topic partitioning by site and function',
        },
        {
          from: 'AWS IoT Core',
          to: 'Role based dashboard APIs',
          protocol: 'Rules, Lambda processing, and REST',
          note: 'Narrative insight generation for CS, Ops, and Sales views',
        },
      ],
    },
    decisionMoment: {
      conflict:
        'Sales wanted simplified customer views, Engineering wanted raw telemetry exposed, and Ops required fast alert triage detail.',
      participants: ['Sales lead', 'Engineering manager', 'Ops coordinator', 'Customer Success lead'],
      options: [
        {
          option: 'Single unified telemetry rich view',
          benefits: 'One source of interface truth',
          cost: 'Too dense for non technical users and slower decision cycles',
        },
        {
          option: 'Sales friendly summary only',
          benefits: 'Fast customer storytelling',
          cost: 'Ops loses diagnostic context and escalations increase',
        },
        {
          option: 'Role based views with shared core metrics',
          benefits: 'Audience specific clarity with aligned definitions',
          cost: 'More design and governance overhead',
        },
      ],
      chosen:
        'We chose role based views with shared metric definitions. This option won because each team could act faster without fragmenting the underlying data model.',
    },
    kpis: [
      {
        id: 'grid-peak-reduction',
        label: 'Peak demand reduction',
        value: '16.9%',
        trend: 'Up 1.8 points quarter on quarter',
        whyItMatters:
          'Peak reduction is the clearest customer value signal and directly supports retention and expansion.',
        insightNoticed:
          'Sites with weekly CS check ins sustained gains, while unattended sites plateaued after month two.',
        pmDecision:
          'Protect CS capacity for high risk accounts and standardize weekly decision reviews.',
      },
      {
        id: 'grid-connectivity',
        label: 'Fleet connectivity',
        value: '95.7%',
        trend: 'Up from 93.9%',
        whyItMatters:
          'Reliable connectivity is the prerequisite for every other KPI and stakeholder report.',
        insightNoticed:
          'Two regions with backhaul congestion drove most stale data incidents.',
        pmDecision:
          'Prioritize connectivity SLA monitor and route issue ownership to Ops earlier.',
      },
      {
        id: 'grid-unresolved-high-severity',
        label: 'Unresolved high severity alerts',
        value: '11',
        trend: 'Down from 18',
        whyItMatters:
          'Unresolved critical alerts indicate customer risk and weak cross team execution.',
        insightNoticed:
          'Alerts with explicit action owners closed 37 percent faster.',
        pmDecision:
          'Require owner assignment on every high severity alert before it enters queue.',
      },
      {
        id: 'grid-onboarding-throughput',
        label: 'Onboarding throughput',
        value: '4 / 5',
        trend: 'Near target, improving trend',
        whyItMatters:
          'Throughput shows whether operational scale can keep up with demand.',
        insightNoticed:
          'Most delays came from access and handoff timing, not technical commissioning.',
        pmDecision:
          'Add pre kickoff access checks and shared readiness criteria across teams.',
      },
    ],
    postLaunchIteration:
      'After launch, adoption was strong but unresolved critical alerts stayed too high in one region. The next cycle introduced owner based alert routing and a weekly cross team review. The improvement came from workflow clarity, not new telemetry.',
    outcomes: [
      {
        label: 'Unresolved high severity alerts',
        before: '18 open',
        after: '11 open',
        note: 'Owner routing and weekly reviews improved closure rates',
      },
      {
        label: 'Fleet connectivity',
        before: '93.9%',
        after: '95.7%',
        note: 'Backhaul issue focus improved data freshness',
      },
      {
        label: 'Onboarding throughput',
        before: '3 of 5',
        after: '4 of 5',
        note: 'Readiness checks reduced avoidable delays',
      },
    ],
  },
  harvestlink: {
    id: 'harvestlink',
    label: 'Marketplace: HarvestLink',
    shortDescription:
      'A two sided marketplace connecting small farms directly with local restaurants and grocers, built on trust, logistics, and a payment guarantee rather than new hardware.',
    syntheticDisclosure:
      'All names, metrics, and scenarios in this tab are invented for demonstration.',
    problemFraming:
      'I framed HarvestLink as a trust and operations problem first, not a listing problem. Farms had surplus but sold through distributors for payment certainty, while buyers wanted local supply but avoided the coordination burden of dealing with many farms.',
    discovery: {
      approach:
        'I interviewed farmers, independent grocers, and restaurant buyers, then reviewed distributor economics and support notes to separate price concerns from trust and logistics constraints.',
      questions: [
        { question: 'What keeps you selling to a distributor even when margin is lower?' },
        { question: 'What would make direct farm sourcing feel operationally safe for your team?' },
        { question: 'Where does your current produce process break under time pressure?' },
      ],
      learningShift:
        'My initial assumption was price sensitivity. Discovery showed trust, quality consistency, and logistics reliability were the dominant blockers.',
    },
    userStories: [
      {
        role: 'Farmer',
        goal: 'receive guaranteed payment timing',
        outcome: 'I can sell direct without taking new cash flow risk',
      },
      {
        role: 'Restaurant buyer',
        goal: 'place recurring orders through one point of contact',
        outcome: 'I can source local produce without adding coordination overhead',
      },
      {
        role: 'Grocer buyer',
        goal: 'trust quality consistency across multiple farms',
        outcome: 'I can keep shelf standards stable while buying direct',
      },
      {
        role: 'Marketplace operations lead',
        goal: 'manage substitutions and shortfalls with clear communication',
        outcome: 'I can protect trust when supply shifts mid cycle',
      },
    ],
    prioritization: {
      roadmap: [
        {
          lane: 'Now',
          items: [
            {
              name: 'Managed marketplace launch in one region',
              reasoning: 'Prove trust and liquidity with concierge operations first',
            },
            {
              name: 'Quality rubric and payment guarantee',
              reasoning: 'Directly addresses discovery barriers on both sides',
            },
            {
              name: 'Pooled logistics partner routing',
              reasoning: 'Removes farm by farm delivery complexity for buyers',
            },
          ],
        },
        {
          lane: 'Next',
          items: [
            {
              name: 'Restaurant subscription ordering',
              reasoning: 'Moves channel from occasional use to default weekly flow',
            },
            {
              name: 'Buyer trust scorecard visibility',
              reasoning: 'Makes consistency signals explicit across harvest cycles',
            },
            {
              name: 'Farmer planning dashboard',
              reasoning: 'Improves supply reliability and reduces last minute substitutions',
            },
          ],
        },
        {
          lane: 'Later',
          items: [
            {
              name: 'Category expansion to dairy and specialty goods',
              reasoning: 'Reuses trust and logistics infrastructure once produce is stable',
            },
            {
              name: 'Regional infrastructure licensing',
              reasoning: 'Extends moat through platformized trust and logistics model',
            },
            {
              name: 'Second region launch',
              reasoning: 'Sequence after repeat rate and unit economics prove durability',
            },
          ],
        },
      ],
      effortImpact: [
        { name: 'Managed marketplace launch in one region', quadrant: 'quick-wins' },
        { name: 'Quality rubric and payment guarantee', quadrant: 'strategic-bets' },
        { name: 'Restaurant subscription ordering', quadrant: 'strategic-bets' },
        { name: 'Regional infrastructure licensing', quadrant: 'defer' },
      ],
    },
    architecture: {
      summary:
        'The operating model centered on trust and fulfillment mechanics, with one intake standard, one payment commitment model, and one logistics path for buyers.',
      steps: [
        {
          from: 'Farm supply intake',
          to: 'Quality standards review',
          protocol: 'Operational rubric',
          note: 'Consistent grading before listings are visible to buyers',
        },
        {
          from: 'Buyer order placement',
          to: 'Marketplace guarantee process',
          protocol: 'Commercial workflow',
          note: 'Payment to farms guaranteed within agreed settlement window',
        },
        {
          from: 'Confirmed orders',
          to: 'Pooled logistics partner',
          protocol: 'Route coordination',
          note: 'Single distribution pass replaces fragmented farm level deliveries',
        },
        {
          from: 'Delivery completion',
          to: 'Settlement and repeat cycle',
          protocol: 'Reconciliation workflow',
          note: 'Trust loop closes through quality outcomes and payment reliability',
        },
      ],
    },
    decisionMoment: {
      conflict:
        'Team pressure favored a lightweight listing model for speed, while discovery showed trust and logistics were the actual adoption blockers.',
      participants: ['Farm account lead', 'Buyer operations manager', 'Finance lead', 'Marketplace GM'],
      options: [
        {
          option: 'Option A: listing site only',
          benefits: 'Faster launch with lower immediate operating cost',
          cost: 'Leaves trust and logistics friction unresolved, likely low repeat behavior',
        },
        {
          option: 'Option B: managed marketplace with guarantee and pooled logistics',
          benefits: 'Directly removes discovery barriers for both sides',
          cost: 'Higher working capital and operations complexity in phase one',
        },
      ],
      chosen:
        'I chose the managed marketplace path because it addressed the real blockers surfaced in discovery and created stronger long term switching costs.',
    },
    kpis: [
      {
        id: 'harvest-liquidity',
        label: 'Marketplace liquidity',
        value: '78%',
        trend: 'Up from 52% in eight weeks',
        whyItMatters:
          'Liquidity shows whether listed produce actually converts to transactions rather than remaining theoretical supply.',
        insightNoticed:
          'Liquidity rose fastest where quality intake compliance stayed tight.',
        pmDecision:
          'Protect intake standards even when supply pressure increases.',
      },
      {
        id: 'harvest-repeat-rate',
        label: 'Buyer repeat purchase rate',
        value: '64%',
        trend: 'Up from 37%',
        whyItMatters:
          'Repeat behavior is the clearest signal that HarvestLink becomes default channel, not a one off trial.',
        insightNoticed:
          'Repeat dropped in weeks with high substitution variance.',
        pmDecision:
          'Tighten substitution communication and buyer consent thresholds.',
      },
      {
        id: 'harvest-farmer-retention',
        label: 'Farmer retention after first cycle',
        value: '86%',
        trend: 'Up from 69%',
        whyItMatters:
          'Retention after first payment cycle indicates trust in payout reliability and process clarity.',
        insightNoticed:
          'Retention was strongest where payment timeline messaging was explicit at onboarding.',
        pmDecision:
          'Standardize payment timeline briefing and dashboard confirmation at sign up.',
      },
    ],
    postLaunchIteration:
      'After pilot stabilization I monitored liquidity and repeat trends across a full season. I saw repeat soften whenever quality thresholds loosened to chase short term supply. I adjusted policy to protect trust metrics first, then moved subscription ordering ahead of second region expansion.',
    outcomes: [
      {
        label: 'Liquidity',
        before: '52%',
        after: '78%',
        note: 'Listings converted to fulfilled orders at materially higher rate',
      },
      {
        label: 'Buyer repeat purchase rate',
        before: '37%',
        after: '64%',
        note: 'Marketplace behavior shifted from trial to habitual use',
      },
      {
        label: 'Farmer retention after first cycle',
        before: '69%',
        after: '86%',
        note: 'Payment guarantee and operational clarity reduced early churn',
      },
    ],
  },
};
