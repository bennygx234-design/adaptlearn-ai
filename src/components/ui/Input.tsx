import { InputHTMLAttributes, forwardRef } from 'react';
import { LucideIcon } from 'lucide-react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      hint,
      icon: Icon,
      iconPosition = 'left',
      fullWidth = true,
      className = '',
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || label?.toLowerCase().replace(/s+/g, '-');

    const baseStyles = 'bg-surface border border-border rounded-lg px-4 py-3 text-foreground transition-all duration-150 placeholder:text-grey-500 hover:border-grey-600 focus:outline-none focus:border-purple-500 focus:shadow-[0_0_0_3px_rgba(139,92,246,0.1)]';

    const errorStyles = error ? 'border-error focus:border-error focus:shadow-[0_0_0_3px_rgba(239,68,68,0.1)]' : '';

    const iconStyles = Icon ? (iconPosition === 'left' ? 'pl-11' : 'pr-11') : '';

    const classes = [baseStyles, errorStyles, iconStyles, fullWidth ? 'w-full' : '', className].filter(Boolean).join(' ');

    return (
      <div className={fullWidth ? 'w-full' : ''}>
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-foreground mb-2"
          >
            {label}
          </label>
        )}
        <div className="relative">
          {Icon && (
            <div className={`absolute ${iconPosition === 'left' ? 'left-3' : 'right-3'} top-1/2 -translate-y-1/2 text-grey-500`}>
              <Icon size={18} />
            </div>
          )}
          <input
            ref={ref}
            id={inputId}
            className={classes}
            {...props}
          />
        </div>
        {error && <p className="mt-2 text-sm text-error">{error}</p>}
        {hint && !error && <p className="mt-2 text-sm text-grey-500">{hint}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };
export type { InputProps };
