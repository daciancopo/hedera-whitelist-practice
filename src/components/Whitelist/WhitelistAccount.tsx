// // src/components/WhitelistAccount.tsx
// import React, { useState } from 'react';
// import { useWallet } from "@buidlerlabs/hashgraph-react-wallets"
// import { HashpackConnector } from "@buidlerlabs/hashgraph-react-wallets/connectors"


// const WhitelistAccount = () => {
//   const [account, setAccount] = useState('');
// //   const {extensionReady, isConnected, signer, connect, disconnect} = useWallet(HashpackConnector);

//   const whitelistAccount = async () => {
//     // Use the Hedera client to whitelist the account
//     try {
//       // Call the appropriate Hedera function here
//     } catch (error) {
//       console.error('Error whitelisting account:', error);
//     }
//   }

//   return (
//     <div>
//       <h2>Whitelist Account</h2>
//       <input
//         type="text"
//         placeholder="Account ID"
//         value={account}
//         onChange={(e) => setAccount(e.target.value)}
//       />
//       <button onClick={whitelistAccount}>Whitelist</button>
//     </div>
//   );
// }

// export default WhitelistAccount;
