interface AccountData {
  id: string;
  name: string;
  balance: number;
}

interface AccountsProps {
  editMode?: boolean;
  data: AccountData[];
}

export default function Accounts({ data, editMode = false }: AccountsProps) {
  return (
    <div className="accounts-widget-content">
      {!editMode && (
        <button onClick={() => console.log('add account')}>add account</button>
      )}
      {data && data.length > 0 ? (
        <ul>
          {data.map((account) => (
            <li key={account.id}>
              <strong>{account.name}</strong> - {account.balance} USD
            </li>
          ))}
        </ul>
      ) : (
        <>
          <p>No accounts available.</p>
        </>
      )}
    </div>
  );
}
