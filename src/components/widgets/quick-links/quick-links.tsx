interface LinkData {
  title: string;
  url: string;
  name: string;
}

interface QuickLinksProps {
  data: LinkData[];
}

export default function QuickLinks({ data }: QuickLinksProps) {
  return (
    <div className="quick-links-widget">
      <h2>Quick Links</h2>
      {data && data.length > 0 ? (
        <ul>
          {data.map((link, index) => (
            <li key={index}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No quick links available.</p>
      )}
    </div>
  );
}
