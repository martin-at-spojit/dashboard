import { getAccounts } from '@/data/widgets/accounts/accounts';
import { getAnalytics } from '@/data/widgets/analytics/analytics';
import { getQuickLinks } from '@/data/widgets/quick-links/quick-links';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ type: string }> }
) {
  const { type } = await params;

  if (type === 'accounts') {
    const data = await getAccounts();
    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (type === 'analytics') {
    const data = await getAnalytics();
    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (type === 'quick-links') {
    const data = await getQuickLinks();
    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
