'use client';

import { useState } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import {
  type DashboardConfiguration,
  dashboardConfig,
  widgetData,
} from '@/config/dashboard';
// import WidgetRenderer from '@/components/widget/widget-renderer';
import WidgetHeader from './widget/header';
import WidgetHeaderActions from './widget/header-actions';
import WidgetContent from './widget/content';

import widgetRendererStyles from './widget/widget-renderer.module.css';

import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const ResponsiveGridLayout = WidthProvider(Responsive);

export default function Dashboard({}) {
  const getCurrentConfig = (config: DashboardConfiguration) => {
    const hasStandardSizeWidgets = config.default.layouts.lg.some(
      (widget) => widget.size === 'standard'
    );
    return hasStandardSizeWidgets ? config.default : config.compact;
  };

  const [editMode, setEditMode] = useState(false);
  const [currentConfig, setCurrentConfig] = useState(() =>
    getCurrentConfig(dashboardConfig)
  );
  const [layoutKey, setLayoutKey] = useState(Date.now());
  const [currentBreakpoint, setCurrentBreakpoint] = useState('lg');

  const handleLayoutChange = (layout: any) => {
    console.log('Layout changed: ', layout);
  };

  const handleRemoveWidget = (widgetId: string) => {
    console.log('Removing widget:', widgetId);
  };

  const handleEditWidget = (widgetId: string) => {
    console.log('Editing widget:', widgetId);
  };

  const handleBreakpointChange = (newBreakpoint: string) => {
    console.log('Breakpoint changed:', newBreakpoint);
    setCurrentBreakpoint(newBreakpoint);
  };

  const handleSwitchLayout = () => {
    setCurrentConfig(
      currentConfig.type === 'default'
        ? dashboardConfig.compact
        : dashboardConfig.default
    );
    setLayoutKey(Date.now());
  };

  return (
    <>
      <div className="dashboard-header">
        <div>Layout: {currentConfig.type}</div>
        <div>Widgets:</div>
        <div>{JSON.stringify(currentConfig.layouts['lg'])}</div>
        <button onClick={() => setEditMode(!editMode)}>
          {editMode ? 'Exit Edit Mode' : 'Edit Dashboard'}
        </button>
        <button onClick={handleSwitchLayout}>Switch layout</button>
      </div>
      <ResponsiveGridLayout
        key={layoutKey}
        className="layout"
        breakpoints={currentConfig.breakpoints}
        cols={currentConfig.cols}
        layouts={currentConfig.layouts}
        rowHeight={50}
        isResizable={false}
        onBreakpointChange={handleBreakpointChange}
        onLayoutChange={handleLayoutChange}
        draggableCancel=".widget-action"
      >
        {currentConfig.layouts.lg.map((widget) => (
          <div key={widget.i} className={widgetRendererStyles.widgetWrapper}>
            <WidgetHeader title={widget.type} icon={null}>
              {editMode && (
                <WidgetHeaderActions
                  onRemove={() => handleRemoveWidget(widget.i)}
                  onEdit={() => handleEditWidget(widget.i)}
                />
              )}
            </WidgetHeader>
            <WidgetContent type={widget.type} data={widgetData} />
          </div>
        ))}
      </ResponsiveGridLayout>
    </>
  );
}
