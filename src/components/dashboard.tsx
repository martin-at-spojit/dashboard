'use client';

import { useState } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import { WidgetLayout, type DashboardConfiguration } from '@/config/dashboard';
import type {
  Breakpoint,
  DashboardConfig,
} from '@/data/dashboard/config/mock-data';
import type { WidgetData } from './widget/content';
import DashboardHeader from '@/components/dashboard/header';
import Widget from '@/components/widget/widget';
import WidgetHeaderActions from './widget/header-actions';
import widgetStyles from './widget/widget.module.css';

import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import { fetchWidgetData } from '@/data/utils/widget-data-fetcher';

const ResponsiveGridLayout = WidthProvider(Responsive);

interface DashboardProps {
  dashboardConfig: DashboardConfiguration;
  currentConfig: DashboardConfig;
  widgetData: WidgetData;
}

export default function Dashboard({
  dashboardConfig: dc,
  currentConfig: cconfig,
  widgetData: wd,
}: DashboardProps) {
  const [editMode, setEditMode] = useState(false);
  const [dashboardConfig, setDashboardConfig] =
    useState<DashboardConfiguration>(dc);
  const [currentConfig, setCurrentConfig] = useState(cconfig);
  const [layoutKey, setLayoutKey] = useState(Date.now());
  const [currentBreakpoint, setCurrentBreakpoint] = useState<Breakpoint>('lg');
  const [widgetData, setWidgetData] = useState<WidgetData>(wd);

  const handleLayoutChange = (layout: ReactGridLayout.Layout[]) => {
    console.log('Layout changed: ', layout);
  };

  const handleRemoveWidget = (widgetId: string) => {
    // remove widget from all config (full and current)
    const newConfig = {
      ...dashboardConfig,
      default: {
        ...dashboardConfig.default,
        layouts: {
          ...dashboardConfig.default.layouts,
          lg: dashboardConfig.default.layouts.lg.filter(
            (widget) => widget.i !== widgetId
          ),
          md: dashboardConfig.default.layouts.sm.filter(
            (widget) => widget.i !== widgetId
          ),
          xss: dashboardConfig.default.layouts.xxs.filter(
            (widget) => widget.i !== widgetId
          ),
        },
      },
      compact: {
        ...dashboardConfig.compact,
        layouts: {
          ...dashboardConfig.compact.layouts,
          lg: dashboardConfig.compact.layouts.lg.filter(
            (widget) => widget.i !== widgetId
          ),
          md: dashboardConfig.compact.layouts.sm.filter(
            (widget) => widget.i !== widgetId
          ),
          xss: dashboardConfig.compact.layouts.xxs.filter(
            (widget) => widget.i !== widgetId
          ),
        },
      },
    };
    setDashboardConfig(newConfig);
    // update current config based on the new layout
    // if the current layout has standard size widgets, use default config, otherwise use compact
    setCurrentConfig(
      newConfig.default.layouts.lg.some((widget) => widget.size === 'standard')
        ? newConfig.default
        : newConfig.compact
    );
    // reset layout key to force re-render
    setLayoutKey(Date.now());
  };

  const handleEditWidget = (widgetId: string) => {
    console.log('Editing widget:', widgetId);
  };

  const handleAddWidget = async () => {
    console.log('Adding widget');
    const newWidgetId = `widget-${Date.now().toString()}`;
    const newWidget: WidgetLayout = {
      i: newWidgetId,
      x: 0,
      y: Infinity,
      w: 4,
      h: 3,
      size: 'compact',
      type: 'accounts',
    };
    const newWidgetCompact: WidgetLayout = {
      i: newWidgetId,
      x: 0,
      y: Infinity,
      w: 1,
      h: 3,
      size: 'compact',
      type: 'accounts',
    };

    // Fetch data for the new widget
    const newWidgetData =
      widgetData[newWidget.type as keyof WidgetData] ??
      (await fetchWidgetData('accounts'));

    // Add the new widget to the widget data
    setWidgetData(
      (prev) =>
        ({
          ...prev,
          [newWidget.type]: newWidgetData,
        } as WidgetData)
    );

    // Add the new widget to the current layout
    const newLayout = {
      ...dashboardConfig,
      default: {
        ...dashboardConfig.default,
        layouts: {
          ...dashboardConfig.default.layouts,
          lg: [...dashboardConfig.default.layouts.lg, newWidget],
        },
      },
      compact: {
        ...dashboardConfig.compact,
        layouts: {
          ...dashboardConfig.compact.layouts,
          lg: [...dashboardConfig.compact.layouts.lg, newWidgetCompact],
        },
      },
    };

    setDashboardConfig(newLayout);
    // update current config based on the new layout
    // if the current layout has standard size widgets, use default config, otherwise use compact
    setCurrentConfig(
      newLayout.default.layouts.lg.some((widget) => widget.size === 'standard')
        ? newLayout.default
        : newLayout.compact
    );
    // reset layout key to force re-render
    setLayoutKey(Date.now());
  };

  const handleBreakpointChange = (newBreakpoint: Breakpoint) => {
    console.log('Breakpoint changed:', newBreakpoint);
    setCurrentBreakpoint(newBreakpoint);
    if (newBreakpoint !== 'lg') {
      setEditMode(false);
    }
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
      <DashboardHeader
        currentConfig={currentConfig}
        currentBreakpoint={currentBreakpoint}
        editMode={editMode}
        setEditMode={setEditMode}
        handleSwitchLayout={handleSwitchLayout}
        handleAddWidget={handleAddWidget}
      />
      <ResponsiveGridLayout
        key={layoutKey}
        className="layout"
        breakpoints={currentConfig.breakpoints}
        cols={currentConfig.cols}
        layouts={currentConfig.layouts}
        rowHeight={50}
        isResizable={false}
        isDraggable={editMode}
        onBreakpointChange={handleBreakpointChange}
        onLayoutChange={handleLayoutChange}
        draggableCancel=".widget-action"
      >
        {currentConfig.layouts.lg.map((widget) => (
          <div key={widget.i} className={widgetStyles.widgetWrapper}>
            <Widget
              widget={widget}
              key={widget.i}
              editMode={editMode}
              widgetHeaderActions={
                editMode ? (
                  <WidgetHeaderActions
                    onRemove={() => handleRemoveWidget(widget.i)}
                    onEdit={() => handleEditWidget(widget.i)}
                  />
                ) : null
              }
              widgetData={widgetData}
            />
          </div>
        ))}
      </ResponsiveGridLayout>
    </>
  );
}
