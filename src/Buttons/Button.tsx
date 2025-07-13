import clsx from 'clsx';

export interface ButtonProps {
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'tertiary' | 'text';
  label?: string;
  ripple?: boolean;
  shadow?: boolean;
  children?: React.ReactNode | string;
  className?: string;
}

function Button({
  size = 'medium',
  variant = 'primary',
  label,
  ripple = true,
  shadow = true,
  children,
  className,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={clsx(
        `${variant} ${size}`,
        {
          ripple: ripple,
          shadow: shadow,
        },
        className
      )}
      {...rest}
    >
      {label || children}
    </button>
  );
}

export default Button;
