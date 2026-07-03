import { useState } from 'react';
import { KpiInsightPanel } from './KpiInsightPanel';
import type { KpiInsight } from '../types/pmArtifacts';
import { SectionHeader, SectionShell } from './ui/SectionShell';

interface KpiDashboardProps {
  items: KpiInsight[];
  title?: string;
  subtitle?: string;
}

export function KpiDashboard({
  items,
  title = 'Click a KPI to see PM thinking',
  subtitle = "Each metric opens a panel with why it matters, what I noticed, and what I would do next as product manager.",
}: KpiDashboardProps) {
  const [selected, setSelected] = useState<KpiInsight | null>(null);

  return (
    <>
      <SectionShell>
        <SectionHeader
          eyebrow="Interactive dashboard"
          title={title}
          subtitle={subtitle}
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((kpi) => (
            <button
              key={kpi.id}
              type="button"
              onClick={() => setSelected(kpi)}
              className={`glass-panel-hover group p-5 text-left transition-all ${
                selected?.id === kpi.id ? 'border-brand-500/40 shadow-glow' : ''
              }`}
            >
              <p className="text-xs font-medium uppercase tracking-wider text-slate-500 group-hover:text-brand-400">
                {kpi.label}
              </p>
              <p className="mt-2 font-display text-3xl font-bold text-slate-100">{kpi.value}</p>
              {kpi.trend && (
                <p className="mt-1 text-xs text-brand-400/90">{kpi.trend}</p>
              )}
              <p className="mt-3 text-xs text-slate-500 group-hover:text-slate-400">
                Click for PM insight →
              </p>
            </button>
          ))}
        </div>
      </SectionShell>

      <KpiInsightPanel kpi={selected} onClose={() => setSelected(null)} />
    </>
  );
}
