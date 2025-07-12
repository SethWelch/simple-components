import clsx from 'clsx';

export interface ButtonProps {
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'tertiary' | 'text';
  label?: string;
  ripple?: boolean;
  children?: React.ReactNode | string;
  className?: string;
}

function Button({
  size = 'medium',
  variant = 'primary',
  label,
  ripple = true,
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
