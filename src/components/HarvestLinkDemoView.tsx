import { useState } from 'react';
import { SectionHeader, SectionShell } from './ui/SectionShell';
import { WireframeScreen } from './ui/WireframeScreen';

type HarvestLinkSectionId =
  | 'problem'
  | 'discovery'
  | 'strategy'
  | 'business'
  | 'solution'
  | 'wireframe'
  | 'execution'
  | 'validation'
  | 'launch'
  | 'ai'
  | 'feedback';

const sections: { id: HarvestLinkSectionId; label: string }[] = [
  { id: 'problem', label: 'Problem framing' },
  { id: 'discovery', label: 'Discovery' },
  { id: 'strategy', label: 'Long term strategy' },
  { id: 'business', label: 'Business case' },
  { id: 'solution', label: 'Product Concept' },
  { id: 'wireframe', label: 'Wireframe UI' },
  { id: 'execution', label: 'Execution' },
  { id: 'validation', label: 'Data and validation' },
  { id: 'launch', label: 'Launch and communication' },
  { id: 'ai', label: 'AI integration' },
  { id: 'feedback', label: 'Feedback loops' },
];

const riceRows = [
  { feature: 'Managed marketplace with guarantee and pooled logistics', reach: 76, impact: 3, confidence: 68, effort: 9 },
  { feature: 'Listing only marketplace model', reach: 62, impact: 1, confidence: 74, effort: 4 },
  { feature: 'Buyer subscription ordering engine at launch', reach: 38, impact: 2, confidence: 61, effort: 8 },
];

function riceScore(row: (typeof riceRows)[number]) {
  return ((row.reach * row.impact * row.confidence) / 100 / row.effort).toFixed(1);
}

