import type { Severity, Trend } from '../types';

const severityStyles: Record<Severity, string> = {
  critical:
    'bg-red-500/10 text-red-700 border-red-400/25 shadow-[0_0_12px_-4px_rgba(248,113,113,0.3)]',
  warning:
    'bg-amber-500/10 text-amber-700 border-amber-400/25 shadow-[0_0_12px_-4px_rgba(251,191,36,0.2)]',
  info: 'bg-sky-500/10 text-sky-700 border-sky-400/25',
  success:
    'bg-brand-500/10 text-brand-700 border-brand-400/25 shadow-[0_0_12px_-4px_rgba(52,211,153,0.2)]',
};

const severityDot: Record<Severity, string> = {
  critical: 'bg-red-400 shadow-[0_0_6px_rgba(248,113,113,0.8)]',
  warning: 'bg-amber-400 shadow-[0_0_6px_rgba(251,191,36,0.6)]',
  info: 'bg-sky-400',
  success: 'bg-brand-400 shadow-[0_0_6px_rgba(52,211,153,0.6)]',
};

interface SeverityBadgeProps {
  severity: Severity;
  label?: string;
}

export function SeverityBadge({ severity, label }: SeverityBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide ${severityStyles[severity]}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${severityDot[severity]}`} />
      {label ?? severity}
    </span>
  );
}

const trendIcons: Record<Trend, string> = {
  up: '↑',
  down: '↓',
  flat: '→',
};

interface TrendIndicatorProps {
  trend: Trend;
  label: string;
  invert?: boolean;
}

export function TrendIndicator({ trend, label, invert }: TrendIndicatorProps) {
  const isPositive =
    trend === 'up' ? !invert : trend === 'down' ? invert : true;
  const color =
    trend === 'flat'
      ? 'text-slate-400'
      : isPositive
        ? 'text-brand-700'
        : 'text-red-700';

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-white/[0.06] bg-white/[0.03] px-3 py-1 text-sm font-medium ${color}`}
    >
      <span>{trendIcons[trend]}</span>
      {label}
    </span>
  );
}

interface HeadlineCardProps {
  label: string;
  value: string;
  context: string;
  trend?: Trend;
  trendLabel?: string;
  severity?: Severity;
  invertTrend?: boolean;
}

export function HeadlineCard({
  label,
  value,
  context,
  trend,
  trendLabel,
  severity,
  invertTrend,
}: HeadlineCardProps) {
  return (
    <section className="glass-panel-brand relative overflow-hidden p-6 shadow-glow sm:p-8">
      <div className="orb -right-16 -top-16 h-48 w-48 animate-pulse-soft bg-brand-500/20" />
      <div className="orb -bottom-20 left-1/3 h-40 w-40 bg-accent-cyan/10" />

      <div className="relative">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <p className="eyebrow">{label}</p>
          {severity && <SeverityBadge severity={severity} />}
        </div>
        <p className="mt-4 font-display text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
          <span className="gradient-text-hero">{value}</span>
        </p>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
          {context}
        </p>
        {trend && trendLabel && (
          <div className="mt-6">
            <TrendIndicator trend={trend} label={trendLabel} invert={invertTrend} />
          </div>
        )}
      </div>
    </section>
  );
}
