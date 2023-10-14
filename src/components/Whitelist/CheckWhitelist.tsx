import React, { useState } from 'react';

const CheckWhitelist: React.FC = () => {
  const [accountId, setAccountId] = useState<string>('');

  const handleCheckWhitelist = async () => {
    try {


        
    } catch (error) {
      console.error('Error checking whitelist:', error);
    //   setIsWhitelisted(false);
    }
  };

  return (
    <div>
      <h2>Check Whitelist</h2>
      <input
        type="text"
        placeholder="Account ID"
        value={accountId}
        onChange={(e) => setAccountId(e.target.value)}
      />

      <button onClick={handleCheckWhitelist}>Check Whitelist</button>
      {/* {isWhitelisted === true && <p>Account is whitelisted.</p>} */}
      {/* {isWhitelisted === false && <p>Account is not whitelisted.</p>} */}
    </div>
  );
};

export default CheckWhitelist;