export function HarvestLinkDemoView() {
  const [active, setActive] = useState<HarvestLinkSectionId>('problem');

  return (
    <div className="space-y-8">
      <SectionShell>
        <SectionHeader
          eyebrow="Marketplace"
          title="HarvestLink: A Direct to Buyer Marketplace for Local Farms"
          subtitle="All names, metrics, and scenarios in this tab are invented for demonstration."
        />
        <nav className="flex flex-wrap gap-2" role="tablist" aria-label="HarvestLink phases">
          {sections.map((section) => {
            const isActive = active === section.id;
            return (
              <button
                key={section.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(section.id)}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                  isActive
                    ? 'bg-brand-600 text-white'
                    : 'border border-white/10 text-slate-400 hover:text-white'
                }`}
              >
                {section.label}
              </button>
            );
          })}
        </nav>
      </SectionShell>

      {active === 'problem' && (
        <SectionShell>
          <SectionHeader eyebrow="1. Problem framing" title="What was broken and why it mattered" />
          <p className="text-sm leading-relaxed text-slate-300">
            I framed HarvestLink around a two sided coordination gap. Small and mid size farms had
            produce surplus but sold through distributors at lower margins because payment timing and
            order certainty were predictable. Local restaurants and independent grocers wanted fresher
            direct supply, but managing many small supplier relationships felt operationally risky.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            The core issue was not price alone. It was trust, logistics, and payment certainty. Without
            solving those three constraints together, a direct marketplace would remain a trial channel
            rather than becoming a reliable default buying path.
          </p>
        </SectionShell>
      )}

      {active === 'discovery' && (
        <SectionShell>
          <SectionHeader eyebrow="2. Discovery" title="What I learned before defining the product" />
          <p className="text-sm leading-relaxed text-slate-300">
            I started with interviews, not assumptions. Farmers told me they stayed with distributors
            despite lower margins because payment reliability and low friction mattered more than list price.
            Buyers told me they wanted direct sourcing, but did not trust consistency across many farms and
            did not want to coordinate fragmented deliveries.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            I reviewed distributor economics to test where recoverable margin existed. The resulting brief
            showed a 19 percent average margin gap between distributor payout and buyer willingness for direct
            supply. The blocker was trust and logistics reliability, not headline price.
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            <article className="rounded-lg border border-white/10 bg-[#1b1e24] p-3">
              <p className="text-xs uppercase tracking-wider text-slate-500">Margin gap signal</p>
              <p className="mt-1 text-sm text-slate-300">Average 19% spread available</p>
            </article>
            <article className="rounded-lg border border-white/10 bg-[#1b1e24] p-3">
              <p className="text-xs uppercase tracking-wider text-slate-500">At risk buyer renewals</p>
              <p className="mt-1 text-sm text-slate-300">14% cited consistency concerns</p>
            </article>
            <article className="rounded-lg border border-white/10 bg-[#1b1e24] p-3">
              <p className="text-xs uppercase tracking-wider text-slate-500">Farmer pain point</p>
              <p className="mt-1 text-sm text-slate-300">Payment timing uncertainty</p>
            </article>
          </div>
        </SectionShell>
      )}

      {active === 'strategy' && (
        <SectionShell>
          <SectionHeader eyebrow="3. Long term strategy alignment" title="How I tied this to durable moat creation" />
          <p className="text-sm leading-relaxed text-slate-300">
            I framed HarvestLink around one thesis. The moat is owning trust and logistics between farms
            and buyers, not one standalone feature. That is why I sequenced investment as network
            infrastructure, not a one time listing launch.
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <article className="rounded-xl border border-white/10 bg-[#1b1e24] p-4">
              <p className="text-xs font-bold uppercase tracking-wider text-brand-300">Now</p>
              <p className="mt-2 text-sm text-slate-200">Prove regional liquidity in produce</p>
              <p className="mt-1 text-xs text-slate-400">Validate trust and logistics model with real transactions</p>
            </article>
            <article className="rounded-xl border border-white/10 bg-[#1b1e24] p-4">
              <p className="text-xs font-bold uppercase tracking-wider text-brand-300">Next</p>
              <p className="mt-2 text-sm text-slate-200">Subscription ordering for restaurants</p>
              <p className="mt-1 text-xs text-slate-400">Shift from spot buying to default weekly channel</p>
            </article>
            <article className="rounded-xl border border-white/10 bg-[#1b1e24] p-4">
              <p className="text-xs font-bold uppercase tracking-wider text-brand-300">Later</p>
              <p className="mt-2 text-sm text-slate-200">Category expansion and infrastructure licensing</p>
              <p className="mt-1 text-xs text-slate-400">Reuse trust and logistics layer beyond produce</p>
            </article>
          </div>
          <p className="mt-4 text-sm text-slate-300">
            I defined success using company OKRs tied to durable network behavior. Regional liquidity and
            repeat purchase rate were primary leading indicators, not signup volume alone.
          </p>
        </SectionShell>
      )}

      {active === 'business' && (
        <SectionShell>
          <SectionHeader eyebrow="4. Business case" title="Option tradeoffs and investment call" />
          <div className="grid gap-3 md:grid-cols-2">
            <article className="rounded-lg border border-white/10 bg-[#1b1e24] p-4">
              <p className="text-sm font-semibold text-slate-100">Option A: listing site only</p>
              <p className="mt-2 text-sm text-slate-400">
                Rejected. It left trust and logistics barriers unresolved, so adoption risk remained high.
              </p>
            </article>
            <article className="rounded-lg border border-white/10 bg-[#1b1e24] p-4">
              <p className="text-sm font-semibold text-slate-100">Option B: managed marketplace</p>
              <p className="mt-2 text-sm text-slate-400">
                Chosen. It removed both barriers with quality standards, payment guarantee, and pooled logistics.
              </p>
            </article>
          </div>
          <div className="mt-4 overflow-x-auto">
            <table className="data-table w-full min-w-[680px] text-sm">
              <thead>
                <tr>
                  <th>Feature option</th>
                  <th>Reach</th>
                  <th>Impact</th>
                  <th>Confidence</th>
                  <th>Effort</th>
                  <th>RICE score</th>
                </tr>
              </thead>
              <tbody>
                {riceRows.map((row) => (
                  <tr key={row.feature}>
                    <td className="font-medium text-slate-200">{row.feature}</td>
                    <td>{row.reach}</td>
                    <td>{row.impact}</td>
                    <td>{row.confidence}%</td>
                    <td>{row.effort}</td>
                    <td className="text-brand-300">{riceScore(row)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            The largest flagged risk was commercial and working capital exposure from guaranteeing farmer
            payment ahead of buyer settlement.
          </p>
        </SectionShell>
      )}

      {active === 'solution' && (
        <SectionShell>
          <SectionHeader eyebrow="5. Product Concept" title="Concept scope and operating model" />
          <div className="grid gap-3 md:grid-cols-2">
            <article className="rounded-lg border border-white/10 bg-[#1b1e24] p-4">
              <p className="text-sm font-semibold text-slate-100">Goals</p>
              <ul className="mt-2 space-y-1 text-sm text-slate-400">
                <li>• Establish trust and repeat buying in one region.</li>
                <li>• Guarantee farmer payment timing with predictable operations.</li>
              </ul>
            </article>
            <article className="rounded-lg border border-white/10 bg-[#1b1e24] p-4">
              <p className="text-sm font-semibold text-slate-100">Non goals</p>
              <ul className="mt-2 space-y-1 text-sm text-slate-400">
                <li>• No dedicated farmer mobile app at launch.</li>
                <li>• No multi region expansion before regional liquidity proof.</li>
              </ul>
            </article>
          </div>
          <div className="mt-4 space-y-2">
            <p className="rounded-lg border border-white/10 bg-[#1b1e24] p-3 text-sm text-slate-300">
              As a farmer, I want guaranteed payment within 48 hours, so I can plan cash flow without distributor dependency.
            </p>
            <p className="rounded-lg border border-white/10 bg-[#1b1e24] p-3 text-sm text-slate-300">
              As a buyer, I want one accountable channel with consistent standards, so local sourcing is as reliable as distributor supply.
            </p>
          </div>
          <p className="mt-4 text-sm text-slate-300">
            Core components were a quality standards rubric at intake, payment guarantee backed by short
            term working capital, and pooled logistics routes instead of farm by farm delivery coordination.
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <article className="rounded-lg border border-white/10 bg-[#1b1e24] p-3">
              <p className="text-sm font-semibold text-slate-100">Pricing option: commission</p>
              <p className="mt-1 text-xs text-slate-400">Scales with transaction success, but less predictable for buyer budgeting.</p>
            </article>
            <article className="rounded-lg border border-white/10 bg-[#1b1e24] p-3">
              <p className="text-sm font-semibold text-slate-100">Pricing option: subscription</p>
              <p className="mt-1 text-xs text-slate-400">Predictable for buyers, but caps upside as volume grows.</p>
            </article>
          </div>
          <p className="mt-4 rounded-lg border border-amber-500/30 bg-amber-500/10 p-3 text-sm text-amber-100">
            Edge cases surfaced early: rejection and dispute handling for quality failures, substitution
            communication during supply shortfalls, and guarantee policy behavior under buyer default risk.
          </p>

          <details className="mt-5 rounded-xl border border-brand-500/30 bg-[#111318] p-4">
            <summary className="cursor-pointer text-sm font-semibold text-brand-300">
              Feature PRD
            </summary>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-300">
              <p>
                <span className="font-semibold text-slate-100">Feature:</span> Quality Intake and Dispute Resolution Flow
              </p>
              <p>
                <span className="font-semibold text-slate-100">Overview:</span> A structured intake process applying consistent quality standards to farm produce at the point of listing, with a clear rejection and dispute path when produce fails to meet those standards.
              </p>
              <p>
                <span className="font-semibold text-slate-100">Problem:</span> Without a consistent, enforced quality standard at intake, buyers cannot trust that produce sourced through the marketplace will meet the consistency they expect from a distributor, which undermines the core trust the marketplace depends on.
              </p>
              <p>
                <span className="font-semibold text-slate-100">Goals:</span> Every listed batch of produce is checked against a defined quality rubric before it becomes available to buyers. Farmers have a clear, fast path to dispute a rejection. Buyers can trust that anything listed has passed the same bar regardless of which farm it came from.
              </p>
              <p>
                <span className="font-semibold text-slate-100">Non goals:</span> This does not cover pricing or negotiation between farms and buyers, that is handled elsewhere in the marketplace flow. This does not cover produce categories beyond the initial pilot's scope, for example this does not yet cover dairy or specialty goods.
              </p>

              <article className="rounded-lg border border-white/10 bg-[#1b1e24] p-3">
                <p className="font-semibold text-slate-100">User stories</p>
                <ul className="mt-2 space-y-2 text-slate-300">
                  <li>• As a buyer, I want every listing to meet a consistent quality standard, so sourcing direct from many small farms does not cost me more time than it saves.</li>
                  <li>• As a farmer, I want a fast, fair way to dispute a rejected batch, so a single inspector's judgment call does not cost me a sale without recourse.</li>
                </ul>
              </article>

              <article className="rounded-lg border border-white/10 bg-[#1b1e24] p-3">
                <p className="font-semibold text-slate-100">Functional requirements</p>
                <ul className="mt-2 space-y-2 text-slate-300">
                  <li>• At intake, a batch is checked against a defined rubric covering the attributes relevant to that produce type, for example ripeness, size consistency, and visible damage.</li>
                  <li>• A batch that fails the rubric is marked rejected and is not listed to buyers, with the specific failed criteria recorded and shared with the farmer.</li>
                  <li>• A farmer can dispute a rejection within a defined window, triggering a second review by a different inspector.</li>
                  <li>• If a shortfall requires substituting one farm's produce for another on an existing buyer order, the buyer is notified of the substitution and the reason before the order is fulfilled, not after.</li>
                  <li>• All intake decisions, rejections, and dispute outcomes are logged with timestamps and the inspector or reviewer responsible.</li>
                </ul>
              </article>

              <article className="rounded-lg border border-white/10 bg-[#1b1e24] p-3">
                <p className="font-semibold text-slate-100">Acceptance criteria</p>
                <ul className="mt-2 space-y-2 text-slate-300">
                  <li>• Given a batch is submitted for intake, when it is checked against the rubric, then it is marked either approved or rejected with specific failed criteria recorded, not just a pass or fail flag with no detail.</li>
                  <li>• Given a farmer disputes a rejection within the defined window, when the dispute is filed, then a different inspector than the original reviews the batch before a final decision is recorded.</li>
                  <li>• Given a buyer's order requires a substitution due to a supply shortfall, when the substitution is made, then the buyer is notified of the change and the reason before the order ships, not after.</li>
                  <li>• Given an intake decision is made, when the record is reviewed later, then the specific inspector, rubric criteria applied, and outcome are all retrievable for that batch.</li>
                </ul>
              </article>

              <article className="rounded-lg border border-white/10 bg-[#1b1e24] p-3">
                <p className="font-semibold text-slate-100">Edge cases to handle</p>
                <ul className="mt-2 space-y-2 text-slate-300">
                  <li>• A farm that disputes rejections at a notably higher rate than others, and what that signals about either the farm's practices or inspector consistency.</li>
                  <li>• A supply shortfall severe enough that no substitution meets the buyer's original quality expectations, and how that is communicated rather than silently filled with a lower quality option.</li>
                  <li>• A buyer who repeatedly reports quality issues on batches that passed intake, and how that feedback loop is captured to catch a possible gap in the rubric itself.</li>
                </ul>
              </article>

              <p>
                <span className="font-semibold text-slate-100">Metrics:</span> Rejection rate by farm and by inspector, watched for inspector consistency. Dispute outcome rate, how often disputes overturn the original decision. Buyer reported quality issues on approved batches, the leading indicator that the rubric itself needs adjustment.
              </p>
            </div>
          </details>
        </SectionShell>
      )}

      {active === 'execution' && (
        <SectionShell>
          <SectionHeader eyebrow="7. Execution" title="Why I started with concierge operations" />
          <ul className="space-y-2 text-sm text-slate-300">
            <li className="rounded-lg border border-white/10 bg-[#1b1e24] p-3">
              Onboarded a small founding group of farms and buyers manually with real money transactions.
            </li>
            <li className="rounded-lg border border-white/10 bg-[#1b1e24] p-3">
              Used concierge workflows to validate liquidity and trust before investing in self service tooling.
            </li>
            <li className="rounded-lg border border-white/10 bg-[#1b1e24] p-3">
              Sequenced automation only after repeat behavior and unit economics were stable.
            </li>
          </ul>
        </SectionShell>
      )}

      {active === 'validation' && (
        <SectionShell>
          <SectionHeader eyebrow="8. Data and validation" title="Signals I tracked post launch" />
          <div className="grid gap-3 md:grid-cols-4">
            <article className="rounded-lg border border-white/10 bg-[#1b1e24] p-3">
              <p className="text-xs uppercase tracking-wider text-slate-500">Liquidity</p>
              <p className="mt-1 text-sm text-slate-300">78% sold through</p>
            </article>
            <article className="rounded-lg border border-white/10 bg-[#1b1e24] p-3">
              <p className="text-xs uppercase tracking-wider text-slate-500">Buyer repeat rate</p>
              <p className="mt-1 text-sm text-slate-300">64% within 30 days</p>
            </article>
            <article className="rounded-lg border border-white/10 bg-[#1b1e24] p-3">
              <p className="text-xs uppercase tracking-wider text-slate-500">Farmer retention</p>
              <p className="mt-1 text-sm text-slate-300">86% after first payment cycle</p>
            </article>
            <article className="rounded-lg border border-white/10 bg-[#1b1e24] p-3">
              <p className="text-xs uppercase tracking-wider text-slate-500">Second order risk watch</p>
              <p className="mt-1 text-sm text-slate-300">Quality relaxation correlation with repeat decline</p>
            </article>
          </div>
        </SectionShell>
      )}

      {active === 'launch' && (
        <SectionShell>
          <SectionHeader eyebrow="9. Launch and communication" title="Audience specific messaging" />
          <div className="grid gap-3 md:grid-cols-3">
            <article className="rounded-lg border border-white/10 bg-[#1b1e24] p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-300">Farmer message</p>
              <p className="mt-2 text-sm text-slate-300">Get paid what your produce is worth, guaranteed, within 48 hours.</p>
            </article>
            <article className="rounded-lg border border-white/10 bg-[#1b1e24] p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-300">Buyer message</p>
              <p className="mt-2 text-sm text-slate-300">Direct from local farms, with the consistency and reliability of a distributor.</p>
            </article>
            <article className="rounded-lg border border-white/10 bg-[#1b1e24] p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-300">Executive update</p>
              <p className="mt-2 text-sm text-slate-300">Liquidity and unit economics validated, with clear path to subscription ordering before second region expansion.</p>
            </article>
          </div>
        </SectionShell>
      )}

      {active === 'ai' && (
        <SectionShell>
          <SectionHeader eyebrow="10. AI integration" title="Scoped AI with explicit financial guardrails" />
          <div className="grid gap-3 lg:grid-cols-2">
            <article className="rounded-xl border border-white/10 bg-[#1b1e24] p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-300">Layer one: AI inside the product</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li>
                  <span className="font-semibold text-slate-100">Demand forecasting agent.</span> Suggests likely farm demand by crop and week.
                  It cannot auto place orders for farmers.
                </li>
                <li>
                  <span className="font-semibold text-slate-100">Quality triage agent.</span> Flags intake photos that diverge from expected quality.
                  It cannot reject shipments on its own.
                </li>
              </ul>
            </article>
            <article className="rounded-xl border border-white/10 bg-[#1b1e24] p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-300">Layer two: AI in PM workflow</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li>Synthesized interviews to separate price objections from trust and logistics objections.</li>
                <li>Modeled unit economics for commission versus subscription before pricing decision.</li>
                <li>Detected repeat rate decline correlation with quality relaxation faster than manual analysis.</li>
              </ul>
            </article>
          </div>
          <p className="mt-4 rounded-lg border border-brand-500/25 bg-brand-500/10 p-3 text-sm text-brand-100">
            Guardrails before autonomy. I use AI to remove grunt work and extend pattern detection. I keep
            it out of decisions with direct financial consequences without a human in the loop. No agent can
            reject shipments, place farm orders, or make payment guarantee decisions independently.
          </p>
        </SectionShell>
      )}

      {active === 'feedback' && (
        <SectionShell>
          <SectionHeader eyebrow="11. Feedback loops and iteration" title="How I chose the next increment" />
          <p className="text-sm leading-relaxed text-slate-300">
            After pilot stabilization I monitored liquidity and repeat trends across a full harvest season.
            Farmer and buyer feedback fed directly into phase two planning. I prioritized subscription ordering
            for restaurants before second region expansion because it strengthened repeat behavior and channel
            stickiness, which were the strongest leading indicators of durable network value.
          </p>
        </SectionShell>
      )}

      {active === 'wireframe' && (
        <SectionShell>
          <SectionHeader eyebrow="6. Wireframe UI" title="Low fidelity interface flow" />
          <div className="grid gap-4 lg:grid-cols-3">
            <WireframeScreen
              title="Farmer portal"
              subtitle="Supply and payout visibility"
              panels={[
                { label: 'Produce availability', rows: 3 },
                { label: 'Quality intake status', rows: 3 },
                { label: 'Payout timeline', rows: 2 },
              ]}
            />
            <WireframeScreen
              title="Buyer ordering"
              subtitle="Consistent sourcing workflow"
              panels={[
                { label: 'Weekly basket', rows: 3 },
                { label: 'Trust indicators', rows: 3 },
                { label: 'Delivery and substitutions', rows: 2 },
              ]}
            />
            <WireframeScreen
              title="Marketplace operations"
              subtitle="Liquidity and guarantee oversight"
              panels={[
                { label: 'Liquidity and repeat KPIs', rows: 3 },
                { label: 'Guarantee exposure', rows: 2 },
                { label: 'Dispute workflow', rows: 3 },
              ]}
            />
          </div>
        </SectionShell>
      )}
    </div>
  );
}
