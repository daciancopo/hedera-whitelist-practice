import React, { useState } from 'react';


const WhitelistAccount: React.FC = () => {
  const [accountId, setAccountId] = useState<string>('');
  const [whitelisted, setWhitelisted] = useState<boolean | null>(null);

  const handleWhitelist = async () => {
    try {
      // const txResponse = await whitelistAccount(accountId);
      // console.log('Transaction ID:', txResponse.transactionId.toString());
      setWhitelisted(true);
    } catch (error) {
      console.error('Error whitelisting account:', error);
      setWhitelisted(false);
    }
  };

  return (
    <div>
      <h2>Whitelist Account</h2>
      <input
        type="text"
        placeholder="Account ID"
        value={accountId}
        onChange={(e) => setAccountId(e.target.value)}
      />
      <button onClick={handleWhitelist}>Whitelist</button>
      {whitelisted === true && <p>Account whitelisted successfully!</p>}
      {whitelisted === false && <p>Whitelisting failed.</p>}
    </div>
  );
};

export default WhitelistAccount;
