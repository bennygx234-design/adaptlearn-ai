import { LucideIcon } from 'lucide-react';

interface IconWrapperProps {
  icon: LucideIcon;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'primary' | 'success' | 'warning' | 'error' | 'neutral';
  className?: string;
}

function IconWrapper({
  icon: Icon,
  size = 'md',
  variant = 'primary',
  className = '',
}: IconWrapperProps) {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 24,
    xl: 32,
  };

  const variants = {
    primary: 'bg-[rgba(139,92,246,0.1)] text-purple-400',
    success: 'bg-[rgba(16,185,129,0.1)] text-emerald-400',
    warning: 'bg-[rgba(245,158,11,0.1)] text-amber-400',
    error: 'bg-[rgba(239,68,68,0.1)] text-red-400',
    neutral: 'bg-grey-800 text-grey-400',
  };

  const classes = ['flex items-center justify-center rounded-lg', sizes[size], variants[variant], className].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      <Icon size={iconSizes[size]} />
    </div>
  );
}

export { IconWrapper };
export type { IconWrapperProps };
