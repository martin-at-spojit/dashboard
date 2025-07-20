export interface WidgetLayout {
  i: string;
  x: number;
  y: number;
  w: number;
  h: number;
  type: string;
  size: 'standard' | 'compact';
}

export type Breakpoint = 'lg' | 'sm' | 'xxs';

const layout_10c: WidgetLayout[] = [
  { i: 'widget-1', x: 0, y: 0, w: 6, h: 3, type: 'accounts', size: 'standard' },
  { i: 'widget-2', x: 6, y: 0, w: 4, h: 3, type: 'analytics', size: 'compact' },
  {
    i: 'widget-3',
    x: 6,
    y: 3,
    w: 4,
    h: 3,
    type: 'quick-links',
    size: 'compact',
  },
];

const layout_2c: WidgetLayout[] = [
  { i: 'widget-1', x: 0, y: 0, w: 2, h: 3, type: 'accounts', size: 'standard' },
  { i: 'widget-2', x: 0, y: 3, w: 1, h: 3, type: 'analytics', size: 'compact' },
  {
    i: 'widget-3',
    x: 1,
    y: 3,
    w: 1,
    h: 3,
    type: 'quick-links',
    size: 'compact',
  },
];

const layout_3c: WidgetLayout[] = [
  { i: 'widget-1', x: 0, y: 0, w: 1, h: 3, type: 'accounts', size: 'standard' },
  { i: 'widget-2', x: 1, y: 0, w: 1, h: 3, type: 'analytics', size: 'compact' },
  {
    i: 'widget-3',
    x: 2,
    y: 0,
    w: 1,
    h: 3,
    type: 'quick-links',
    size: 'compact',
  },
];

const layout_1c: WidgetLayout[] = [
  { i: 'widget-1', x: 0, y: 0, w: 1, h: 3, type: 'accounts', size: 'standard' },
  { i: 'widget-2', x: 0, y: 3, w: 1, h: 3, type: 'analytics', size: 'compact' },
  {
    i: 'widget-3',
    x: 0,
    y: 6,
    w: 1,
    h: 3,
    type: 'quick-links',
    size: 'compact',
  },
];

const breakpoints = {
  lg: 1200,
  sm: 600,
  xxs: 0,
};

export interface DashboardConfig {
  type: string;
  breakpoints: Record<string, number>;
  cols: Record<string, number>;
  layouts: Record<string, WidgetLayout[]>;
}

export interface DashboardConfiguration {
  default: DashboardConfig;
  compact: DashboardConfig;
}

export const mockDashboardConfig = {
  default: {
    type: 'default',
    breakpoints,
    cols: {
      lg: 10,
      sm: 2,
      xxs: 1,
    },
    layouts: {
      lg: layout_10c,
      sm: layout_2c,
      xxs: layout_1c,
    },
  },
  compact: {
    type: 'compact',
    breakpoints,
    cols: {
      lg: 3,
      sm: 2,
      xxs: 1,
    },
    layouts: {
      lg: layout_3c,
      sm: layout_2c,
      xxs: layout_1c,
    },
  },
};
