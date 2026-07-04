interface WireframePanel {
  label: string;
  rows: number;
}

interface WireframeScreenProps {
  title: string;
  subtitle: string;
  panels: WireframePanel[];
}

export function WireframeScreen({ title, subtitle, panels }: WireframeScreenProps) {
  return (
    <article className="rounded-xl border border-white/10 bg-[#1b1e24] p-4">
      <p className="text-xs uppercase tracking-wider text-slate-500">{title}</p>
      <p className="mt-1 text-xs text-slate-400">{subtitle}</p>

      <div className="mt-3 rounded-lg border border-white/20 bg-[#111318] p-2">
        <div className="mb-2 flex items-center justify-between rounded border border-white/10 bg-[#171b22] px-2 py-1">
          <div className="flex gap-1">
            <span className="h-2 w-2 rounded-full bg-slate-600" />
            <span className="h-2 w-2 rounded-full bg-slate-600" />
            <span className="h-2 w-2 rounded-full bg-slate-600" />
          </div>
          <span className="h-2 w-16 rounded bg-slate-700" />
        </div>

        <div className="space-y-2">
          {panels.map((panel) => (
            <section key={panel.label} className="rounded border border-dashed border-slate-600/70 p-2">
              <p className="text-[10px] uppercase tracking-wider text-slate-500">{panel.label}</p>
              <div className="mt-1 space-y-1">
                {Array.from({ length: panel.rows }).map((_, index) => (
                  <span
                    key={`${panel.label}-${index}`}
                    className={`block h-2 rounded bg-slate-700/90 ${
                      index % 3 === 2 ? 'w-2/3' : 'w-full'
                    }`}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}
