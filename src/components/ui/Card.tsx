import { HTMLAttributes, forwardRef } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'glass-strong' | 'elevated';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  interactive?: boolean;
  glow?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      variant = 'default',
      padding = 'md',
      interactive = false,
      glow = false,
      className = '',
      ...props
    },
    ref
  ) => {
    const baseStyles = 'rounded-xl transition-all duration-200';

    const variants = {
      default: 'bg-surface border border-border',
      glass: 'bg-[rgba(26,26,26,0.7)] backdrop-blur-[12px] border border-[rgba(139,92,246,0.2)]',
      'glass-strong': 'bg-[rgba(26,26,26,0.85)] backdrop-blur-[20px] border border-[rgba(139,92,246,0.3)]',
      elevated: 'bg-surface-elevated border border-border shadow-lg',
    };

    const paddings = {
      none: '',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
    };

    const interactiveStyles = interactive
      ? 'cursor-pointer hover:-translate-y-0.5 hover:border-purple-500 hover:shadow-[0_0_10px_rgba(139,92,246,0.2)]'
      : 'hover:border-grey-600';

    const glowStyles = glow ? 'shadow-[0_0_20px_rgba(139,92,246,0.3)]' : '';

    const classes = [baseStyles, variants[variant], paddings[padding], interactiveStyles, glowStyles, className].filter(Boolean).join(' ');

    return (
      <div ref={ref} className={classes} {...props}>
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export { Card };
export type { CardProps };
