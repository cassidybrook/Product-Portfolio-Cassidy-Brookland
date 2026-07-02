export interface KpiInsight {
  id: string;
  label: string;
  value: string;
  trend?: string;
  whyItMatters: string;
  insightNoticed: string;
  pmDecision: string;
}

export type DemoSectionTab = 'dashboard' | 'stakeholders' | 'artifacts';

export interface PrioritizationItem {
  name: string;
  impact: 'high' | 'medium' | 'low';
  effort: 'high' | 'medium' | 'low';
  rationale: string;
}

export interface RoadmapItem {
  quarter: string;
  theme: string;
  items: string[];
}

export interface AbTestIdea {
  hypothesis: string;
  variant: string;
  metric: string;
}

export interface FeatureTradeoff {
  option: string;
  pros: string[];
  cons: string[];
  decision: string;
}

export interface RiskAssumption {
  type: 'risk' | 'assumption';
  item: string;
  mitigation: string;
}

export interface PmArtifactsData {
  architecture: { layers: { name: string; components: string[] }[] };
  userJourney: { step: number; actor: string; action: string; outcome: string }[];
  apiFlow: { step: number; from: string; to: string; protocol: string; detail: string }[];
  prioritization: PrioritizationItem[];
  roadmap: RoadmapItem[];
  abTests: AbTestIdea[];
  tradeoffs: FeatureTradeoff[];
  risksAssumptions: RiskAssumption[];
}
