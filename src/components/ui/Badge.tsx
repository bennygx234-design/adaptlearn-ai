import { HTMLAttributes } from 'react';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'success' | 'warning' | 'error' | 'neutral';
  size?: 'sm' | 'md';
}

function Badge({
  children,
  variant = 'primary',
  size = 'sm',
  className = '',
  ...props
}: BadgeProps) {
  const baseStyles = 'inline-flex items-center font-medium rounded-full';

  const variants = {
    primary: 'bg-[rgba(139,92,246,0.1)] text-purple-400',
    success: 'bg-[rgba(16,185,129,0.1)] text-emerald-400',
    warning: 'bg-[rgba(245,158,11,0.1)] text-amber-400',
    error: 'bg-[rgba(239,68,68,0.1)] text-red-400',
    neutral: 'bg-grey-800 text-grey-300',
  };

  const sizes = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-3 py-1',
  };

  const classes = [baseStyles, variants[variant], sizes[size], className].filter(Boolean).join(' ');

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
}

export { Badge };
export type { BadgeProps };
