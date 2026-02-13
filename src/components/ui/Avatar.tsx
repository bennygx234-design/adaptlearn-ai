import Image from 'next/image';

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fallback?: string;
  className?: string;
}

function Avatar({
  src,
  alt = 'Avatar',
  size = 'md',
  fallback,
  className = '',
}: AvatarProps) {
  const sizes = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base',
    xl: 'w-16 h-16 text-lg',
  };

  const sizePixels = {
    sm: 32,
    md: 40,
    lg: 48,
    xl: 64,
  };

  const initials = fallback || alt.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);

  const baseClasses = `${sizes[size]} rounded-full overflow-hidden flex items-center justify-center bg-purple-500/20 text-purple-300 font-medium ${className}`;

  if (src) {
    return (
      <div className={baseClasses}>
        <Image
          src={src}
          alt={alt}
          width={sizePixels[size]}
          height={sizePixels[size]}
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  return (
    <div className={baseClasses}>
      {initials}
    </div>
  );
}

export { Avatar };
export type { AvatarProps };
