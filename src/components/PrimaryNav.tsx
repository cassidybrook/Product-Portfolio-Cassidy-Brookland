import type { PrimaryTab } from '../types/navigation';

interface PrimaryNavProps {
  active: PrimaryTab;
  onChange: (tab: PrimaryTab) => void;
}

const tabs: { id: PrimaryTab; label: string; description: string }[] = [
  {
    id: 'profile',
    label: 'Profile',
    description: 'Real CV, roles, and education',
  },
  {
    id: 'demo',
    label: 'Product Demo',
    description: 'Synthetic work sample only',
  },
  {
    id: 'stay-current',
    label: 'How I Stay Current',
    description: 'Staying sharp across AI, IoT, energy, and product.',
  },
];

export function PrimaryNav({ active, onChange }: PrimaryNavProps) {
  return (
    <nav
      className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-2"
      role="tablist"
      aria-label="Main sections"
    >
      {tabs.map((tab) => {
        const isActive = active === tab.id;
        return (
          <button
            key={tab.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(tab.id)}
            className={`flex-1 rounded-2xl px-5 py-4 text-left transition-all duration-300 sm:flex-initial sm:min-w-[200px] ${
              isActive
                ? 'bg-gradient-to-br from-brand-600 to-brand-700 text-white shadow-glow'
                : 'glass-panel hover:border-white/10'
            }`}
          >
            <span className="block text-base font-semibold tracking-tight">{tab.label}</span>
            <span
              className={`mt-0.5 block text-xs ${
                isActive ? 'text-white/75' : 'text-slate-500'
              }`}
            >
              {tab.description}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
