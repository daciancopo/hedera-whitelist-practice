// // src/components/CheckWhitelist.tsx
// import React, { useState } from 'react';
// // import { useHederaWallet } from '@buidlerlabs/hashgraph-react-wallets';

// function CheckWhitelist() {
//   const [account, setAccount] = useState('');
//   const [isWhitelisted, setIsWhitelisted] = useState(false);
// //   const { client } = useHederaWallet();

//   const checkWhitelist = async () => {
//     try {
//       // Replace with code to check if the account is whitelisted
//     //   const isWhitelistedResult = await client.checkWhitelist(account);
//     //   setIsWhitelisted(isWhitelistedResult);
//     } catch (error) {
//       console.error('Error checking whitelist:', error);
//     }
//   }

//   return (
//     <div>
//       <h2>Check Whitelist</h2>
//       <input
//         type="text"
//         placeholder="Account ID"
//         value={account}
//         onChange={(e) => setAccount(e.target.value)}
//       />
//       <button onClick={checkWhitelist}>Check</button>
//       {isWhitelisted && <p>This account is whitelisted.</p>}
//       {!isWhitelisted && <p>This account is not whitelisted.</p>}
//     </div>
//   );
// }

// export default CheckWhitelist;
