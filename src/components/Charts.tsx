import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import type { ConnectivityPoint, EnergyTrendPoint, OnboardPipeline } from '../types';
import { SectionHeader, SectionShell } from './ui/SectionShell';

const chartTooltipStyle = {
  contentStyle: {
    backgroundColor: 'rgba(7, 11, 20, 0.95)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '12px',
    fontSize: '13px',
    boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
  },
  labelStyle: { color: '#94a3b8', fontWeight: 600 },
  itemStyle: { color: '#e2e8f0' },
};

interface OnboardChartProps {
  data: OnboardPipeline[];
}

export function OnboardChart({ data }: OnboardChartProps) {
  return (
    <SectionShell>
      <SectionHeader
        eyebrow="Sales KPI"
        title="Monthly onboard target"
        subtitle="3 new customer sites per month — smart energy monitoring go-lives."
      />
      <div className="h-72 rounded-xl border border-white/[0.04] bg-slate-950/30 p-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barGap={6}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" vertical={false} />
            <XAxis dataKey="month" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} allowDecimals={false} />
            <Tooltip {...chartTooltipStyle} cursor={{ fill: 'rgba(255,255,255,0.03)' }} />
            <Legend wrapperStyle={{ fontSize: '12px', color: '#94a3b8', paddingTop: '12px' }} />
            <Bar dataKey="target" name="Target" fill="#334155" radius={[6, 6, 0, 0]} />
            <Bar dataKey="completed" name="Completed" fill="#10b981" radius={[6, 6, 0, 0]} />
            <Bar dataKey="inProgress" name="In progress" fill="#38bdf8" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </SectionShell>
  );
}

interface EnergyTrendChartProps {
  data: EnergyTrendPoint[];
}

export function EnergyTrendChart({ data }: EnergyTrendChartProps) {
  return (
    <SectionShell>
      <SectionHeader
        eyebrow="Marketing story"
        title="Portfolio peak demand trend"
        subtitle="Average peak kW vs baseline — the proof point Sales and Marketing lead with."
      />
      <div className="h-72 rounded-xl border border-white/[0.04] bg-slate-950/30 p-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" vertical={false} />
            <XAxis dataKey="date" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} unit=" kW" />
            <Tooltip {...chartTooltipStyle} />
            <Legend wrapperStyle={{ fontSize: '12px', color: '#94a3b8', paddingTop: '12px' }} />
            <Line
              type="monotone"
              dataKey="baselineKw"
              name="Baseline peak"
              stroke="#64748b"
              strokeWidth={2}
              dot={false}
              strokeDasharray="4 4"
            />
            <Line
              type="monotone"
              dataKey="peakKw"
              name="Actual peak"
              stroke="#f59e0b"
              strokeWidth={2.5}
              dot={{ r: 4, fill: '#f59e0b', strokeWidth: 0 }}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="savingsKw"
              name="Savings"
              stroke="#10b981"
              strokeWidth={2.5}
              dot={{ r: 4, fill: '#10b981', strokeWidth: 0 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </SectionShell>
  );
}

interface ConnectivityChartProps {
  data: ConnectivityPoint[];
}

export function ConnectivityChart({ data }: ConnectivityChartProps) {
  return (
    <SectionShell>
      <SectionHeader
        eyebrow="Network health"
        title="LoRaWAN fleet uptime (24h)"
        subtitle="Devices reporting within 15 minutes — spot regressions before customers do."
      />
      <div className="h-64 rounded-xl border border-white/[0.04] bg-slate-950/30 p-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" vertical={false} />
            <XAxis dataKey="hour" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis
              stroke="#64748b"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              domain={[90, 100]}
              unit="%"
            />
            <Tooltip {...chartTooltipStyle} />
            <Line
              type="monotone"
              dataKey="onlinePct"
              name="Online %"
              stroke="#10b981"
              strokeWidth={2.5}
              dot={{ r: 4, fill: '#10b981', strokeWidth: 0 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </SectionShell>
  );
}
