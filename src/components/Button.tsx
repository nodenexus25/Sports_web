import type { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

type Variant = 'primary' | 'accent' | 'outline' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

interface CommonProps {
  variant?: Variant;
  size?: Size;
  iconRight?: ReactNode;
  iconLeft?: ReactNode;
  fullWidth?: boolean;
  children?: ReactNode;
  className?: string;
}

type ButtonElement = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: 'button';
    to?: never;
    href?: never;
  };

type AnchorElement = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    as?: 'a';
    href: string;
    to?: never;
  };

type RouterLinkElement = CommonProps & {
  as?: 'link';
  to: string;
  href?: never;
  onClick?: () => void;
  target?: string;
  rel?: string;
};

export type ButtonProps = ButtonElement | AnchorElement | RouterLinkElement;

const variantClass: Record<Variant, string> = {
  primary: 'bg-charcoal-900 text-cream-50 hover:bg-charcoal-800 hover:shadow-soft focus:ring-charcoal-700',
  accent: 'bg-accent text-white hover:bg-accent-light hover:shadow-soft focus:ring-accent',
  outline: 'border-2 border-charcoal-900 text-charcoal-900 hover:bg-charcoal-900 hover:text-cream-50 focus:ring-charcoal-700',
  ghost: 'text-charcoal-800 hover:bg-charcoal-900/5 focus:ring-charcoal-400',
};

const sizeClass: Record<Size, string> = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

function Button(props: ButtonProps) {
  const {
    variant = 'primary',
    size = 'md',
    iconRight,
    iconLeft,
    fullWidth,
    className = '',
    children,
    ...rest
  } = props;

  const baseClass = `inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 ease-premium rounded-pill tracking-wide focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed ${variantClass[variant]} ${sizeClass[size]} ${fullWidth ? 'w-full' : ''} ${className}`;

  const content = (
    <>
      {iconLeft && <span className="shrink-0">{iconLeft}</span>}
      <span>{children}</span>
      {iconRight && <span className="shrink-0">{iconRight}</span>}
    </>
  );

  if ('to' in props && props.to) {
    const { to, ...linkRest } = rest as RouterLinkElement;
    return (
      <Link to={to} className={baseClass} {...(linkRest as object)}>
        {content}
      </Link>
    );
  }

  if ('href' in props && props.href) {
    const { href, ...anchorRest } = rest as AnchorElement;
    return (
      <a href={href} className={baseClass} {...(anchorRest as object)}>
        {content}
      </a>
    );
  }

  return (
    <button className={baseClass} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  );
}

export default Button;
