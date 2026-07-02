import type { SiteHealth } from '../types';
import { SeverityBadge } from './HeadlineCard';
import { SectionHeader, SectionShell } from './ui/SectionShell';

const statusConfig: Record<
  SiteHealth['status'],
  { label: string; severity: 'success' | 'warning' | 'critical' }
> = {
  healthy: { label: 'Healthy', severity: 'success' },
  'at-risk': { label: 'At risk', severity: 'warning' },
  offline: { label: 'Offline', severity: 'critical' },
};

interface SiteHealthTableProps {
  sites: SiteHealth[];
}

export function SiteHealthTable({ sites }: SiteHealthTableProps) {
  return (
    <SectionShell>
      <SectionHeader
        eyebrow="Fleet overview"
        title="Site health"
        subtitle="Who: CS managers. What: Peak load and device status. So what: Prioritise outreach."
      />
      <div className="overflow-x-auto rounded-xl border border-white/[0.04]">
        <table className="data-table w-full min-w-[640px] text-left text-sm">
          <thead>
            <tr>
              <th>Site</th>
              <th>Status</th>
              <th>Peak load</th>
              <th>Reduction</th>
              <th>Devices</th>
              <th>Last contact</th>
            </tr>
          </thead>
          <tbody>
            {sites.map((site) => {
              const status = statusConfig[site.status];
              return (
                <tr key={site.id}>
                  <td>
                    <p className="font-medium text-slate-100">{site.name}</p>
                    <p className="text-xs text-slate-500">{site.region}</p>
                  </td>
                  <td>
                    <SeverityBadge severity={status.severity} label={status.label} />
                  </td>
                  <td className="font-mono text-sm text-slate-300">
                    {site.status === 'offline' ? '—' : `${site.peakLoadKw} kW`}
                  </td>
                  <td>
                    {site.peakReductionPct > 0 ? (
                      <span className="inline-flex items-center gap-1 font-medium text-brand-400">
                        ↓ {site.peakReductionPct}%
                      </span>
                    ) : (
                      <span className="text-slate-600">—</span>
                    )}
                  </td>
                  <td className="font-mono text-sm text-slate-300">
                    <span className="text-white">{site.devicesOnline}</span>
                    <span className="text-slate-600">/{site.devicesTotal}</span>
                  </td>
                  <td className="text-slate-500">{site.lastContact}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </SectionShell>
  );
}
