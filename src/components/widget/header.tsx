import styles from './header.module.css';

interface WidgetHeaderProps {
  title: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

export default function WidgetHeader({
  title,
  icon,
  children,
}: WidgetHeaderProps) {
  return (
    <div className={styles['widget-header']}>
      <div className={styles['widget-title']}>
        {icon && icon}
        <h2>{title}</h2>
      </div>
      <div className={styles['widget-actions']}>{children}</div>
    </div>
  );
}
