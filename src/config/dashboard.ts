export interface WidgetLayout {
  i: string;
  x: number;
  y: number;
  w: number;
  h: number;
  type: string;
  size: 'standard' | 'compact';
}

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

// Sample widget data
export const widgetData = {
  accounts: [],
  analytics: [
    { title: 'Visitors', value: '1,234' },
    { title: 'Sales', value: '$12,345' },
    { title: 'Conversion Rate', value: '3.2%' },
  ],
  'quick-links': [
    { title: 'Google', url: 'https://www.google.com', name: 'Google' },
    { title: 'GitHub', url: 'https://www.github.com', name: 'GitHub' },
    {
      title: 'Stack Overflow',
      url: 'https://stackoverflow.com',
      name: 'Stack Overflow',
    },
  ],
};

const breakpoints = {
  lg: 1200,
  //md: 1200,
  sm: 600,
  //xs: 600,
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

export const dashboardConfig = {
  default: {
    type: 'default',
    breakpoints,
    cols: {
      lg: 10,
      //md: 10,
      sm: 2,
      //xs: 2,
      xxs: 1,
    },
    layouts: {
      lg: layout_10c,
      //md: layout_10c,
      sm: layout_2c,
      //xs: layout_2c,
      xxs: layout_1c,
    },
  },
  compact: {
    type: 'compact',
    breakpoints,
    cols: {
      lg: 3,
      //md: 3,
      sm: 2,
      //xs: 2,
      xxs: 1,
    },
    layouts: {
      lg: layout_3c,
      //md: layout_3c,
      sm: layout_2c,
      //xs: layout_2c,
      xxs: layout_1c,
    },
  },
};
