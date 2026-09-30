import type { ReactNode } from 'react';

interface FeatureCardProps {
  icon?: ReactNode;
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  index?: number;
}

function FeatureCard({ icon, eyebrow, title, description, className = '', index = 0 }: FeatureCardProps) {
  return (
    <div
      className={`card card-hover p-7 md:p-8 relative overflow-hidden group ${className}`}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-accent/5 group-hover:bg-accent/[0.08] transition-colors duration-500" />

      {icon && (
        <div className="w-12 h-12 rounded-xl bg-leather-100 text-leather-700 flex items-center justify-center mb-5 group-hover:bg-accent group-hover:text-white transition-colors duration-500">
          {icon}
        </div>
      )}

      {eyebrow && (
        <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent mb-2">
          {eyebrow}
        </div>
      )}

      <h3 className="heading-display text-xl md:text-[22px] text-charcoal-900 mb-3 leading-tight">
        {title}
      </h3>

      {description && (
        <p className="text-sm text-charcoal-600 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

export default FeatureCard;
