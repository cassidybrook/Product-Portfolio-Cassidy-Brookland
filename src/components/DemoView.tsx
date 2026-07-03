import { useMemo, useState } from 'react';
import {
  demoSectionOrder,
  productDemos,
  type DemoDetailSectionId,
  type ProductDemoCase,
} from '../data/productDemos';
import type { DemoSectionTab } from '../types/navigation';
import { KpiDashboard } from './KpiDashboard';
import { SectionHeader, SectionShell } from './ui/SectionShell';

interface DemoViewProps {
  section: DemoSectionTab;
  onSectionChange: (section: DemoSectionTab) => void;
}

export function DemoView({ section, onSectionChange }: DemoViewProps) {
  const [activeSectionByDemo, setActiveSectionByDemo] = useState<
    Record<'silosense' | 'gridpulse', DemoDetailSectionId>
  >({
    silosense: 'problem',
    gridpulse: 'problem',
  });

  const activeDemo = section === 'landing' ? null : productDemos[section];

  return (
    <div className="space-y-8">
      <SectionShell variant="brand" padding="lg">
        <SectionHeader
          eyebrow="Product demo"
          title="Two synthetic end to end product demos"
          subtitle="Choose one complete flow and review discovery through post launch iteration. All names, metrics, and scenarios in this tab are invented for demonstration."
        />
        <div className="grid gap-4 md:grid-cols-2">
          <DemoEntryCard
            demo={productDemos.silosense}
            active={section === 'silosense'}
            onOpen={() => onSectionChange('silosense')}
          />
          <DemoEntryCard
            demo={productDemos.gridpulse}
            active={section === 'gridpulse'}
            onOpen={() => onSectionChange('gridpulse')}
          />
        </div>
      </SectionShell>

      {activeDemo && (
        <DemoCaseView
          demo={activeDemo}
          activeSection={activeSectionByDemo[activeDemo.id]}
          onSectionChange={(next) =>
            setActiveSectionByDemo((prev) => ({ ...prev, [activeDemo.id]: next }))
          }
        />
      )}
    </div>
  );
}

interface DemoEntryCardProps {
  demo: ProductDemoCase;
  active: boolean;
  onOpen: () => void;
}

function DemoEntryCard({ demo, active, onOpen }: DemoEntryCardProps) {
  return (
    <article
      className={`rounded-xl border p-5 transition ${
        active
          ? 'border-brand-500/40 bg-brand-500/10 shadow-glow'
          : 'border-white/10 bg-[#1b1e24] hover:border-brand-500/30'
      }`}
    >
      <h3 className="text-lg font-semibold text-slate-100">{demo.label}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-400">{demo.shortDescription}</p>
      <button
        type="button"
        onClick={onOpen}
        className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-300 transition hover:text-brand-200"
      >
        Open full demo flow →
      </button>
    </article>
  );
}

interface DemoCaseViewProps {
  demo: ProductDemoCase;
  activeSection: DemoDetailSectionId;
  onSectionChange: (section: DemoDetailSectionId) => void;
}

