import React from 'react';
import { HWBridgeProvider } from "@buidlerlabs/hashgraph-react-wallets";
import { HashpackConnector } from "@buidlerlabs/hashgraph-react-wallets/connectors";
import logo from "../assets/logo.svg";
 
export const BridgeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const metadata = {
        description: "Hashgraph React Whitelist MVP",
        icons: [logo],
        name: "Whitelist MVP",
        url: location.href
    };
    
    return (    
    <HWBridgeProvider 
        network="testnet"
        metadata={metadata}
        defaultConnector={HashpackConnector}
        connectors={[HashpackConnector]}
        multiSession={false}
        debug={true}
        >
        {children}
    </HWBridgeProvider>
  );
}