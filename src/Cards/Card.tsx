import clsx from 'clsx';

interface CardProps {
  header?: string | React.ReactNode;
  width?: string | number;
  containerClassname?: string;
  headerClassname?: string;
  children: React.ReactNode;
}

function Card({
  header,
  width = 400,
  containerClassname,
  headerClassname,
  children,
}: CardProps) {
  return (
    <div
      className={clsx('card', containerClassname)}
      style={{ width: width, minWidth: width }}
    >
      {header && (
        <div className={clsx('card-header', headerClassname)}>{header}</div>
      )}

      {children}
    </div>
  );
}

export default Card;
