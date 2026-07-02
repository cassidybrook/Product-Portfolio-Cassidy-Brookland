export type Severity = 'critical' | 'warning' | 'info' | 'success';
export type Trend = 'up' | 'down' | 'flat';
export type Sentiment = 'positive' | 'neutral' | 'negative';

export interface HeadlineMetric {
  label: string;
  value: string;
  context: string;
  trend?: Trend;
  trendLabel?: string;
  severity?: Severity;
}

export interface Insight {
  id: string;
  title: string;
  summary: string;
  severity: Severity;
  action: string;
  site?: string;
  timestamp: string;
}

export interface SiteHealth {
  id: string;
  name: string;
  region: string;
  status: 'healthy' | 'at-risk' | 'offline';
  peakLoadKw: number;
  peakReductionPct: number;
  devicesOnline: number;
  devicesTotal: number;
  lastContact: string;
}

export interface OnboardPipeline {
  month: string;
  target: number;
  completed: number;
  inProgress: number;
}

export interface SalesOpportunity {
  id: string;
  account: string;
  sites: number;
  stage: string;
  estimatedArr: number;
  nextStep: string;
  confidence: 'high' | 'medium' | 'low';
}

export interface MarketingImpact {
  metric: string;
  value: string;
  narrative: string;
  trend: Trend;
}

export interface DeploymentSite {
  id: string;
  name: string;
  stage: 'planning' | 'install' | 'commissioning' | 'live';
  electrician: string;
  lorawanGateway: 'online' | 'degraded' | 'offline';
  blockers: string[];
  etaDays: number;
}

export interface FleetMetric {
  label: string;
  value: number;
  unit: string;
  status: Severity;
}

export interface EnergyTrendPoint {
  date: string;
  peakKw: number;
  baselineKw: number;
  savingsKw: number;
}

export interface ConnectivityPoint {
  hour: string;
  onlinePct: number;
}

export interface DashboardData {
  productName: string;
  lastUpdated: string;
  portfolioSummary: string;
  customerSuccess: {
    headline: HeadlineMetric;
    insights: Insight[];
    sites: SiteHealth[];
  };
  sales: {
    headline: HeadlineMetric;
    pipeline: OnboardPipeline[];
    opportunities: SalesOpportunity[];
    insights: Insight[];
  };
  marketing: {
    headline: HeadlineMetric;
    impacts: MarketingImpact[];
    energyTrend: EnergyTrendPoint[];
    insights: Insight[];
  };
  ops: {
    headline: HeadlineMetric;
    fleet: FleetMetric[];
    deployments: DeploymentSite[];
    connectivity: ConnectivityPoint[];
    insights: Insight[];
  };
}
