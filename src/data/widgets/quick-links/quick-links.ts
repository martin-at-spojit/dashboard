import { mockQuickLinks } from './mock-data';

export async function getQuickLinks() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return mockQuickLinks;
}
