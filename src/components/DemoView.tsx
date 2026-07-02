import { useState, type ReactNode } from 'react';
import { dashboardData } from '../data/fakeData';
import type { DemoSectionTab, DemoStakeholderTab } from '../types/navigation';
import { HeadlineCard } from './HeadlineCard';
import { InsightList } from './InsightList';
import { KpiDashboard } from './KpiDashboard';
import { PmArtifacts } from './PmArtifacts';
import { SiteHealthTable } from './SiteHealthTable';
import { ConnectivityChart, EnergyTrendChart, OnboardChart } from './Charts';
import {
  DeploymentBoard,
  FleetStats,
  MarketingImpactGrid,
  SalesPipelineTable,
} from './DataPanels';
import { StakeholderTabNav } from './StakeholderTabNav';
import { SectionHeader, SectionShell } from './ui/SectionShell';

function CustomerSuccessView() {
  const { headline, insights, sites } = dashboardData.customerSuccess;
  return (
    <div className="space-y-8">
      <HeadlineCard {...headline} invertTrend />
      <InsightList
        title="Priority insights"
        subtitle="Human-readable signals — what needs a CS conversation this week"
        insights={insights}
      />
      <SiteHealthTable sites={sites} />
    </div>
  );
}

function SalesView() {
  const { headline, pipeline, opportunities, insights } = dashboardData.sales;
  return (
    <div className="space-y-8">
      <HeadlineCard {...headline} />
      <OnboardChart data={pipeline} />
      <SalesPipelineTable opportunities={opportunities} />
      <InsightList
        title="Revenue signals"
        subtitle="ROI stories and partnership momentum for expansion conversations"
        insights={insights}
      />
    </div>
  );
}

function MarketingView() {
  const { headline, impacts, energyTrend, insights } = dashboardData.marketing;
  return (
    <div className="space-y-8">
      <HeadlineCard {...headline} />
      <MarketingImpactGrid impacts={impacts} />
      <EnergyTrendChart data={energyTrend} />
      <InsightList
        title="Story-ready insights"
        subtitle="Proof points for case studies, events, and energy-sector messaging"
        insights={insights}
      />
    </div>
  );
}

function OpsView() {
  const { headline, fleet, deployments, connectivity, insights } = dashboardData.ops;
  return (
    <div className="space-y-8">
      <HeadlineCard {...headline} />
      <FleetStats metrics={fleet} />
      <div className="grid gap-8 xl:grid-cols-2">
        <ConnectivityChart data={connectivity} />
        <DeploymentBoard deployments={deployments} />
      </div>
      <InsightList
        title="Operational insights"
        subtitle="Deployment pipeline, network health, and platform improvements"
        insights={insights}
      />
    </div>
  );
}

const stakeholderViews: Record<DemoStakeholderTab, () => ReactNode> = {
  'customer-success': CustomerSuccessView,
  sales: SalesView,
  marketing: MarketingView,
  ops: OpsView,
};

const sectionTabs: { id: DemoSectionTab; label: string; description: string }[] = [
  { id: 'dashboard', label: 'KPI dashboard', description: 'Click a metric for PM thinking' },
  { id: 'stakeholders', label: 'Stakeholder views', description: 'CS · Sales · Marketing · Ops' },
  { id: 'artifacts', label: 'PM artifacts', description: 'Architecture, roadmap & tradeoffs' },
];

interface DemoViewProps {
  section: DemoSectionTab;
  onSectionChange: (section: DemoSectionTab) => void;
}

export function DemoView({ section, onSectionChange }: DemoViewProps) {
  const [activeStakeholder, setActiveStakeholder] =
    useState<DemoStakeholderTab>('customer-success');
  const ActiveStakeholderView = stakeholderViews[activeStakeholder];

  return (
    <div className="space-y-8">
      <SectionShell variant="brand" padding="lg">
        <SectionHeader
          eyebrow="Work sample"
          title="GridPulse — a fictional IoT energy product"
          subtitle="This demo shows how I translate complex IoT telemetry into stakeholder-ready insights — the same approach I use for PRDs, sprint planning, and customer-facing reporting. Every site name, metric, and account is synthetic."
        />
        <ul className="grid gap-2 sm:grid-cols-3">
          <li className="rounded-xl border border-white/10 bg-[#1b1e24] px-4 py-3 text-sm text-slate-400">
            <span className="font-semibold text-slate-200">Who it&apos;s for</span>
            <br />
            CS, Sales, Marketing & Ops — not engineers reading raw JSON
          </li>
          <li className="rounded-xl border border-white/10 bg-[#1b1e24] px-4 py-3 text-sm text-slate-400">
            <span className="font-semibold text-slate-200">What it shows</span>
            <br />
            Peak load, LoRaWAN fleet health, deployment KPIs & actionable next steps
          </li>
          <li className="rounded-xl border border-white/10 bg-[#1b1e24] px-4 py-3 text-sm text-slate-400">
            <span className="font-semibold text-slate-200">How it was built</span>
            <br />
            Designed & built in Cursor — AI-assisted, human-verified
          </li>
        </ul>
      </SectionShell>

      <nav
        className="glass-panel flex flex-col gap-1 p-1.5 sm:flex-row"
        role="tablist"
        aria-label="Demo sections"
      >
        {sectionTabs.map((tab) => {
          const isActive = section === tab.id;
          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => onSectionChange(tab.id)}
              className={`flex-1 rounded-xl px-4 py-3 text-left transition-all duration-300 ${
                isActive
                  ? 'bg-gradient-to-br from-brand-600 to-brand-700 text-white shadow-glow'
                  : 'text-slate-400 hover:bg-white/[0.03] hover:text-white'
              }`}
            >
              <span className="block text-sm font-semibold tracking-tight">{tab.label}</span>
              <span
                className={`mt-0.5 block text-[11px] ${
                  isActive ? 'text-white/75' : 'text-slate-500'
                }`}
              >
                {tab.description}
              </span>
            </button>
          );
        })}
      </nav>

      <div className="tab-panel-enter" role="tabpanel" key={section}>
        {section === 'dashboard' && <KpiDashboard />}

        {section === 'stakeholders' && (
          <div className="space-y-8">
            <div>
              <p className="eyebrow mb-3">Explore by stakeholder</p>
              <StakeholderTabNav active={activeStakeholder} onChange={setActiveStakeholder} />
            </div>
            <div className="tab-panel-enter" role="tabpanel" key={activeStakeholder}>
              <ActiveStakeholderView />
            </div>
          </div>
        )}

        {section === 'artifacts' && <PmArtifacts />}
      </div>
    </div>
  );
}
