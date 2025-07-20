import { mockAnalytics } from './mock-data';

export async function getAnalytics() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return mockAnalytics;
}
