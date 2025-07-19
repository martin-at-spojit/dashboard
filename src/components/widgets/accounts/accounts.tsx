interface AccountData {
  id: string;
  name: string;
  balance: number;
}

interface AccountsProps {
  data: AccountData[];
}

export default function Accounts({ data }: AccountsProps) {
  return (
    <div className="accounts-widget-content">
      <p>List of accounts will be displayed here.</p>
      {data && data.length > 0 ? (
        <ul>
          {data.map((account) => (
            <li key={account.id}>
              <strong>{account.name}</strong> - {account.balance} USD
            </li>
          ))}
        </ul>
      ) : (
        <p>No accounts available.</p>
      )}
    </div>
  );
}
