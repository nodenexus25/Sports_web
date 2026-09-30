import type { ReactNode } from 'react';

interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
}

function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
}: SectionHeaderProps) {
  const alignClass =
    align === 'center' ? 'text-center mx-auto max-w-3xl' : 'text-left max-w-2xl';

  return (
    <div className={`${alignClass} ${className}`}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2.5 mb-5">
          <span className="w-10 h-px bg-accent/60" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">
            {eyebrow}
          </span>
          <span className="w-10 h-px bg-accent/60 hidden sm:inline-block" />
        </div>
      )}
      <h2 className="heading-display text-3xl sm:text-4xl md:text-5xl mb-5 text-balance leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className="text-base md:text-lg text-charcoal-600 leading-relaxed text-balance">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeader;
