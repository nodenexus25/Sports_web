import { Link } from 'react-router-dom';
import Button from './Button';

interface CtaSectionProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  primaryText?: string;
  secondaryText?: string;
  primaryTo?: string;
  secondaryTo?: string;
  className?: string;
  variant?: 'dark' | 'light' | 'leather';
}

function CtaSection({
  eyebrow = 'Get In Touch',
  title,
  description,
  primaryText = 'Request an Inquiry',
  secondaryText = 'Browse Products',
  primaryTo = '/contact',
  secondaryTo = '/products',
  className = '',
  variant = 'dark',
}: CtaSectionProps) {
  const variants = {
    dark: 'bg-charcoal-900 text-cream-50',
    light: 'bg-cream-100 text-charcoal-900',
    leather: 'bg-gradient-to-br from-leather-800 to-leather-900 text-cream-50',
  };

  return (
    <section className={`section-padding relative overflow-hidden ${variants[variant]} ${className}`}>
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent rounded-full blur-3xl -translate-y-1/3 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-leather-300 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
      </div>

      <div className="container-page relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2.5 mb-6">
            <span className={`w-10 h-px ${variant === 'light' ? 'bg-accent' : 'bg-leather-400/80'}`} />
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">
              {eyebrow}
            </span>
            <span className={`w-10 h-px hidden sm:inline-block ${variant === 'light' ? 'bg-accent' : 'bg-leather-400/80'}`} />
          </div>

          <h2 className="font-serif font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.08] mb-6 text-balance tracking-tight">
            {title}
          </h2>

          {description && (
            <p className={`text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto text-balance ${variant === 'light' ? 'text-charcoal-600' : 'text-charcoal-300'}`}>
              {description}
            </p>
          )}

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              as="link"
              to={primaryTo}
              variant={variant === 'light' ? 'accent' : 'accent'}
              size="lg"
              iconRight={
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              }
            >
              {primaryText}
            </Button>
            <Link
              to={secondaryTo}
              className={`inline-flex items-center gap-2 font-medium text-sm tracking-wide px-6 py-4 transition-colors duration-300 ${
                variant === 'light'
                  ? 'text-charcoal-900 hover:text-accent'
                  : 'text-cream-50 hover:text-leather-300'
              }`}
            >
              {secondaryText}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CtaSection;
