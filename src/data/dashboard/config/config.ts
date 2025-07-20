import { mockDashboardConfig } from './mock-data';

export async function getDashboardConfig(userId: string) {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return mockDashboardConfig;
}
