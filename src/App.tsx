import { useState } from 'react';
import { portfolioProfile } from './data/portfolioData';
import type { DemoSectionTab, PrimaryTab } from './types/navigation';
import { PrimaryNav } from './components/PrimaryNav';
import { PortfolioView } from './components/PortfolioView';
import { DemoView } from './components/DemoView';
import { StayCurrentView } from './components/StayCurrentView';

export default function App() {
  const [activePrimary, setActivePrimary] = useState<PrimaryTab>('profile');
  const [demoSection, setDemoSection] = useState<DemoSectionTab>('landing');
  const { site, linkedin, resumeUrl } = portfolioProfile;

  const openDemoSection = (section: DemoSectionTab) => {
    setDemoSection(section);
    setActivePrimary('demo');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="orb left-0 top-0 h-96 w-96 animate-float bg-brand-500/10" />
      <div
        className="orb bottom-0 right-0 h-80 w-80 animate-float bg-brand-500/10"
        style={{ animationDelay: '-3s' }}
      />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#111318]/85 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow">Product Manager</p>
              <h1 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                <span className="gradient-text">{site.name}</span>
              </h1>
              <p className="mt-2 text-base font-medium text-brand-300">{site.tagline}</p>
            </div>
            <div className="flex shrink-0 items-center gap-3">
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-brand-500 to-brand-600 px-4 py-2 text-sm font-semibold text-white transition hover:from-brand-400 hover:to-brand-500"
              >
                Download CV
              </a>
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#1b1e24] px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-brand-500/40 hover:bg-brand-500/10 hover:text-brand-200"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <PrimaryNav active={activePrimary} onChange={setActivePrimary} />

        <div className="tab-panel-enter mt-8 lg:mt-10" role="tabpanel" key={activePrimary}>
          {activePrimary === 'profile' ? (
            <PortfolioView onOpenDemoSection={openDemoSection} />
          ) : activePrimary === 'demo' ? (
            <DemoView section={demoSection} onSectionChange={setDemoSection} />
          ) : (
            <StayCurrentView />
          )}
        </div>
      </main>

      <footer className="relative border-t border-white/10 py-8">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs text-slate-500">
            Profile tab: real CV history · Product Demo tab: synthetic work sample
          </p>
        </div>
      </footer>
    </div>
  );
}
