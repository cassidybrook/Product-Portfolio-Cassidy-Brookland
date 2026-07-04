export interface CaseStudy {
  id: string;
  name: string;
  context: string;
  scenario: string;
  optionFinding: string;
  tradeoff: string;
  postLaunch: string;
  outcome: string;
  frameworks: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'pastureiq',
    name: 'PastureIQ (fictional composite)',
    context:
      'Remote grain monitoring across distributed rural sites using low-power, long-range telemetry for temperature, moisture, and fill level.',
    scenario:
      'A firmware update caused intermittent false spoilage alerts when battery voltage dipped overnight. Instead of rolling back immediately, I paired event traces with field-call logs to separate sensor drift from gateway packet duplication.',
    optionFinding:
      'I ran non-leading interviews with growers, grain buyers, and support coordinators to understand impact before proposing fixes. We compared three options: threshold tuning only, firmware patch only, or staged firmware plus support playbook updates.',
    tradeoff:
      'For scale, we chose a distributor-ready configuration model over farm-by-farm customization. This increased standardization and reduced support burden, while accepting fewer bespoke dashboard tweaks per account.',
    postLaunch:
      'After launch, alert fatigue still appeared in one region. The next cycle added confidence scoring to alerts and a weekly anomaly digest for farm operations teams.',
    outcome:
      'False-positive spoilage alerts dropped by 41% over two release cycles, and average deployment prep time per site fell from 9 days to 6 days.',
    frameworks: ['CIRCLES', 'RICE', 'Effort vs impact'],
  },
  {
    id: 'wattwallet',
    name: 'WattWallet (fictional composite)',
    context:
      'Multi-site smart-building energy monitoring focused on peak demand reduction with decision-ready views for Customer Success, Sales, Ops, and Marketing.',
    scenario:
      'Sales wanted a simplified customer view, Engineering wanted full telemetry visibility, and Ops needed actionable alerting. I facilitated stakeholder-inclusive option workshops rather than selecting one side upfront.',
    optionFinding:
      'We tested three prototype paths with stakeholders: raw telemetry-first, summary-first, and role-based views. Role-based views won because each team could answer what happened, why it matters, and what action to take next.',
    tradeoff:
      'We intentionally hid low-value raw fields from the default experience. The tradeoff was less technical flexibility in exchange for faster decision-making by non-technical users.',
    postLaunch:
      'Initial launch looked successful, but onboarding teams underused the alert workflow. In the next iteration, we introduced severity narratives and action owner fields, which improved follow-through.',
    outcome:
      'Sites using the updated workflow reduced unresolved high-severity alerts by 34% and sustained onboarding throughput at 3 sites per month.',
    frameworks: ['Now / Next / Later', 'RICE', 'Effort vs impact'],
  },
];
