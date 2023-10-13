// import { useWallet } from "@buidlerlabs/hashgraph-react-wallets"
// import { HashpackConnector } from "@buidlerlabs/hashgraph-react-wallets/connectors"

// const WalletConnect = () => {
//     const {extensionReady, isConnected, signer, connect, disconnect} = useWallet(HashpackConnector);

//     const handleOnConnect = async () => {
//         await connect();
//         // do something...
//     }

//     const handleOnDisconnect = async () => {
//         await disconnect();
//         // do something...
//     }

//     return <>
//         <span>Extension status: {extensionReady ? 'Ready to connect': 'Not available'}</span>

//         {
//             isConnected
//                 ? <button onClick={handleOnDisconnect}>Disconnect</button>
//                 : <button onClick={handleOnConnect} disabled={!extensionReady}>Connect</button>
//         }
//     </>
// }

// export default WalletConnect;