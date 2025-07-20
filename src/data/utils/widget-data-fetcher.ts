import { getAccounts } from '../widgets/accounts/accounts';
import { getAnalytics } from '../widgets/analytics/analytics';
import { getQuickLinks } from '../widgets/quick-links/quick-links';

export async function fetchWidgetData(type: string, user = null) {
  switch (type) {
    case 'accounts':
      return await getAccounts();
    case 'analytics':
      return await getAnalytics();
    case 'quick-links':
      return await getQuickLinks();
    default:
      throw new Error(`Unknown widget type: ${type}`);
  }
}
