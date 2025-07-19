interface AnalyticsData {
  title: string;
  value: string;
}

interface AnalyticsProps {
  data: AnalyticsData[];
}

export default function Analytics({ data }: AnalyticsProps) {
  return (
    <div className="analytics-widget">
      <h2>Analytics</h2>
      {data && data.length > 0 ? (
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              <strong>{item.title}</strong>: {item.value}
            </li>
          ))}
        </ul>
      ) : (
        <p>No analytics data available.</p>
      )}
    </div>
  );
}
