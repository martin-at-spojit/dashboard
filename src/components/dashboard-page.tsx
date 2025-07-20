import { getDashboardConfig } from '@/data/dashboard/config/config';
import Dashboard from './dashboard';
import { fetchWidgetData } from '@/data/utils/widget-data-fetcher';
import { WidgetData } from './widget/content';

export async function DashboardPage() {
  const user = {
    id: 'user-1',
    name: 'John Doe',
  };
  const config = await getDashboardConfig(user.id);
  const currentConfig = config.default.layouts.lg.some(
    (widget) => widget.size === 'standard'
  )
    ? config.default
    : config.compact;

  const uniqueWidgetTypes = [
    ...new Set(currentConfig.layouts.lg.map((widget) => widget.type)),
  ];

  const dataPromises = uniqueWidgetTypes.map((type) => fetchWidgetData(type));
  const widgetDataArray = await Promise.all(dataPromises);
  const widgetData = uniqueWidgetTypes.reduce((acc, type, index) => {
    return { ...acc, [type]: widgetDataArray[index] };
  }, {} as WidgetData);
  // const widgetData = uniqueWidgetTypes.reduce((acc, type, index) => {
  //   acc[type] = widgetDataArray[index];
  //   return acc;
  // }, {} as WidgetData);

  return (
    <Dashboard
      dashboardConfig={config}
      currentConfig={currentConfig}
      widgetData={widgetData}
    />
  );
}
