import clsx from 'clsx';
import type { ChangeEvent } from 'react';

interface InputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'size' | 'onChange'
  > {
  size?: 'small' | 'medium' | 'large';
  label?: string | React.ReactNode;
  error?: boolean;
  errorMessage?: string | React.ReactNode;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

function Input({
  size = 'medium',
  label,
  error,
  errorMessage,
  ...rest
}: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      <div
        className={clsx({
          'font-normal text-[12px]': size === 'small',
          'font-medium text-[14px]': size === 'medium',
          'font-medium text-[16px]': size === 'large',
          'text-red-500': error,
        })}
      >
        {label}
      </div>
      <input
        className={clsx(`${size}`, {
          'input-error': error,
        })}
        {...rest}
      />
      {error && errorMessage && (
        <div
          className={clsx('font-normal text-[12px]', {
            'text-red-500': error,
          })}
        >
          {errorMessage}
        </div>
      )}
    </div>
  );
}

export default Input;
