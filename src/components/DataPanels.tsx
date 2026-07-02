import type { DeploymentSite, FleetMetric, MarketingImpact, SalesOpportunity } from '../types';
import { SeverityBadge, TrendIndicator } from './HeadlineCard';
import { SectionHeader, SectionShell } from './ui/SectionShell';

interface SalesPipelineProps {
  opportunities: SalesOpportunity[];
}

const confidenceStyles: Record<SalesOpportunity['confidence'], string> = {
  high: 'rounded-full bg-brand-500/15 px-2 py-0.5 text-xs font-semibold text-brand-400',
  medium: 'rounded-full bg-amber-500/15 px-2 py-0.5 text-xs font-semibold text-amber-400',
  low: 'rounded-full bg-slate-700/50 px-2 py-0.5 text-xs font-semibold text-slate-400',
};

export function SalesPipelineTable({ opportunities }: SalesPipelineProps) {
  return (
    <SectionShell>
      <SectionHeader
        eyebrow="Pipeline"
        title="Expansion opportunities"
        subtitle="Energy-sector accounts in motion — technical walkthroughs and ROI proof points."
      />
      <div className="overflow-x-auto rounded-xl border border-white/[0.04]">
        <table className="data-table w-full min-w-[720px] text-left text-sm">
          <thead>
            <tr>
              <th>Account</th>
              <th>Stage</th>
              <th>Sites</th>
              <th>Est. ARR</th>
              <th>Confidence</th>
              <th>Next step</th>
            </tr>
          </thead>
          <tbody>
            {opportunities.map((opp) => (
              <tr key={opp.id}>
                <td className="font-medium text-slate-100">{opp.account}</td>
                <td className="text-slate-300">{opp.stage}</td>
                <td className="font-mono text-slate-300">{opp.sites}</td>
                <td className="font-semibold text-brand-300">
                  ${(opp.estimatedArr / 1000).toFixed(0)}k
                </td>
                <td>
                  <span className={confidenceStyles[opp.confidence]}>{opp.confidence}</span>
                </td>
                <td className="max-w-xs text-slate-400">{opp.nextStep}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SectionShell>
  );
}

interface MarketingImpactGridProps {
  impacts: MarketingImpact[];
}

export function MarketingImpactGrid({ impacts }: MarketingImpactGridProps) {
  return (
    <section className="grid gap-4 sm:grid-cols-2">
      {impacts.map((impact) => (
        <article key={impact.metric} className="glass-panel-hover p-5 sm:p-6">
          <p className="text-sm font-medium text-slate-400">{impact.metric}</p>
          <p className="metric-value mt-3">
            <span className="gradient-text-hero">{impact.value}</span>
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-400">{impact.narrative}</p>
          <div className="mt-4">
            <TrendIndicator trend={impact.trend} label="vs last quarter" />
          </div>
        </article>
      ))}
    </section>
  );
}

interface FleetStatsProps {
  metrics: FleetMetric[];
}

export function FleetStats({ metrics }: FleetStatsProps) {
  return (
    <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <article key={metric.label} className="glass-panel-hover p-5">
          <div className="flex items-start justify-between gap-2">
            <p className="text-sm font-medium text-slate-400">{metric.label}</p>
            <SeverityBadge severity={metric.status} />
          </div>
          <p className="mt-3 font-display text-3xl font-bold text-white">
            {metric.value}
            <span className="ml-1.5 text-sm font-normal text-slate-500">{metric.unit}</span>
          </p>
        </article>
      ))}
    </section>
  );
}

interface DeploymentBoardProps {
  deployments: DeploymentSite[];
}

const stageLabels: Record<DeploymentSite['stage'], string> = {
  planning: 'Planning',
  install: 'Install',
  commissioning: 'Commissioning',
  live: 'Live',
};

const stageColors: Record<DeploymentSite['stage'], string> = {
  planning: 'bg-slate-700/80 text-slate-300',
  install: 'bg-sky-500/15 text-sky-300',
  commissioning: 'bg-amber-500/15 text-amber-300',
  live: 'bg-brand-500/15 text-brand-300',
};

const gatewaySeverity: Record<
  DeploymentSite['lorawanGateway'],
  'success' | 'warning' | 'critical'
> = {
  online: 'success',
  degraded: 'warning',
  offline: 'critical',
};

export function DeploymentBoard({ deployments }: DeploymentBoardProps) {
  return (
    <SectionShell>
      <SectionHeader
        eyebrow="Field ops"
        title="Active deployments"
        subtitle="Site lifecycle — contractor coordination, gateway status, and blockers."
      />
      <div className="grid gap-4 lg:grid-cols-2">
        {deployments.map((site) => (
          <article
            key={site.id}
            className="glass-panel-hover rounded-xl p-4 sm:p-5"
          >
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <h4 className="font-semibold text-slate-100">{site.name}</h4>
                <p className="mt-0.5 text-xs text-slate-500">{site.electrician}</p>
              </div>
              <span
                className={`rounded-full px-2.5 py-1 text-xs font-semibold ${stageColors[site.stage]}`}
              >
                {stageLabels[site.stage]}
              </span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <SeverityBadge
                severity={gatewaySeverity[site.lorawanGateway]}
                label={`Gateway ${site.lorawanGateway}`}
              />
              <span className="rounded-full border border-white/[0.06] bg-white/[0.03] px-2.5 py-1 text-xs text-slate-400">
                ETA {site.etaDays} days
              </span>
            </div>
            {site.blockers.length > 0 ? (
              <ul className="mt-4 space-y-2">
                {site.blockers.map((blocker) => (
                  <li
                    key={blocker}
                    className="rounded-lg border border-amber-500/20 bg-amber-500/5 px-3 py-2 text-sm text-amber-200/90"
                  >
                    {blocker}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 rounded-lg border border-brand-500/20 bg-brand-500/5 px-3 py-2 text-sm font-medium text-brand-300">
                No blockers — on track
              </p>
            )}
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
