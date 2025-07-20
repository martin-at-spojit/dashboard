interface AnalyticsData {
  title: string;
  value: string;
}

interface AnalyticsProps {
  editMode?: boolean;
  data: AnalyticsData[];
}

export default function Analytics({ data, editMode = false }: AnalyticsProps) {
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
