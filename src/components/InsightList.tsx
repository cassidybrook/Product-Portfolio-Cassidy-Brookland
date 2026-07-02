import type { Insight } from '../types';
import { SeverityBadge } from './HeadlineCard';
import { SectionHeader, SectionShell } from './ui/SectionShell';

interface InsightListProps {
  title: string;
  subtitle: string;
  insights: Insight[];
}

export function InsightList({ title, subtitle, insights }: InsightListProps) {
  return (
    <SectionShell>
      <SectionHeader title={title} subtitle={subtitle} />
      <ul className="space-y-4">
        {insights.map((insight, index) => (
          <li
            key={insight.id}
            className="insight-card"
            style={{ animationDelay: `${index * 60}ms` }}
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <h4 className="pr-2 font-semibold leading-snug text-slate-100">
                {insight.title}
              </h4>
              <SeverityBadge severity={insight.severity} />
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">{insight.summary}</p>
            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500">
              {insight.site && (
                <span className="rounded-md bg-slate-800/80 px-2 py-0.5">{insight.site}</span>
              )}
              <span>{insight.timestamp}</span>
            </div>
            <p className="action-callout mt-4">
              <span className="font-semibold text-brand-300">Next step · </span>
              {insight.action}
            </p>
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
