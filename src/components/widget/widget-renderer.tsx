import dynamic from 'next/dynamic';
import styles from './widget-renderer.module.css';

interface WidgetData {
  accounts?: Array<{ id: string; name: string; balance: number }>;
  analytics?: Array<{ title: string; value: string }>;
  'quick-links'?: Array<{ title: string; url: string; name: string }>;
}

interface WidgetRendererProps {
  type: string;
  data?: WidgetData;
  className?: string;
}

const widgetMap = {
  accounts: dynamic(() => import('../widgets/accounts/accounts')),
  analytics: dynamic(() => import('../widgets/analytics/analytics')),
  'quick-links': dynamic(() => import('../widgets/quick-links/quick-links')),
};

const WidgetRenderer = ({
  type,
  data = {},
  className = '',
}: WidgetRendererProps) => {
  const WidgetComponent = widgetMap[type as keyof typeof widgetMap];

  if (!WidgetComponent) {
    console.warn(`Unknown widget type: ${type}`);
    return null;
  }

  const widgetData = data[type as keyof WidgetData] || [];

  return (
    <div className={`${styles.widgetWrapper} ${className}`}>
      <WidgetComponent data={widgetData as never} />
    </div>
  );
};

export default WidgetRenderer;
