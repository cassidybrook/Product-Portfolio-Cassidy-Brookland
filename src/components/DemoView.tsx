import { productDemos, type ProductDemoCase } from '../data/productDemos';
import type { DemoSectionTab } from '../types/navigation';
import { HarvestLinkDemoView } from './HarvestLinkDemoView';
import { PastureIQDemoView } from './PastureIQDemoView';
import { WattWalletDemoView } from './WattWalletDemoView';
import { SectionHeader, SectionShell } from './ui/SectionShell';

interface DemoViewProps {
  section: DemoSectionTab;
  onSectionChange: (section: DemoSectionTab) => void;
}

export function DemoView({ section, onSectionChange }: DemoViewProps) {
  const activeDemo = section === 'landing' ? null : productDemos[section];

  return (
    <div className="space-y-8">
      <SectionShell variant="brand" padding="lg">
        <SectionHeader
          eyebrow="Product demo"
          title="Three synthetic end to end product demos"
          subtitle="Choose one complete flow and review discovery through post launch iteration. All names, metrics, and scenarios in this tab are invented for demonstration."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <DemoEntryCard
            demo={productDemos.pastureiq}
            active={section === 'pastureiq'}
            onOpen={() => onSectionChange('pastureiq')}
          />
          <DemoEntryCard
            demo={productDemos.wattwallet}
            active={section === 'wattwallet'}
            onOpen={() => onSectionChange('wattwallet')}
          />
          <DemoEntryCard
            demo={productDemos.harvestlink}
            active={section === 'harvestlink'}
            onOpen={() => onSectionChange('harvestlink')}
          />
        </div>
      </SectionShell>

      {activeDemo && (
        activeDemo.id === 'pastureiq' ? (
          <PastureIQDemoView />
        ) : activeDemo.id === 'wattwallet' ? (
          <WattWalletDemoView />
        ) : (
          <HarvestLinkDemoView />
        )
      )}
    </div>
  );
}

interface DemoEntryCardProps {
  demo: ProductDemoCase;
  active: boolean;
  onOpen: () => void;
}

function DemoEntryCard({ demo, active, onOpen }: DemoEntryCardProps) {
  return (
    <article
      className={`rounded-xl border p-5 transition ${
        active
          ? 'border-brand-500/40 bg-brand-500/10 shadow-glow'
          : 'border-white/10 bg-[#1b1e24] hover:border-brand-500/30'
      }`}
    >
      <h3 className="text-lg font-semibold text-slate-100">{demo.label}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-400">{demo.shortDescription}</p>
      <button
        type="button"
        onClick={onOpen}
        className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-300 transition hover:text-brand-200"
      >
        Open full demo flow →
      </button>
    </article>
  );
}
