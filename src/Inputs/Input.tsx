import clsx from 'clsx';

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: 'small' | 'medium' | 'large';
  label?: string | React.ReactNode;
}

function Input({ size = 'medium', label, ...rest }: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      <span
        className={clsx({
          'font-normal text-[12px]': size === 'small',
          'font-medium text-[14px]': size === 'medium',
          'font-medium text-[16px]': size === 'large',
        })}
      >
        {label}
      </span>
      <input className={`${size}`} {...rest} />
    </div>
  );
}

export default Input;
