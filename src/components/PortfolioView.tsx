import { portfolioProfile } from '../data/portfolioData';
import type { DemoSectionTab } from '../types/navigation';
import { SectionHeader, SectionShell } from './ui/SectionShell';

interface PortfolioViewProps {
  onOpenDemoSection: (section: DemoSectionTab) => void;
}

export function PortfolioView({ onOpenDemoSection }: PortfolioViewProps) {
  const {
    intro,
    productFocus,
    impactMetrics,
    featuredProjects,
    skillGroups,
    education,
    experience,
    aiSummary,
    builtWith,
    email,
    linkedin,
    resumeUrl,
  } = portfolioProfile;

  return (
    <div className="space-y-8">
      <SectionShell variant="brand" padding="lg">
        <p className="eyebrow mb-3">Hi, I&apos;m Cassidy</p>
        <p className="max-w-3xl text-base leading-relaxed text-slate-200 sm:text-lg">{intro}</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {productFocus.map((focus) => (
            <li key={focus} className="skill-pill">
              {focus}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-brand-500 to-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:from-brand-400 hover:to-brand-500"
          >
            ↓ View CV
          </a>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#1b1e24] px-5 py-2.5 text-sm font-medium text-slate-200 transition hover:border-brand-500/40 hover:bg-brand-500/10 hover:text-brand-200"
          >
            LinkedIn
          </a>
          <a href={`mailto:${email}`} className="link-subtle text-sm">
            {email}
          </a>
        </div>
      </SectionShell>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {impactMetrics.map((metric, index) => (
          <article
            key={metric.label}
            className="glass-panel-hover p-5"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <p className="metric-value">
              <span className="gradient-text-hero">{metric.value}</span>
            </p>
            <p className="mt-2 text-sm font-semibold text-brand-300">{metric.label}</p>
            <p className="mt-1 text-xs leading-relaxed text-slate-500">{metric.context}</p>
          </article>
        ))}
      </section>

      <SectionShell>
        <SectionHeader
          eyebrow="Featured projects"
          title="Work you can explore right now"
          subtitle="Each project lives inside the Product Demo tab — click through to see the PM thinking, not just the output."
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <article key={project.id} className="insight-card flex flex-col p-5">
              <h4 className="font-semibold text-slate-100">{project.title}</h4>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                {project.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-slate-800/80 px-2.5 py-0.5 text-[11px] font-medium text-slate-400"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => onOpenDemoSection(project.demoAnchor)}
                className="mt-4 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-brand-400 transition hover:text-brand-300"
              >
                Open in Product Demo →
              </button>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell>
        <SectionHeader
          eyebrow="Career"
          title="Experience"
          subtitle="Sector-focused roles — employer names omitted for discretion."
        />
        <div className="relative space-y-0">
          {experience.map((entry, index) => (
            <article
              key={entry.id}
              className="relative border-l border-brand-500/20 pb-8 pl-6 last:pb-0"
            >
              <span className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full border-2 border-brand-500 bg-[#111318]" />
              <div className="glass-panel-hover rounded-xl p-4 sm:p-5">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h4 className="font-semibold text-slate-100">{entry.role}</h4>
                  <span className="text-sm text-slate-500">{entry.period}</span>
                </div>
                <p className="mt-1 text-sm font-medium text-brand-400/90">{entry.sector}</p>
                <ul className="mt-4 space-y-2.5">
                  {entry.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-2.5 text-sm leading-relaxed text-slate-400"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-500" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
              {index < experience.length - 1 && (
                <div className="absolute bottom-4 left-0 h-full w-px bg-gradient-to-b from-brand-500/20 to-transparent" />
              )}
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell>
        <SectionHeader
          eyebrow="Capabilities"
          title="Technical skills"
          subtitle="Hands-on depth across the IoT stack and AI-native PM workflows — not just roadmap slides."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <article key={group.category} className="glass-panel-hover rounded-xl p-4">
              <h4 className="text-sm font-semibold text-brand-300">{group.category}</h4>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className="skill-pill">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell>
        <SectionHeader eyebrow="Background" title="Education" />
        <div className="grid gap-3 sm:grid-cols-2">
          {education.map((entry) => (
            <article key={entry.id} className="glass-panel-hover rounded-xl p-4 sm:p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h4 className="font-semibold text-slate-100">{entry.qualification}</h4>
                <span className="rounded-full bg-slate-800 px-2.5 py-0.5 text-xs text-slate-400">
                  {entry.period}
                </span>
              </div>
              <p className="mt-1 text-sm text-slate-400">{entry.institution}</p>
              {entry.note && (
                <p className="mt-2 text-xs font-medium text-brand-400/90">{entry.note}</p>
              )}
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell variant="brand" padding="lg">
        <SectionHeader
          eyebrow="How I use AI"
          title={aiSummary.headline}
          subtitle={aiSummary.toolchain}
        />
        <ul className="grid gap-3 sm:grid-cols-2">
          {aiSummary.bullets.map((bullet) => (
            <li
              key={bullet}
              className="flex gap-3 rounded-xl border border-brand-500/20 bg-[#1b1e24] p-4 text-sm leading-relaxed text-slate-300"
            >
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-xs font-bold text-brand-300">
                ✓
              </span>
              {bullet}
            </li>
          ))}
        </ul>
      </SectionShell>

      <section className="relative overflow-hidden rounded-2xl border border-dashed border-brand-500/25 bg-gradient-to-r from-brand-900/30 via-[#1b1e24] to-brand-800/20 px-6 py-8 text-center">
        <div className="orb left-1/2 top-0 h-32 w-64 -translate-x-1/2 bg-brand-500/10" />
        <p className="relative text-sm leading-relaxed text-slate-400">{builtWith}</p>
      </section>
    </div>
  );
}
