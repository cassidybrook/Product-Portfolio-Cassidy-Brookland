import type { PmArtifactsData } from '../types/pmArtifacts';

export const pmArtifacts: PmArtifactsData = {
  architecture: {
    layers: [
      {
        name: 'Field Layer',
        components: ['Smart meters', 'LoRaWAN gateways', '4G backhaul', 'Local buffer'],
      },
      {
        name: 'Connectivity',
        components: ['LoRaWAN network server', 'MQTT broker', 'Device provisioning'],
      },
      {
        name: 'Cloud',
        components: ['AWS IoT Core', 'Lambda', 'Time-series store', 'API Gateway'],
      },
      {
        name: 'Product',
        components: ['Stakeholder dashboards', 'Alert engine', 'Insight narratives', 'Admin config'],
      },
    ],
  },
  userJourney: [
    {
      step: 1,
      actor: 'Facilities manager',
      action: 'Receives weekly peak-load summary email',
      outcome: 'Understands if site is within threshold without logging in',
    },
    {
      step: 2,
      actor: 'CS manager',
      action: 'Reviews “sites at risk” dashboard',
      outcome: 'Prioritises outreach to 3 sites with actionable next steps',
    },
    {
      step: 3,
      actor: 'Field ops',
      action: 'Dispatches electrician from deployment board',
      outcome: 'Gateway fault resolved — connectivity restored in 48h',
    },
    {
      step: 4,
      actor: 'Sales lead',
      action: 'Shares ROI one-pager from Marketing tab',
      outcome: 'Prospect moves to technical walkthrough',
    },
  ],
  apiFlow: [
    {
      step: 1,
      from: 'Smart meter node',
      to: 'LoRaWAN gateway',
      protocol: 'LoRaWAN',
      detail: 'Uplink every 15 min with kWh and peak kW readings',
    },
    {
      step: 2,
      from: 'Gateway',
      to: 'Network server',
      protocol: 'MQTT',
      detail: 'Join credentials validated; payload forwarded to cloud',
    },
    {
      step: 3,
      from: 'AWS IoT Core',
      to: 'Lambda',
      protocol: 'Rule trigger',
      detail: 'Normalise reading, compute peak vs baseline, flag threshold breach',
    },
    {
      step: 4,
      from: 'Lambda',
      to: 'Dashboard API',
      protocol: 'REST',
      detail: 'Stakeholder views consume human-readable insights, not raw telemetry',
    },
  ],
  prioritization: [
    {
      name: 'Smart HVAC scheduling templates',
      impact: 'high',
      effort: 'medium',
      rationale: 'RICE 780: closes 14pt peak-reduction gap between best and worst sites',
    },
    {
      name: 'Gateway auto-recovery playbook',
      impact: 'high',
      effort: 'low',
      rationale: 'RICE 840: fixes top CS complaint with mostly process and config changes',
    },
    {
      name: 'Multi-tenant admin portal',
      impact: 'medium',
      effort: 'high',
      rationale: 'RICE 410: needed at 100+ sites but not blocking current KPI cycle',
    },
    {
      name: 'Mobile app for electricians',
      impact: 'medium',
      effort: 'medium',
      rationale: 'RICE 520: reduces commissioning errors; defer until template rollout complete',
    },
  ],
  roadmap: [
    {
      quarter: 'Now',
      theme: 'Reliability & CS clarity',
      items: ['Gateway health SLA', 'Bundled at-risk insight cards', 'Reference router config'],
    },
    {
      quarter: 'Next',
      theme: 'Scale onboarding',
      items: ['Config template library v2', 'Self-serve commissioning checklist', 'ROI auto-reports'],
    },
    {
      quarter: 'Later',
      theme: 'Expansion readiness',
      items: ['Multi-site portfolio view', 'Partner API', 'Demand-response pilot'],
    },
  ],
  abTests: [
    {
      hypothesis: 'Plain-language insight titles reduce CS ticket volume',
      variant: 'A: “Peak spike — schedule HVAC review” vs B: “Threshold breach alert #4421”',
      metric: 'CS tickets per at-risk site within 7 days',
    },
    {
      hypothesis: 'Showing savings kW alongside peak kW improves stakeholder engagement',
      variant: 'Dashboard with/without savings trend line on Marketing tab',
      metric: 'Weekly dashboard login rate by facilities managers',
    },
  ],
  tradeoffs: [
    {
      option: 'Real-time vs 15-min batch telemetry',
      pros: ['Lower infrastructure cost', 'Sufficient for peak demand use case', 'Better battery life on devices'],
      cons: ['Not suitable for sub-minute fault detection'],
      decision: 'Keep 15-min batch — peak demand is the primary job-to-be-done',
    },
    {
      option: 'Build vs buy network server',
      pros: ['Buy (ChirpStack): faster time-to-market', 'Managed join profiles', 'Proven at scale'],
      cons: ['Less control over custom join logic'],
      decision: 'Buy — engineering capacity better spent on insight layer',
    },
  ],
  risksAssumptions: [
    {
      type: 'assumption',
      item: 'Facilities managers will act on email summaries without needing a login',
      mitigation: 'Validate with 5-site pilot; track email click-through vs dashboard logins',
    },
    {
      type: 'risk',
      item: 'Cellular backhaul quality varies by site — stale data without obvious errors',
      mitigation: 'Add “last contact” timestamp to every insight card; alert Ops at 2hr stale',
    },
    {
      type: 'risk',
      item: 'Electrician partner capacity limits onboarding KPI in new regions',
      mitigation: 'Certify 2nd contractor per region before pipeline commit',
    },
    {
      type: 'assumption',
      item: 'Peak reduction % is compelling enough for Sales without custom ROI modelling',
      mitigation: 'A/B test generic vs site-specific ROI one-pagers in Q4 pipeline',
    },
  ],
};
