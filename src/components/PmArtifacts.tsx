import { useState } from 'react';
import { pmArtifacts } from '../data/pmArtifactsData';
import { SectionHeader, SectionShell } from './ui/SectionShell';

type ArtifactSection =
  | 'architecture'
  | 'journey'
  | 'api-flow'
  | 'prioritization'
  | 'roadmap'
  | 'ab-tests'
  | 'tradeoffs'
  | 'risks';

const sections: { id: ArtifactSection; label: string }[] = [
  { id: 'architecture', label: 'Architecture' },
  { id: 'journey', label: 'User journey' },
  { id: 'api-flow', label: 'Data flow' },
  { id: 'prioritization', label: 'RICE + impact matrix' },
  { id: 'roadmap', label: 'Now / Next / Later' },
  { id: 'ab-tests', label: 'A/B tests' },
  { id: 'tradeoffs', label: 'Tradeoffs' },
  { id: 'risks', label: 'Risks & assumptions' },
];

const impactColor = { high: 'text-brand-400', medium: 'text-amber-400', low: 'text-slate-400' };

export function PmArtifacts() {
  const [active, setActive] = useState<ArtifactSection>('architecture');

  return (
    <SectionShell padding="lg">
      <SectionHeader
        eyebrow="PM artifacts"
        title="How I think about the product"
        subtitle="Fictional composite artifacts showing transparent prioritization, option framing, and delivery sequencing."
      />

      <nav className="mb-6 flex flex-wrap gap-2">
        {sections.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setActive(s.id)}
            className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
              active === s.id
                ? 'bg-brand-600 text-white'
                : 'border border-white/10 text-slate-400 hover:text-white'
            }`}
          >
            {s.label}
          </button>
        ))}
      </nav>

      <div className="tab-panel-enter" key={active}>
        {active === 'architecture' && (
          <div>
            <p className="mb-4 text-sm text-slate-400">
              Devices → LoRaWAN gateway → network server → AWS IoT / cloud → stakeholder
              dashboards. Data flows left to right; each layer is independently monitorable.
            </p>
            <div className="flex flex-col items-stretch gap-2 lg:flex-row lg:items-center">
              {pmArtifacts.architecture.layers.map((layer, i) => (
                <div key={layer.name} className="flex flex-1 flex-col gap-2 lg:flex-row lg:items-center">
                  <article className="flex-1 rounded-xl border border-brand-500/25 bg-[#1b1e24] p-4">
                    <span className="text-xs font-bold text-brand-500">L{i + 1}</span>
                    <h4 className="mt-1 font-semibold text-slate-100">{layer.name}</h4>
                    <ul className="mt-3 space-y-1">
                      {layer.components.map((c) => (
                        <li key={c} className="text-xs text-slate-400">
                          · {c}
                        </li>
                      ))}
                    </ul>
                  </article>
                  {i < pmArtifacts.architecture.layers.length - 1 && (
                    <span
                      aria-hidden
                      className="self-center text-xl font-bold text-brand-400 lg:px-1"
                    >
                      <span className="hidden lg:inline">→</span>
                      <span className="lg:hidden">↓</span>
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {active === 'journey' && (
          <ol className="space-y-4">
            {pmArtifacts.userJourney.map((step) => (
              <li
                key={step.step}
                className="flex gap-4 rounded-xl border border-white/5 bg-[#1b1e24] p-4"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-sm font-bold text-brand-400">
                  {step.step}
                </span>
                <div>
                  <p className="font-semibold text-slate-200">{step.actor}</p>
                  <p className="mt-1 text-sm text-slate-400">{step.action}</p>
                  <p className="mt-2 text-sm text-brand-300/90">→ {step.outcome}</p>
                </div>
              </li>
            ))}
          </ol>
        )}

        {active === 'api-flow' && (
          <div className="space-y-3">
            {pmArtifacts.apiFlow.map((flow) => (
              <article
                key={flow.step}
                className="flex flex-wrap items-center gap-3 rounded-xl border border-white/5 bg-[#1b1e24] p-4 text-sm"
              >
                <span className="font-mono text-xs text-slate-500">#{flow.step}</span>
                <span className="font-medium text-slate-200">{flow.from}</span>
                <span className="text-brand-400">→</span>
                <span className="font-medium text-slate-200">{flow.to}</span>
                <span className="rounded-full bg-slate-800 px-2 py-0.5 text-xs text-slate-400">
                  {flow.protocol}
                </span>
                <p className="w-full text-slate-400">{flow.detail}</p>
              </article>
            ))}
          </div>
        )}

        {active === 'prioritization' && (
          <div className="overflow-x-auto">
            <table className="data-table w-full min-w-[560px] text-sm">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Impact</th>
                  <th>Effort</th>
                  <th>RICE rationale</th>
                </tr>
              </thead>
              <tbody>
                {pmArtifacts.prioritization.map((item) => (
                  <tr key={item.name}>
                    <td className="font-medium text-slate-200">{item.name}</td>
                    <td className={impactColor[item.impact]}>{item.impact}</td>
                    <td className={impactColor[item.effort]}>{item.effort}</td>
                    <td className="text-slate-400">{item.rationale}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {active === 'roadmap' && (
          <div className="grid gap-4 sm:grid-cols-3">
            {pmArtifacts.roadmap.map((q) => (
              <article
                key={q.quarter}
                className="rounded-xl border border-brand-500/20 bg-brand-500/5 p-4"
              >
                <p className="text-xs font-bold text-brand-400">{q.quarter}</p>
                <h4 className="mt-1 font-semibold text-slate-100">{q.theme}</h4>
                <ul className="mt-3 space-y-1.5">
                  {q.items.map((item) => (
                    <li key={item} className="text-sm text-slate-400">
                      · {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        )}

        {active === 'ab-tests' && (
          <div className="space-y-4">
            {pmArtifacts.abTests.map((test) => (
              <article
                key={test.hypothesis}
                className="rounded-xl border border-white/5 bg-[#1b1e24] p-4"
              >
                <p className="font-medium text-slate-200">{test.hypothesis}</p>
                <p className="mt-2 text-sm text-slate-400">
                  <span className="text-slate-300">Variant · </span>
                  {test.variant}
                </p>
                <p className="mt-2 text-sm text-brand-300">
                  <span className="font-medium">Success metric · </span>
                  {test.metric}
                </p>
              </article>
            ))}
          </div>
        )}

        {active === 'tradeoffs' && (
          <div className="space-y-4">
            {pmArtifacts.tradeoffs.map((t) => (
              <article
                key={t.option}
                className="rounded-xl border border-white/5 bg-[#1b1e24] p-4"
              >
                <h4 className="font-semibold text-slate-100">{t.option}</h4>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <div>
                    <p className="text-xs font-semibold text-brand-400">Pros</p>
                    <ul className="mt-1 space-y-1">
                      {t.pros.map((p) => (
                        <li key={p} className="text-sm text-slate-400">
                          + {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-amber-400">Cons</p>
                    <ul className="mt-1 space-y-1">
                      {t.cons.map((c) => (
                        <li key={c} className="text-sm text-slate-400">
                          − {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p className="action-callout mt-4">
                  <span className="font-semibold text-brand-300">Decision · </span>
                  {t.decision}
                </p>
              </article>
            ))}
          </div>
        )}

        {active === 'risks' && (
          <ul className="space-y-3">
            {pmArtifacts.risksAssumptions.map((ra) => (
              <li
                key={ra.item}
                className="rounded-xl border border-white/5 bg-[#1b1e24] p-4"
              >
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${
                    ra.type === 'risk'
                      ? 'bg-red-500/15 text-red-300'
                      : 'bg-sky-500/15 text-sky-300'
                  }`}
                >
                  {ra.type}
                </span>
                <p className="mt-2 font-medium text-slate-200">{ra.item}</p>
                <p className="mt-2 text-sm text-slate-400">
                  <span className="text-slate-300">Mitigation · </span>
                  {ra.mitigation}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </SectionShell>
  );
}
