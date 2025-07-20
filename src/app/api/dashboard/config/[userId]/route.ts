import { getDashboardConfig } from '@/data/dashboard/config/config';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ userId: string }> }
) {
  const { userId } = await params;

  const data = await getDashboardConfig(userId);
  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' },
  });
}
