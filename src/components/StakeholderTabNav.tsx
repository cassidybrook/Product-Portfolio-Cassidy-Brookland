import type { DemoStakeholderTab } from '../types/navigation';

const tabs: { id: DemoStakeholderTab; label: string; audience: string; accent: string }[] = [
  {
    id: 'customer-success',
    label: 'Customer Success',
    audience: 'Site health & retention',
    accent: 'hover:border-sky-500/30',
  },
  {
    id: 'sales',
    label: 'Sales',
    audience: 'Pipeline & onboards',
    accent: 'hover:border-brand-500/30',
  },
  {
    id: 'marketing',
    label: 'Marketing',
    audience: 'Impact & proof points',
    accent: 'hover:border-amber-500/30',
  },
  {
    id: 'ops',
    label: 'Ops',
    audience: 'Fleet & deployments',
    accent: 'hover:border-cyan-500/30',
  },
];

interface StakeholderTabNavProps {
  active: DemoStakeholderTab;
  onChange: (tab: DemoStakeholderTab) => void;
}

export function StakeholderTabNav({ active, onChange }: StakeholderTabNavProps) {
  return (
    <nav
      className="glass-panel overflow-x-auto p-1.5"
      role="tablist"
      aria-label="Stakeholder views"
    >
      <div className="flex min-w-max gap-1 sm:min-w-0 sm:flex-wrap">
        {tabs.map((tab) => {
          const isActive = active === tab.id;
          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => onChange(tab.id)}
              className={`rounded-xl px-4 py-2.5 text-left transition-all duration-300 ${
                isActive
                  ? 'bg-white/10 text-white shadow-sm ring-1 ring-white/10'
                  : `border border-transparent text-slate-400 ${tab.accent} hover:bg-white/[0.03] hover:text-white`
              }`}
            >
              <span className="block text-sm font-semibold tracking-tight">{tab.label}</span>
              <span className={`mt-0.5 block text-[11px] ${isActive ? 'text-slate-300' : 'text-slate-500'}`}>
                {tab.audience}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

export { tabs };