function DemoCaseView({ demo, activeSection, onSectionChange }: DemoCaseViewProps) {
  const riceWithScore = useMemo(() => {
    if (!demo.prioritization.rice) return [];
    return demo.prioritization.rice.map((item) => ({
      ...item,
      score: ((item.reach * item.impact * item.confidence) / 100 / item.effort).toFixed(1),
    }));
  }, [demo.prioritization.rice]);

  return (
    <div className="space-y-6">
      <SectionShell>
        <SectionHeader
          eyebrow={demo.label}
          title="End to end product lifecycle"
          subtitle={demo.syntheticDisclosure}
        />
        <nav className="flex flex-wrap gap-2" role="tablist" aria-label={`${demo.label} sections`}>
          {demoSectionOrder.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => onSectionChange(item.id)}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                  isActive
                    ? 'bg-brand-600 text-white'
                    : 'border border-white/10 text-slate-400 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>
      </SectionShell>

      {activeSection === 'problem' && (
        <SectionShell>
          <SectionHeader eyebrow="1. Problem framing" title="What is broken and why now" />
          <p className="text-sm leading-relaxed text-slate-300">{demo.problemFraming}</p>
        </SectionShell>
      )}

      {activeSection === 'discovery' && (
        <SectionShell>
          <SectionHeader eyebrow="2. Discovery" title="How I tested assumptions" />
          <p className="text-sm leading-relaxed text-slate-300">{demo.discovery.approach}</p>
          <div className="mt-4 space-y-2">
            {demo.discovery.questions.map((entry) => (
              <article key={entry.question} className="rounded-lg border border-white/10 bg-[#1b1e24] p-3">
                <p className="text-sm text-slate-300">{entry.question}</p>
              </article>
            ))}
          </div>
          <p className="mt-4 rounded-lg border border-brand-500/25 bg-brand-500/10 p-3 text-sm text-brand-100">
            <span className="font-semibold">What changed my initial assumption: </span>
            {demo.discovery.learningShift}
          </p>
        </SectionShell>
      )}

      {activeSection === 'stories' && (
        <SectionShell>
          <SectionHeader eyebrow="3. User stories" title="Who needs what and why" />
          <div className="grid gap-3 md:grid-cols-2">
            {demo.userStories.map((story) => (
              <article key={`${story.role}-${story.goal}`} className="rounded-lg border border-white/10 bg-[#1b1e24] p-3">
                <p className="text-sm text-slate-300">
                  As a <span className="font-semibold text-brand-300">{story.role}</span>, I want{' '}
                  <span className="font-semibold text-slate-100">{story.goal}</span>, so that {story.outcome}.
                </p>
              </article>
            ))}
          </div>
        </SectionShell>
      )}

      {activeSection === 'prioritization' && (
        <SectionShell>
          <SectionHeader
            eyebrow="4. Prioritization"
            title="Frameworks applied to concrete options"
          />
          {demo.prioritization.rice && (
            <div className="overflow-x-auto">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-brand-300">
                RICE scoring
              </p>
              <table className="data-table w-full min-w-[640px] text-sm">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>Reach</th>
                    <th>Impact</th>
                    <th>Confidence</th>
                    <th>Effort</th>
                    <th>RICE score</th>
                  </tr>
                </thead>
                <tbody>
                  {riceWithScore.map((item) => (
                    <tr key={item.name}>
                      <td className="font-medium text-slate-200">{item.name}</td>
                      <td>{item.reach}</td>
                      <td>{item.impact}</td>
                      <td>{item.confidence}%</td>
                      <td>{item.effort}</td>
                      <td className="text-brand-300">{item.score}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {demo.prioritization.roadmap && (
            <div className="grid gap-4 lg:grid-cols-3">
              {demo.prioritization.roadmap.map((lane) => (
                <article key={lane.lane} className="rounded-xl border border-white/10 bg-[#1b1e24] p-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-300">{lane.lane}</p>
                  <div className="mt-3 space-y-3">
                    {lane.items.map((item) => (
                      <div key={item.name}>
                        <p className="text-sm font-semibold text-slate-200">{item.name}</p>
                        <p className="text-xs text-slate-400">{item.reasoning}</p>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          )}

          <EffortImpactMatrix items={demo.prioritization.effortImpact} />
        </SectionShell>
      )}

      {activeSection === 'architecture' && (
        <SectionShell>
          <SectionHeader eyebrow="5. Architecture and data flow" title="How data moves through the product" />
          <p className="text-sm text-slate-300">{demo.architecture.summary}</p>
          <div className="mt-4 space-y-3">
            {demo.architecture.steps.map((step) => (
              <article key={`${step.from}-${step.to}`} className="rounded-lg border border-white/10 bg-[#1b1e24] p-3">
                <p className="text-sm font-semibold text-slate-100">
                  {step.from} → {step.to}
                </p>
                <p className="text-xs text-brand-300">{step.protocol}</p>
                <p className="mt-1 text-sm text-slate-400">{step.note}</p>
              </article>
            ))}
          </div>
        </SectionShell>
      )}

      {activeSection === 'decision' && (
        <SectionShell>
          <SectionHeader
            eyebrow="6. Stakeholder inclusive decision moment"
            title="Option finding with transparent tradeoffs"
          />
          <p className="text-sm text-slate-300">{demo.decisionMoment.conflict}</p>
          <p className="mt-2 text-sm text-slate-400">
            <span className="text-slate-300">Who was involved: </span>
            {demo.decisionMoment.participants.join(', ')}
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {demo.decisionMoment.options.map((option) => (
              <article key={option.option} className="rounded-lg border border-white/10 bg-[#1b1e24] p-3">
                <p className="text-sm font-semibold text-slate-100">{option.option}</p>
                <p className="mt-2 text-xs text-brand-300">Benefit: {option.benefits}</p>
                <p className="mt-1 text-xs text-amber-300">Cost: {option.cost}</p>
              </article>
            ))}
          </div>
          <p className="mt-4 rounded-lg border border-brand-500/25 bg-brand-500/10 p-3 text-sm text-brand-100">
            <span className="font-semibold">Chosen option: </span>
            {demo.decisionMoment.chosen}
          </p>
        </SectionShell>
      )}

      {activeSection === 'kpis' && (
        <KpiDashboard
          items={demo.kpis}
          title="7. Interactive KPI element"
          subtitle="Click each KPI to inspect why it matters, what I noticed, and how that drives the next product decision."
        />
      )}

      {activeSection === 'postlaunch' && (
        <SectionShell>
          <SectionHeader
            eyebrow="8. Post launch iteration"
            title="Shipped is the start of the next cycle"
          />
          <p className="text-sm leading-relaxed text-slate-300">{demo.postLaunchIteration}</p>
        </SectionShell>
      )}

      {activeSection === 'outcomes' && (
        <SectionShell>
          <SectionHeader eyebrow="9. Outcome metrics" title="Before and after results" />
          <div className="grid gap-3 md:grid-cols-3">
            {demo.outcomes.map((metric) => (
              <article key={metric.label} className="rounded-lg border border-white/10 bg-[#1b1e24] p-4">
                <p className="text-xs uppercase tracking-wider text-slate-500">{metric.label}</p>
                <p className="mt-2 text-sm text-slate-300">
                  <span className="text-slate-400">Before: </span>
                  {metric.before}
                </p>
                <p className="text-sm text-brand-300">
                  <span className="text-slate-400">After: </span>
                  {metric.after}
                </p>
                <p className="mt-2 text-xs text-slate-400">{metric.note}</p>
              </article>
            ))}
          </div>
        </SectionShell>
      )}
    </div>
  );
}

interface EffortImpactMatrixProps {
  items: ProductDemoCase['prioritization']['effortImpact'];
}

function EffortImpactMatrix({ items }: EffortImpactMatrixProps) {
  const grouped = useMemo(() => {
    const base: Record<string, string[]> = {
      'quick-wins': [],
      'strategic-bets': [],
      'fill-ins': [],
      defer: [],
    };
    items.forEach((item) => {
      base[item.quadrant].push(item.name);
    });
    return base;
  }, [items]);

  const quadrantMeta: { key: keyof typeof grouped; title: string; subtitle: string }[] = [
    { key: 'quick-wins', title: 'High impact / Low effort', subtitle: 'Quick wins' },
    { key: 'strategic-bets', title: 'High impact / High effort', subtitle: 'Strategic bets' },
    { key: 'fill-ins', title: 'Low impact / Low effort', subtitle: 'Fill ins' },
    { key: 'defer', title: 'Low impact / High effort', subtitle: 'Defer' },
  ];

  return (
    <div className="mt-6">
      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-brand-300">
        Effort vs impact matrix
      </p>
      <div className="grid gap-3 md:grid-cols-2">
        {quadrantMeta.map((quadrant) => (
          <article key={quadrant.key} className="rounded-lg border border-white/10 bg-[#1b1e24] p-3">
            <p className="text-sm font-semibold text-slate-200">{quadrant.title}</p>
            <p className="text-xs text-slate-500">{quadrant.subtitle}</p>
            <ul className="mt-2 space-y-1">
              {grouped[quadrant.key].length > 0 ? (
                grouped[quadrant.key].map((name) => (
                  <li key={name} className="text-sm text-slate-300">
                    • {name}
                  </li>
                ))
              ) : (
                <li className="text-sm text-slate-500">No items</li>
              )}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
