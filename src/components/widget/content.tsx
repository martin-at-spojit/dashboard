import dynamic from 'next/dynamic';

interface WidgetData {
  accounts?: Array<{ id: string; name: string; balance: number }>;
  analytics?: Array<{ title: string; value: string }>;
  'quick-links'?: Array<{ title: string; url: string; name: string }>;
}

interface WidgetContentProps {
  type: string;
  data?: WidgetData;
  className?: string;
}

const widgetMap = {
  accounts: dynamic(() => import('@/components/widgets/accounts/accounts')),
  analytics: dynamic(() => import('@/components/widgets/analytics/analytics')),
  'quick-links': dynamic(
    () => import('@/components/widgets/quick-links/quick-links')
  ),
};

const WidgetContent = ({ type, data = {} }: WidgetContentProps) => {
  const WidgetContent = widgetMap[type as keyof typeof widgetMap];

  if (!WidgetContent) {
    console.warn(`Unknown widget type: ${type}`);
    return null;
  }

  const widgetData = data[type as keyof WidgetData] || [];

  return <WidgetContent data={widgetData as never} />;
};

export default WidgetContent;
