import type { ReactNode } from 'react';

type PanelVariant = 'default' | 'brand' | 'hover';

const variantClass: Record<PanelVariant, string> = {
  default: 'glass-panel',
  brand: 'glass-panel-brand',
  hover: 'glass-panel-hover',
};

interface SectionShellProps {
  children: ReactNode;
  variant?: PanelVariant;
  className?: string;
  padding?: 'sm' | 'md' | 'lg';
}

const paddingClass = {
  sm: 'p-4',
  md: 'p-5 sm:p-6',
  lg: 'p-6 sm:p-8',
};

export function SectionShell({
  children,
  variant = 'default',
  className = '',
  padding = 'md',
}: SectionShellProps) {
  return (
    <section className={`${variantClass[variant]} ${paddingClass[padding]} ${className}`}>
      {children}
    </section>
  );
}

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({ eyebrow, title, subtitle, className = '' }: SectionHeaderProps) {
  return (
    <header className={`mb-5 ${className}`}>
      {eyebrow && <p className="eyebrow mb-2">{eyebrow}</p>}
      <h3 className="section-header-title">{title}</h3>
      {subtitle && <p className="section-header-subtitle">{subtitle}</p>}
    </header>
  );
}
