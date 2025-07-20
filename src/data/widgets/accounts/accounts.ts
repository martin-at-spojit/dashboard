import { mockAccounts } from './mock-data';

export async function getAccounts() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return mockAccounts;
}
