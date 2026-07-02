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
      'Sites with automated HVAC scheduling see 22%+ reduction vs 8% for manual-only sites — the gap is a product opportunity, not a customer training issue.',
    pmDecision:
      'Prioritise smart scheduling templates in Q3 roadmap. Package before/after peak charts as a standard Marketing asset for every go-live.',
  },
  {
    id: 'onboards',
    label: 'Monthly onboards',
    value: '3 / 3',
    trend: 'On KPI target',
    whyItMatters:
      'Onboarding velocity is the leading indicator for revenue growth and customer confidence. Miss the KPI and expansion conversations stall.',
    insightNoticed:
      'Sites using reusable LoRaWAN config templates onboard 20% faster — the bottleneck shifted from engineering to site access, not device join.',
    pmDecision:
      'Extend template library to the next regional rollout. Add a “site access confirmed” gate in the deployment board before electrician dispatch.',
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
      'Ship reference router config as part of onboarding checklist. Add connectivity SLA to CS health dashboard with auto-escalation below 95%.',
  },
  {
    id: 'sites-at-risk',
    label: 'Sites at risk',
    value: '3',
    trend: '↓ from 5 last week',
    whyItMatters:
      'At-risk sites are churn signals before they become churn events. CS needs a ranked list with recommended actions, not a raw alert feed.',
    insightNoticed:
      'Two of three at-risk sites share the same pattern — gateway intermittency plus afternoon peak spikes. Likely correlated, not independent issues.',
    pmDecision:
      'Bundle gateway health + peak load into a single CS insight card. Schedule proactive outreach before the customer opens a ticket.',
  },
];
