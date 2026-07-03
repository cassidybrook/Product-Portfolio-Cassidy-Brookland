import type { KpiInsight } from '../types/pmArtifacts';

export const kpiInsights: KpiInsight[] = [
  {
    id: 'peak-reduction',
    label: 'Peak demand reduction',
    value: '18.4%',
    trend: '↑ +2.1 pts QoQ',
    whyItMatters:
      'Demand charges drive a large share of energy costs for commercial sites. Peak shaving directly defers transformer upgrades and unlocks ROI stories for expansion sales.',
    insightNoticed:
      'Sites with automated HVAC scheduling see 22%+ reduction vs 8% for manual-only sites — a product design gap, not a customer effort gap.',
    pmDecision:
      'Run an option review with CS, Ops, and Sales on rollout scope, then prioritise scheduling templates in the Now window with clear downside risks documented.',
  },
  {
    id: 'onboards',
    label: 'Monthly onboards',
    value: '4 / 5',
    trend: 'Near KPI target',
    whyItMatters:
      'Onboarding velocity is the leading indicator for revenue growth and customer confidence. Miss the KPI and expansion conversations stall.',
    insightNoticed:
      'Sites using reusable LoRaWAN config templates onboard 20% faster — the bottleneck shifted from engineering to site access, not device join.',
    pmDecision:
      'Keep templates, but add a non-leading discovery check in kickoff calls to surface access blockers earlier before dispatch.',
  },
  {
    id: 'connectivity',
    label: 'Fleet connectivity',
    value: '96.2%',
    trend: '↑ after gateway patch',
    whyItMatters:
      'If devices stop reporting, every downstream insight is stale — CS loses trust first, then Sales cannot demo live data.',
    insightNoticed:
      'Two sites with cellular backhaul latency caused 30s MQTT delays — root cause was router QoS, not LoRaWAN join failures.',
    pmDecision:
      'Ship reference router config as part of onboarding, and communicate the tradeoff: slightly longer setup for materially fewer stale-data incidents.',
  },
  {
    id: 'sites-at-risk',
    label: 'Sites at risk',
    value: '6',
    trend: '↓ from 8 last week',
    whyItMatters:
      'At-risk sites are churn signals before they become churn events. CS needs a ranked list with recommended actions, not a raw alert feed.',
    insightNoticed:
      'Four of six at-risk sites share gateway intermittency plus afternoon peak spikes, suggesting one linked failure mode rather than separate incidents.',
    pmDecision:
      'Bundle gateway health + peak load into one insight card, then run a post-launch review in two weeks to validate if interventions actually reduce risk counts.',
  },
];
