import { SectionHeader, SectionShell } from './ui/SectionShell';

const sections = [
  {
    title: 'Reading and signal',
    body: 'I follow a small set of newsletters that consistently surface real signal over hype, including IoT For All and The Neuron. I treat these as a starting point for deeper reading, not the finish line. When something looks genuinely relevant to energy, IoT, or product practice, I follow it back to the primary source.',
  },
  {
    title: 'People over feeds',
    body: 'I keep myself close to people who think the way I do: technically grounded, curious, willing to challenge an assumption out loud. Being surrounded by people who ask good questions does more for staying current than any single feed, because it forces me to test what I think I know against what other practitioners are actually seeing.',
  },
  {
    title: 'Hands-on practice',
    body: 'I stay current by building, not just reading. Working directly with hardware like ESP32 and Shelly devices keeps my understanding of IoT constraints and tradeoffs grounded in something real rather than theoretical, and it means I can speak to engineering teams from direct experience, not secondhand summary.',
  },
  {
    title: 'Intentional practice',
    body: 'Following something is not the same as understanding it. I use intentional practice to make sure new concepts actually stick: explaining them in my own words, applying them to a real or invented scenario, and testing whether I can articulate the why clearly enough for someone else to follow. If I cannot explain it simply, I do not consider it learned yet.',
  },
  {
    title: 'AI in daily practice',
    body: 'Staying current with AI is not just reading about it, it is using it well. Cursor and Claude are part of my daily workflow: drafting discovery plans, PRDs, and test scenarios, then pressure-testing them against stakeholder personas before anything moves to review. AI speeds up option generation and synthesis, but prioritization and tradeoff calls stay mine.',
  },
];

export function StayCurrentView() {
  return (
    <div className="space-y-8">
      <SectionShell variant="brand" padding="lg">
        <SectionHeader
          eyebrow="Practice"
          title="How I Stay Current"
          subtitle="Staying sharp across AI, IoT, energy, and product."
        />
      </SectionShell>

      <SectionShell>
        <div className="space-y-3">
          {sections.map((section) => (
            <article key={section.title} className="glass-panel-hover rounded-xl p-4 sm:p-5">
              <h4 className="text-sm font-semibold text-brand-300">{section.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{section.body}</p>
            </article>
          ))}
        </div>
      </SectionShell>
    </div>
  );
}
