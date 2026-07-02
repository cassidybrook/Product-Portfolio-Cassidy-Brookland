import type { KpiInsight } from '../types/pmArtifacts';

interface KpiInsightPanelProps {
  kpi: KpiInsight | null;
  onClose: () => void;
}

export function KpiInsightPanel({ kpi, onClose }: KpiInsightPanelProps) {
  if (!kpi) return null;

  return (
    <>
      <button
        type="button"
        aria-label="Close panel"
        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <aside
        className="fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col border-l border-white/10 bg-[#171b22] shadow-2xl animate-fade-up"
        role="dialog"
        aria-labelledby="kpi-panel-title"
      >
        <div className="flex items-start justify-between gap-4 border-b border-white/10 p-6">
          <div>
            <p className="eyebrow">PM lens</p>
            <h2 id="kpi-panel-title" className="mt-1 text-2xl font-bold text-slate-100">
              {kpi.label}
            </h2>
            <p className="mt-1 font-display text-3xl font-bold text-brand-400">{kpi.value}</p>
            {kpi.trend && <p className="mt-1 text-sm text-slate-400">{kpi.trend}</p>}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-white/10 p-2 text-slate-400 transition hover:bg-white/5 hover:text-white"
          >
            ✕
          </button>
        </div>

        <div className="flex-1 space-y-5 overflow-y-auto p-6">
          <section>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-brand-400">
              Why this metric matters
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">{kpi.whyItMatters}</p>
          </section>
          <section>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              Insight I noticed
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">{kpi.insightNoticed}</p>
          </section>
          <section className="action-callout">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-brand-300">
              Decision I&apos;d make as PM
            </h3>
            <p className="mt-2 text-sm leading-relaxed">{kpi.pmDecision}</p>
          </section>
        </div>
      </aside>
    </>
  );
}
