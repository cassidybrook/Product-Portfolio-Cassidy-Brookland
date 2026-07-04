import { useState } from 'react';
import { SectionHeader, SectionShell } from './ui/SectionShell';
import { WireframeScreen } from './ui/WireframeScreen';

type PastureIQSectionId =
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

const sections: { id: PastureIQSectionId; label: string }[] = [
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
  {
    feature: 'Collar mesh relay and priority alert queue',
    reach: 79,
    impact: 3,
    confidence: 64,
    effort: 8,
  },
  {
    feature: 'Farmer funded fixed gateway expansion',
    reach: 52,
    impact: 2,
    confidence: 71,
    effort: 11,
  },
  {
    feature: 'Manual alert escalation tooling only',
    reach: 41,
    impact: 1,
    confidence: 75,
    effort: 4,
  },
];

function riceScore(row: (typeof riceRows)[number]) {
  return ((row.reach * row.impact * row.confidence) / 100 / row.effort).toFixed(1);
}

export function PastureIQDemoView() {
  const [active, setActive] = useState<PastureIQSectionId>('problem');

  return (
    <div className="space-y-8">
      <SectionShell>
        <SectionHeader
          eyebrow="AgriTech"
          title="PastureIQ: Mesh Connected Livestock Health Monitoring"
          subtitle="All names, metrics, and scenarios in this tab are invented for demonstration."
        />
        <nav className="flex flex-wrap gap-2" role="tablist" aria-label="PastureIQ phases">
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
          <SectionHeader eyebrow="1. Problem framing" title="Why this mattered now" />
          <p className="text-sm leading-relaxed text-slate-300">
            I owned the product direction for livestock health monitoring across pasture based farms.
            Farmers relied on collar telemetry for early warning of illness and distress, but most large
            properties had dead zones with no cellular or wifi coverage. Data often arrived too late to be
            useful for intervention.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            The core failure was architectural. Collars depended on direct connectivity to a gateway.
            When animals moved into weak coverage areas, health alerts and location updates stalled for
            hours or days. This created delayed care decisions for farmers and increased retention risk
            for the business in the exact segment where confidence mattered most.
          </p>
        </SectionShell>
      )}

      {active === 'discovery' && (
        <SectionShell>
          <SectionHeader eyebrow="2. Discovery" title="How I validated the issue" />
          <p className="text-sm leading-relaxed text-slate-300">
            I pulled alert latency logs segmented by property size, collar battery and connectivity logs,
            and support ticket themes across the previous grazing cycle. I paired this with interviews
            from farmers on large remote properties and field engineers tracking collar and relay dropouts.
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            <article className="rounded-lg border border-white/10 bg-[#1b1e24] p-3">
              <p className="text-xs uppercase tracking-wider text-slate-500">Average alert latency</p>
              <p className="mt-1 text-sm text-slate-300">Large remote properties: 74 minutes</p>
              <p className="text-xs text-slate-500">Smaller connected properties: 11 minutes</p>
            </article>
            <article className="rounded-lg border border-white/10 bg-[#1b1e24] p-3">
              <p className="text-xs uppercase tracking-wider text-slate-500">At risk renewals citing latency</p>
              <p className="mt-1 text-sm text-slate-300">17% of flagged accounts</p>
            </article>
            <article className="rounded-lg border border-white/10 bg-[#1b1e24] p-3">
              <p className="text-xs uppercase tracking-wider text-slate-500">Frequent ticket theme</p>
              <p className="mt-1 text-sm text-slate-300">“Alert arrived after the event already passed”</p>
            </article>
          </div>
          <p className="mt-4 rounded-lg border border-brand-500/25 bg-brand-500/10 p-3 text-sm text-brand-100">
            The key insight was that delayed telemetry was not just a technical quality issue. It was a
            direct retention and competitive risk in high value remote segments.
          </p>
        </SectionShell>
      )}

      {active === 'strategy' && (
        <SectionShell>
          <SectionHeader eyebrow="3. Long term strategy alignment" title="How I tied this to company direction" />
          <p className="text-sm leading-relaxed text-slate-300">
            I mapped this initiative to the company promise of giving farmers confidence in animals they
            cannot watch continuously. If latency stayed unresolved, that promise failed in the largest and
            hardest to serve properties.
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <article className="rounded-xl border border-white/10 bg-[#1b1e24] p-4">
              <p className="text-xs font-bold uppercase tracking-wider text-brand-300">Now</p>
              <p className="mt-2 text-sm text-slate-200">Close latency gap on current collar hardware</p>
              <p className="mt-1 text-xs text-slate-400">Mesh relay and priority alerting</p>
            </article>
            <article className="rounded-xl border border-white/10 bg-[#1b1e24] p-4">
              <p className="text-xs font-bold uppercase tracking-wider text-brand-300">Next</p>
              <p className="mt-2 text-sm text-slate-200">Geofencing theft and predator alerts upsell</p>
              <p className="mt-1 text-xs text-slate-400">Built on same mesh relay pattern</p>
            </article>
            <article className="rounded-xl border border-white/10 bg-[#1b1e24] p-4">
              <p className="text-xs font-bold uppercase tracking-wider text-brand-300">Later</p>
              <p className="mt-2 text-sm text-slate-200">Farm wide mesh for water and gate sensors</p>
              <p className="mt-1 text-xs text-slate-400">Reuse relay infrastructure beyond collars</p>
            </article>
          </div>
          <p className="mt-4 text-sm text-slate-300">
            I pitched leadership on reusable mesh infrastructure, not a one purpose fix. Success was tied
            to retention in large property segments and the revenue path from future geofencing upsell.
          </p>
        </SectionShell>
      )}

      {active === 'business' && (
        <SectionShell>
          <SectionHeader eyebrow="4. Business case" title="Why mesh relay won" />
          <div className="grid gap-3 md:grid-cols-2">
            <article className="rounded-lg border border-white/10 bg-[#1b1e24] p-4">
              <p className="text-sm font-semibold text-slate-100">Option A: more fixed gateways</p>
              <p className="mt-2 text-sm text-slate-400">
                Rejected. It required customer capital spend and slow property by property rollout.
              </p>
            </article>
            <article className="rounded-lg border border-white/10 bg-[#1b1e24] p-4">
              <p className="text-sm font-semibold text-slate-100">Option B: collar to collar mesh relay</p>
              <p className="mt-2 text-sm text-slate-400">
                Chosen. It used existing hardware and attacked dead zone latency at the root.
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
            Confidence was deliberately moderate because field scale mesh performance on this hardware
            profile was unproven at kickoff.
          </p>
        </SectionShell>
      )}

      {active === 'solution' && (
        <SectionShell>
          <SectionHeader eyebrow="5. Product Concept" title="Concept scope and approach" />
          <div className="grid gap-3 md:grid-cols-2">
            <article className="rounded-lg border border-white/10 bg-[#1b1e24] p-4">
              <p className="text-sm font-semibold text-slate-100">Goals</p>
              <ul className="mt-2 space-y-1 text-sm text-slate-400">
                <li>• Reduce health alert latency in low coverage zones.</li>
                <li>• Preserve battery life while relaying priority traffic.</li>
              </ul>
            </article>
            <article className="rounded-lg border border-white/10 bg-[#1b1e24] p-4">
              <p className="text-sm font-semibold text-slate-100">Non goals</p>
              <ul className="mt-2 space-y-1 text-sm text-slate-400">
                <li>• No guarantee for properties below minimum collar density.</li>
                <li>• No new gateway hardware mandate in this phase.</li>
              </ul>
            </article>
          </div>
          <div className="mt-4 space-y-2">
            <p className="rounded-lg border border-white/10 bg-[#1b1e24] p-3 text-sm text-slate-300">
              As a farmer, I want health alerts delivered quickly even in dead zones, so I can act before
              animal condition worsens.
            </p>
            <p className="rounded-lg border border-white/10 bg-[#1b1e24] p-3 text-sm text-slate-300">
              As the platform team, I want higher data completeness for health models, so anomaly detection
              quality improves across large properties.
            </p>
          </div>
          <p className="mt-4 text-sm text-slate-300">
            I defined a mesh approach where collars form ad hoc relay paths and hop data toward the nearest
            gateway. Priority queuing places health alerts ahead of routine location pings.
          </p>
          <p className="mt-4 rounded-lg border border-amber-500/30 bg-amber-500/10 p-3 text-sm text-amber-100">
            Edge cases surfaced early: congestion during mustering events, battery impact from relaying
            peer traffic, and minimum collar density required for stable mesh formation.
          </p>

          <details className="mt-5 rounded-xl border border-brand-500/30 bg-[#111318] p-4">
            <summary className="cursor-pointer text-sm font-semibold text-brand-300">
              Feature PRD
            </summary>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-300">
              <p>
                <span className="font-semibold text-slate-100">Feature:</span> Priority Queuing for Mesh Relayed Health Alerts
              </p>
              <p>
                <span className="font-semibold text-slate-100">Overview:</span> A priority queuing scheme within the collar mesh network, ensuring health alert data reaches a gateway faster than routine location pings when a collar is relaying data through other collars in a low connectivity area.
              </p>
              <p>
                <span className="font-semibold text-slate-100">Problem:</span> In low connectivity zones, all collar data, health vitals and routine location pings alike, competes equally for mesh relay bandwidth, causing health alerts to arrive as slowly as routine data, sometimes many hours late.
              </p>
              <p>
                <span className="font-semibold text-slate-100">Goals:</span> Health alert data is relayed ahead of routine location data whenever mesh bandwidth is constrained. Alert latency in low connectivity zones drops to a defined target without requiring new hardware.
              </p>
              <p>
                <span className="font-semibold text-slate-100">Non goals:</span> This does not address properties with too few collars in range of each other to form a mesh at all, that is a hardware density problem outside this feature's scope. This does not change how alerts are generated or scored, only how they are transmitted once flagged.
              </p>

              <article className="rounded-lg border border-white/10 bg-[#1b1e24] p-3">
                <p className="font-semibold text-slate-100">User stories</p>
                <ul className="mt-2 space-y-2 text-slate-300">
                  <li>• As a farmer, I want to be alerted to a sick animal within an hour, even in areas with no signal, so I can act before the animal is seriously unwell.</li>
                  <li>• As the company, I want collar data to reach the cloud reliably, so health prediction models have complete data rather than gaps that reduce accuracy.</li>
                </ul>
              </article>

              <article className="rounded-lg border border-white/10 bg-[#1b1e24] p-3">
                <p className="font-semibold text-slate-100">Functional requirements</p>
                <ul className="mt-2 space-y-2 text-slate-300">
                  <li>• Each data packet is tagged at its origin collar as either priority, a health alert, or routine, a location ping.</li>
                  <li>• Relaying collars maintain a queue that always transmits priority tagged packets ahead of routine tagged packets, regardless of arrival order.</li>
                  <li>• During high volume events, such as mass mustering, the queue must not allow routine data to starve indefinitely, a maximum wait time is enforced for routine packets even under load.</li>
                  <li>• The system logs relay path and time in queue for every priority packet, to support latency measurement and debugging.</li>
                </ul>
              </article>

              <article className="rounded-lg border border-white/10 bg-[#1b1e24] p-3">
                <p className="font-semibold text-slate-100">Acceptance criteria</p>
                <ul className="mt-2 space-y-2 text-slate-300">
                  <li>• Given a mesh network carrying both priority and routine packets, when bandwidth is constrained, then priority packets are transmitted before any queued routine packets at that hop.</li>
                  <li>• Given a simulated mass mustering event generating high packet volume, when the queue is under load, then priority packets still reach the gateway within the defined latency target, and routine packets are not delayed beyond their defined maximum wait time.</li>
                  <li>• Given a collar relaying data for multiple other collars simultaneously, when battery telemetry is reviewed, then the incremental battery cost of relay duty is measured and reported per collar.</li>
                  <li>• Given a priority packet takes multiple hops to reach a gateway, when the relay log is reviewed, then the full path and per hop time is reconstructable for debugging.</li>
                </ul>
              </article>

              <article className="rounded-lg border border-white/10 bg-[#1b1e24] p-3">
                <p className="font-semibold text-slate-100">Edge cases to handle</p>
                <ul className="mt-2 space-y-2 text-slate-300">
                  <li>• Mesh congestion during mass movement events and whether priority queuing holds up under that load.</li>
                  <li>• Battery life impact on collars that end up relaying disproportionately more traffic than others due to their position in the herd or terrain.</li>
                  <li>• Minimum collar density required for a mesh to form at all, and how that limitation is communicated honestly rather than assumed away.</li>
                </ul>
              </article>

              <p>
                <span className="font-semibold text-slate-100">Metrics:</span> Alert latency in low connectivity zones before and after. Battery life impact per collar under relay load. Maximum observed wait time for routine packets during high volume events.
              </p>
            </div>
          </details>
        </SectionShell>
      )}

      {active === 'execution' && (
        <SectionShell>
          <SectionHeader eyebrow="7. Execution" title="Phased rollout plan" />
          <ul className="space-y-2 text-sm text-slate-300">
            <li className="rounded-lg border border-white/10 bg-[#1b1e24] p-3">
              Bench tested mesh formation and priority queues in simulation, including mass mustering
              congestion scenarios.
            </li>
            <li className="rounded-lg border border-white/10 bg-[#1b1e24] p-3">
              Piloted on two properties with different terrain profiles, one open pasture and one wooded gully.
            </li>
            <li className="rounded-lg border border-white/10 bg-[#1b1e24] p-3">
              Added kill switch fallback to direct only communication for collars with abnormal battery drain
              or relay instability.
            </li>
          </ul>
        </SectionShell>
      )}

      {active === 'validation' && (
        <SectionShell>
          <SectionHeader eyebrow="8. Data and validation" title="Pilot outcomes I tracked" />
          <div className="grid gap-3 md:grid-cols-3">
            <article className="rounded-lg border border-white/10 bg-[#1b1e24] p-3">
              <p className="text-xs uppercase tracking-wider text-slate-500">Alert latency</p>
              <p className="mt-1 text-sm text-slate-300">62 minutes to 14 minutes in pilot zones</p>
            </article>
            <article className="rounded-lg border border-white/10 bg-[#1b1e24] p-3">
              <p className="text-xs uppercase tracking-wider text-slate-500">Battery impact</p>
              <p className="mt-1 text-sm text-slate-300">Average life reduced 6.4% under relay load</p>
            </article>
            <article className="rounded-lg border border-white/10 bg-[#1b1e24] p-3">
              <p className="text-xs uppercase tracking-wider text-slate-500">Second order risk watch</p>
              <p className="mt-1 text-sm text-slate-300">Tracked geofencing reliability drift weekly</p>
            </article>
          </div>
        </SectionShell>
      )}

      {active === 'launch' && (
        <SectionShell>
          <SectionHeader eyebrow="9. Launch and communication" title="Three audience views" />
          <div className="grid gap-3 md:grid-cols-3">
            <article className="rounded-lg border border-white/10 bg-[#1b1e24] p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-300">Customer message</p>
              <p className="mt-2 text-sm text-slate-300">
                Your herd stays connected even where there is no signal.
              </p>
            </article>
            <article className="rounded-lg border border-white/10 bg-[#1b1e24] p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-300">Executive update</p>
              <p className="mt-2 text-sm text-slate-300">
                Mesh relay shipped in pilot, latency risk reduced, retention pressure addressed, geofencing upsell path opened.
              </p>
            </article>
            <article className="rounded-lg border border-white/10 bg-[#1b1e24] p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-300">Engineering note</p>
              <p className="mt-2 text-sm text-slate-300">
                Priority queue rules and relay battery tradeoff data documented for next hardware planning cycle.
              </p>
            </article>
          </div>
        </SectionShell>
      )}

      {active === 'ai' && (
        <SectionShell>
          <SectionHeader eyebrow="10. AI integration" title="Scoped agents and workflow leverage" />
          <div className="grid gap-3 lg:grid-cols-2">
            <article className="rounded-xl border border-white/10 bg-[#1b1e24] p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-300">Layer one: AI inside the product</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li>
                  <span className="font-semibold text-slate-100">Herd health agent.</span> Flags vitals patterns that deviate from each animal baseline.
                  It cannot recommend culling or selling.
                </li>
                <li>
                  <span className="font-semibold text-slate-100">Network health agent.</span> Flags collars with degraded relay behavior for technician review.
                  It cannot modify relay priority rules.
                </li>
              </ul>
            </article>
            <article className="rounded-xl border border-white/10 bg-[#1b1e24] p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-300">Layer two: AI in PM workflow</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li>Clustered interview transcripts by property size and terrain to isolate latency patterns faster.</li>
                <li>Used an agent to pressure test the counter case for fixed gateway expansion before final option selection.</li>
                <li>Ran analysis assistance on pilot telemetry to detect geofencing side effects faster than manual query review.</li>
              </ul>
            </article>
          </div>
          <p className="mt-4 rounded-lg border border-brand-500/25 bg-brand-500/10 p-3 text-sm text-brand-100">
            Guardrails before autonomy. I use AI for synthesis and pattern detection. I keep it out of
            animal welfare and livelihood decisions without a human in the loop. No agent in this system
            can make cull, sell, or veterinary decisions on its own.
          </p>
        </SectionShell>
      )}

      {active === 'feedback' && (
        <SectionShell>
          <SectionHeader eyebrow="11. Feedback loops and iteration" title="What I monitored after rollout" />
          <p className="text-sm leading-relaxed text-slate-300">
            After wider rollout I monitored mesh performance and battery impact across a full grazing season
            because herd movement and terrain vary with weather and rotation. Farmer feedback fed directly
            into phase two planning. I prioritized geofencing and predator alert upsell next because it
            reused the same relay foundation and offered stronger near term commercial upside than competing items.
          </p>
        </SectionShell>
      )}

      {active === 'wireframe' && (
        <SectionShell>
          <SectionHeader eyebrow="6. Wireframe UI" title="Low fidelity interface flow" />
          <div className="grid gap-4 lg:grid-cols-3">
            <WireframeScreen
              title="Farmer dashboard"
              subtitle="Animal health and location actions"
              panels={[
                { label: 'Alert queue', rows: 3 },
                { label: 'Map and dead zone layer', rows: 4 },
                { label: 'Battery watchlist', rows: 2 },
              ]}
            />
            <WireframeScreen
              title="Field engineer view"
              subtitle="Mesh health and reliability controls"
              panels={[
                { label: 'Relay quality map', rows: 3 },
                { label: 'Congestion incidents', rows: 3 },
                { label: 'Direct mode controls', rows: 2 },
              ]}
            />
            <WireframeScreen
              title="Commercial dashboard"
              subtitle="Retention and upsell readiness"
              panels={[
                { label: 'Renewal risk list', rows: 3 },
                { label: 'Latency trend chart', rows: 3 },
                { label: 'Season summary', rows: 2 },
              ]}
            />
          </div>
        </SectionShell>
      )}
    </div>
  );
}
