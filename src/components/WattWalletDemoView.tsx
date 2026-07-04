import { useState } from 'react';
import { SectionHeader, SectionShell } from './ui/SectionShell';
import { WireframeScreen } from './ui/WireframeScreen';

type WattWalletSectionId =
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

const sections: { id: WattWalletSectionId; label: string }[] = [
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
  { feature: 'Edge balance ledger and local cutoff logic', reach: 82, impact: 3, confidence: 78, effort: 7 },
  { feature: 'Cellular coverage uplift program', reach: 71, impact: 2, confidence: 64, effort: 13 },
  { feature: 'Support side phantom cutoff tool', reach: 55, impact: 2, confidence: 72, effort: 5 },
];

function riceScore(row: (typeof riceRows)[number]) {
  return ((row.reach * row.impact * row.confidence) / 100 / row.effort).toFixed(1);
}

export function WattWalletDemoView() {
  const [active, setActive] = useState<WattWalletSectionId>('problem');

  return (
    <div className="space-y-8">
      <SectionShell>
        <SectionHeader
          eyebrow="Smart Energy"
          title="WattWallet: Prepay Energy Payments at the Edge"
          subtitle="All names, metrics, and scenarios in this tab are invented for demonstration."
        />
        <nav className="flex flex-wrap gap-2" role="tablist" aria-label="WattWallet phases">
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
            I owned prepay payments for a residential energy retailer where customers top up credit in
            advance and meters disconnect at zero balance. In low connectivity parts of the network,
            that model failed in two directions. Some customers paid but were still disconnected because
            the top up update did not reach the meter in time. Others should have been disconnected but
            kept consuming power because cutoff instructions were delayed, creating unbilled usage.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            This was not only a technical reliability issue. It was a product and business risk. Every
            false cutoff damaged trust and increased churn risk, while every delayed cutoff increased
            revenue leakage and collection cost. The core problem was that critical balance and cutoff
            decisions depended too heavily on cloud connectivity in environments where connectivity was
            unreliable by design. We needed a model that stayed correct offline, then reconciled safely
            when the connection returned.
          </p>
        </SectionShell>
      )}

      {active === 'discovery' && (
        <SectionShell>
          <SectionHeader eyebrow="2. Discovery" title="How I found the problem" />
          <p className="text-sm leading-relaxed text-slate-300">
            I did not assume this was only a connectivity issue. I pulled outage logs, billing
            reconciliation reports, and support ticket tags for all prepay meters over the prior
            quarter. I then interviewed field technicians, customers in low connectivity zones, and
            the billing operations team to validate where system behavior diverged from customer
            expectation.
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            <article className="rounded-lg border border-white/10 bg-[#1b1e24] p-3">
              <p className="text-xs uppercase tracking-wider text-slate-500">Meters in low signal zones</p>
              <p className="mt-1 text-lg font-semibold text-slate-100">31%</p>
            </article>
            <article className="rounded-lg border border-white/10 bg-[#1b1e24] p-3">
              <p className="text-xs uppercase tracking-wider text-slate-500">Phantom cutoff complaints</p>
              <p className="mt-1 text-lg font-semibold text-slate-100">8.6% of prepay tickets</p>
            </article>
            <article className="rounded-lg border border-white/10 bg-[#1b1e24] p-3">
              <p className="text-xs uppercase tracking-wider text-slate-500">Estimated monthly unbilled usage</p>
              <p className="mt-1 text-lg font-semibold text-slate-100">$42k equivalent</p>
            </article>
          </div>
          <p className="mt-4 rounded-lg border border-brand-500/25 bg-brand-500/10 p-3 text-sm text-brand-100">
            The core insight was that unreliable connectivity was directly creating both revenue
            leakage and avoidable customer churn risk. That made this a strategic product mandate,
            not an operational bug.
          </p>
        </SectionShell>
      )}

      {active === 'strategy' && (
        <SectionShell>
          <SectionHeader eyebrow="3. Long term strategy alignment" title="How I positioned this beyond a bug fix" />
          <p className="text-sm leading-relaxed text-slate-300">
            I mapped WattWallet to a multi year strategy pillar focused on lowering cost to serve in
            hard to reach segments while defending market share in prepaid and low income contexts.
            I positioned phase one as a foundation capability, not a one off patch.
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <article className="rounded-xl border border-white/10 bg-[#1b1e24] p-4">
              <p className="text-xs font-bold uppercase tracking-wider text-brand-300">Now</p>
              <p className="mt-2 text-sm text-slate-200">Edge cutoff logic and local balance ledger</p>
              <p className="mt-1 text-xs text-slate-400">Stabilizes prepay trust under poor connectivity</p>
            </article>
            <article className="rounded-xl border border-white/10 bg-[#1b1e24] p-4">
              <p className="text-xs font-bold uppercase tracking-wider text-brand-300">Next</p>
              <p className="mt-2 text-sm text-slate-200">Local demand response participation</p>
              <p className="mt-1 text-xs text-slate-400">Uses edge control path for flexibility products</p>
            </article>
            <article className="rounded-xl border border-white/10 bg-[#1b1e24] p-4">
              <p className="text-xs font-bold uppercase tracking-wider text-brand-300">Later</p>
              <p className="mt-2 text-sm text-slate-200">Reuse ledger pattern for EV home charging tariffs</p>
              <p className="mt-1 text-xs text-slate-400">Extends same trusted reconciliation model</p>
            </article>
          </div>
          <p className="mt-4 text-sm text-slate-300">
            I communicated this to leadership as reusable edge infrastructure with direct OKR
            relevance. Success was tied to churn reduction in target segments and lower cost to
            collect, not only feature adoption.
          </p>
        </SectionShell>
      )}

      {active === 'business' && (
        <SectionShell>
          <SectionHeader eyebrow="4. Business case" title="Options and priority call" />
          <div className="grid gap-3 md:grid-cols-2">
            <article className="rounded-lg border border-white/10 bg-[#1b1e24] p-4">
              <p className="text-sm font-semibold text-slate-100">Option A: improve cellular coverage</p>
              <p className="mt-2 text-sm text-slate-400">
                Rejected. Too slow, too expensive, and too dependent on external network outcomes we do
                not control.
              </p>
            </article>
            <article className="rounded-lg border border-white/10 bg-[#1b1e24] p-4">
              <p className="text-sm font-semibold text-slate-100">Option B: move logic to the edge</p>
              <p className="mt-2 text-sm text-slate-400">
                Chosen. Solves offline correctness directly and creates a reusable architecture for future
                prepay adjacent products.
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
        </SectionShell>
      )}

      {active === 'solution' && (
        <SectionShell>
          <SectionHeader eyebrow="5. Product Concept" title="Concept scope and approach" />
          <div className="grid gap-3 md:grid-cols-2">
            <article className="rounded-lg border border-white/10 bg-[#1b1e24] p-4">
              <p className="text-sm font-semibold text-slate-100">Goals</p>
              <ul className="mt-2 space-y-1 text-sm text-slate-400">
                <li>• Keep prepay balance and cutoff decisions correct while offline.</li>
                <li>• Reconcile safely when connectivity returns.</li>
              </ul>
            </article>
            <article className="rounded-lg border border-white/10 bg-[#1b1e24] p-4">
              <p className="text-sm font-semibold text-slate-100">Non goals</p>
              <ul className="mt-2 space-y-1 text-sm text-slate-400">
                <li>• No postpaid billing scope in this phase.</li>
                <li>• No support for meters without local compute support.</li>
              </ul>
            </article>
          </div>
          <div className="mt-4 space-y-2">
            <p className="rounded-lg border border-white/10 bg-[#1b1e24] p-3 text-sm text-slate-300">
              As a prepay customer, I want my top up to apply even when signal is weak, so that I do
              not lose power after paying.
            </p>
            <p className="rounded-lg border border-white/10 bg-[#1b1e24] p-3 text-sm text-slate-300">
              As a retailer operations lead, I want offline consumption reconciled correctly on reconnect,
              so that revenue and customer balances remain accurate.
            </p>
          </div>
          <p className="mt-4 text-sm text-slate-300">
            I defined the technical approach as a local balance ledger on the meter with near real time
            decrement from measured consumption. Top up tokens are signed and queued for delivery on the
            next connectivity window. Reconciliation uses a deterministic conflict rule. Cloud wins on
            disagreement, and the system prevents double charging.
          </p>
          <p className="mt-4 rounded-lg border border-amber-500/30 bg-amber-500/10 p-3 text-sm text-amber-100">
            Edge cases surfaced early: clock drift after long offline periods, tamper attempts against
            offline top up flows, and reconciliation conflicts after delayed sync windows.
          </p>

          <details className="mt-5 rounded-xl border border-brand-500/30 bg-[#111318] p-4">
            <summary className="cursor-pointer text-sm font-semibold text-brand-300">
              Feature PRD
            </summary>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-300">
              <p>
                <span className="font-semibold text-slate-100">Feature:</span> Local Balance Ledger and Signed Top Up Token
              </p>
              <p>
                <span className="font-semibold text-slate-100">Overview:</span> A local balance ledger running on the smart meter itself, allowing accurate cutoff and balance decisions without live cloud connectivity, reconciled with the cloud once connectivity is available.
              </p>
              <p>
                <span className="font-semibold text-slate-100">Problem:</span> Meters in low connectivity zones cannot reliably receive top ups or report consumption in real time, causing wrongful cutoffs and unbilled consumption.
              </p>
              <p>
                <span className="font-semibold text-slate-100">Goals:</span> Meter makes correct cutoff and balance decisions with zero live connectivity. Top ups apply the moment a meter has any connectivity window, even brief. Consumption during offline periods is fully recoverable on reconciliation.
              </p>
              <p>
                <span className="font-semibold text-slate-100">Non goals:</span> This does not cover postpaid billing logic. This does not cover meters on hardware revisions without local compute capacity, those are addressed by a separate hardware refresh workstream.
              </p>

              <article className="rounded-lg border border-white/10 bg-[#1b1e24] p-3">
                <p className="font-semibold text-slate-100">User stories</p>
                <ul className="mt-2 space-y-2 text-slate-300">
                  <li>• As a prepay customer, I want my top up to apply immediately even if my area has poor signal, so I am not wrongly cut off.</li>
                  <li>• As the retailer, I want to recover revenue for consumption that happens while a meter is offline, so unbilled usage is minimized.</li>
                </ul>
              </article>

              <article className="rounded-lg border border-white/10 bg-[#1b1e24] p-3">
                <p className="font-semibold text-slate-100">Functional requirements</p>
                <ul className="mt-2 space-y-2 text-slate-300">
                  <li>• The meter maintains a local balance ledger, decremented based on measured consumption at defined intervals.</li>
                  <li>• Top up tokens are cryptographically signed by the retailer's system before being queued for delivery to the meter, preventing offline tampering.</li>
                  <li>• A queued top up applies to the local ledger the moment the meter has any connectivity window, without requiring a full sync session.</li>
                  <li>• On reconciliation, the cloud ledger is treated as the source of truth. In the case of a disagreement between local and cloud ledgers, the cloud value is applied going forward, but the customer is never charged twice for the same disputed period.</li>
                  <li>• The system logs the duration of every offline period per meter, to support both reconciliation and monitoring.</li>
                </ul>
              </article>

              <article className="rounded-lg border border-white/10 bg-[#1b1e24] p-3">
                <p className="font-semibold text-slate-100">Acceptance criteria</p>
                <ul className="mt-2 space-y-2 text-slate-300">
                  <li>• Given a meter is offline and a customer submits a top up through the app, when the meter regains any connectivity, then the local ledger balance updates within the same connectivity window, without requiring a full sync.</li>
                  <li>• Given a meter has been offline for up to 30 days, when it reconnects, then reconciliation completes without applying duplicate charges for any period already reflected in the local ledger.</li>
                  <li>• Given a top up token is intercepted and modified in transit, when the meter attempts to apply it, then the token fails signature validation and is rejected, with the failure logged for investigation.</li>
                  <li>• Given the local and cloud ledgers disagree at reconciliation, when the system resolves the conflict, then the cloud value is applied and the specific disputed period is flagged for manual review rather than silently overwritten.</li>
                </ul>
              </article>

              <article className="rounded-lg border border-white/10 bg-[#1b1e24] p-3">
                <p className="font-semibold text-slate-100">Edge cases to handle</p>
                <ul className="mt-2 space-y-2 text-slate-300">
                  <li>• Clock drift on a meter offline for an extended period, and how that affects timestamped consumption logs.</li>
                  <li>• A meter that never regains connectivity for an extended period, and what threshold triggers a field visit versus continued waiting.</li>
                  <li>• Partial connectivity, for example a brief signal window too short to complete a full top up token transfer.</li>
                </ul>
              </article>

              <p>
                <span className="font-semibold text-slate-100">Metrics:</span> Reduction in phantom cutoff complaints. Recovery rate of previously unbilled consumption. Average time to reconciliation once connectivity returns.
              </p>
            </div>
          </details>
        </SectionShell>
      )}

      {active === 'execution' && (
        <SectionShell>
          <SectionHeader eyebrow="7. Execution" title="Phased delivery with operational safeguards" />
          <ul className="space-y-2 text-sm text-slate-300">
            <li className="rounded-lg border border-white/10 bg-[#1b1e24] p-3">
              Bench tested local ledger logic in simulation with deliberately simulated multi week
              offline periods.
            </li>
            <li className="rounded-lg border border-white/10 bg-[#1b1e24] p-3">
              Ran a controlled pilot in one low connectivity zone with daily monitoring and reconciliation
              checks.
            </li>
            <li className="rounded-lg border border-white/10 bg-[#1b1e24] p-3">
              Added a kill switch to force meters back to cloud dependent mode if local logic misbehaved.
              This was critical because cutoff correctness has direct household impact.
            </li>
          </ul>
        </SectionShell>
      )}

      {active === 'validation' && (
        <SectionShell>
          <SectionHeader eyebrow="8. Data and validation" title="What I measured after pilot" />
          <div className="grid gap-3 md:grid-cols-3">
            <article className="rounded-lg border border-white/10 bg-[#1b1e24] p-3">
              <p className="text-xs uppercase tracking-wider text-slate-500">Actual vs billed gap</p>
              <p className="mt-1 text-sm text-slate-300">From 6.1% to 1.9%</p>
            </article>
            <article className="rounded-lg border border-white/10 bg-[#1b1e24] p-3">
              <p className="text-xs uppercase tracking-wider text-slate-500">Offline duration before reconcile</p>
              <p className="mt-1 text-sm text-slate-300">Median 17.8 hours to 9.6 hours</p>
            </article>
            <article className="rounded-lg border border-white/10 bg-[#1b1e24] p-3">
              <p className="text-xs uppercase tracking-wider text-slate-500">Cutoff bias drift</p>
              <p className="mt-1 text-sm text-slate-300">Tracked daily, no systematic aggressive skew</p>
            </article>
          </div>
        </SectionShell>
      )}

      {active === 'launch' && (
        <SectionShell>
          <SectionHeader eyebrow="9. Launch and communication" title="Three audience specific messages" />
          <div className="grid gap-3 md:grid-cols-3">
            <article className="rounded-lg border border-white/10 bg-[#1b1e24] p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-300">Customer message</p>
              <p className="mt-2 text-sm text-slate-300">
                Your top up works even without a strong signal, so your supply stays aligned with your payment.
              </p>
            </article>
            <article className="rounded-lg border border-white/10 bg-[#1b1e24] p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-300">Executive update</p>
              <p className="mt-2 text-sm text-slate-300">
                Shipped edge cutoff logic in pilot, recovered revenue leakage, and prepared phase two demand response extension.
              </p>
            </article>
            <article className="rounded-lg border border-white/10 bg-[#1b1e24] p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-300">Engineering and compliance</p>
              <p className="mt-2 text-sm text-slate-300">
                Signed token path, offline ledger constraints, and reconciliation rules documented for formal security review.
              </p>
            </article>
          </div>
        </SectionShell>
      )}

      {active === 'ai' && (
        <SectionShell>
          <SectionHeader eyebrow="10. AI integration" title="Two layers with explicit guardrails" />
          <div className="grid gap-3 lg:grid-cols-2">
            <article className="rounded-xl border border-white/10 bg-[#1b1e24] p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-300">Layer one: AI inside the product</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li>
                  <span className="font-semibold text-slate-100">Billing support agent.</span> Explains balance
                  history and top up status in plain language. It cannot alter balances or override cutoff decisions.
                </li>
                <li>
                  <span className="font-semibold text-slate-100">Field operations agent.</span> Flags anomalous
                  offline durations or reconciliation conflicts for technician investigation. It cannot dispatch cutoffs.
                </li>
                <li>
                  <span className="font-semibold text-slate-100">Fraud and tamper detection agent.</span> Surfaces
                  likely tamper patterns from signed tokens and offline consumption traces. It cannot execute power actions.
                </li>
              </ul>
            </article>
            <article className="rounded-xl border border-white/10 bg-[#1b1e24] p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-300">Layer two: AI in PM workflow</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li>Synthesized interview transcripts and support ticket clusters to surface phantom cutoff patterns faster.</li>
                <li>Stress tested RICE assumptions by asking an agent to argue the counter case for coverage investment.</li>
                <li>Drafted launch communications for customer, executive, and technical audiences from one source brief.</li>
                <li>Ran reconciliation anomaly scans to detect aggressive or lenient cutoff drift faster than manual analysis.</li>
              </ul>
            </article>
          </div>
          <p className="mt-4 rounded-lg border border-brand-500/25 bg-brand-500/10 p-3 text-sm text-brand-100">
            Guardrails principle. I use AI where it removes grunt work or extends pattern detection at
            scale. I keep it out of decisions with real world safety or financial consequences without a
            human in the loop. No WattWallet agent is ever allowed to independently cut off or restore power.
          </p>
        </SectionShell>
      )}

      {active === 'feedback' && (
        <SectionShell>
          <SectionHeader eyebrow="11. Feedback loops and iteration" title="How rollout informed phase two" />
          <p className="text-sm leading-relaxed text-slate-300">
            After wide rollout I monitored reconciliation success, phantom cutoff incidence, and revenue
            recovery weekly, then monthly once variance stabilized. Field and customer feedback fed directly
            into phase two backlog refinement. The next increment I selected was extending the local ledger
            pattern to demand response participation, because it delivered higher strategic leverage than
            alternative backlog items while reusing the same trusted edge controls.
          </p>
        </SectionShell>
      )}

      {active === 'wireframe' && (
        <SectionShell>
          <SectionHeader eyebrow="6. Wireframe UI" title="Low fidelity interface flow" />
          <div className="grid gap-4 lg:grid-cols-3">
            <WireframeScreen
              title="Customer app"
              subtitle="Top up and balance assurance"
              panels={[
                { label: 'Balance card', rows: 3 },
                { label: 'Top up history', rows: 4 },
                { label: 'Offline status', rows: 2 },
              ]}
            />
            <WireframeScreen
              title="Operations console"
              subtitle="Reconciliation and risk control"
              panels={[
                { label: 'Meter status table', rows: 4 },
                { label: 'Conflict queue', rows: 3 },
                { label: 'Kill switch and exposure', rows: 3 },
              ]}
            />
            <WireframeScreen
              title="Executive summary"
              subtitle="Portfolio level outcome view"
              panels={[
                { label: 'Recovery KPI stack', rows: 3 },
                { label: 'Cutoff trend panel', rows: 3 },
                { label: 'Phase readiness', rows: 2 },
              ]}
            />
          </div>
        </SectionShell>
      )}
    </div>
  );
}
