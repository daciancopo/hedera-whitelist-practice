

import { HWBridgeConnector, useWallet } from "@buidlerlabs/hashgraph-react-wallets"
import { useCallback, useState } from "react"

interface IProps {
    connector?: HWBridgeConnector
}

const WalletConnect = ({ connector }: IProps) => {
    const [loading, setLoading] = useState(false);
    const { isConnected, connect, disconnect } = useWallet(connector);

    const handleConnect = useCallback(async () => {
        setLoading(true);
        await connect();
        setLoading(false);
    }, [connect]);

    const handleDisconnect = useCallback(async () => {
        setLoading(true);
        await disconnect();
        setLoading(false);
    }, [connect]);

    return (
        <>
            {
                isConnected
                ?  <button onClick={handleDisconnect} disabled={loading} className="bg-[#151413] text-[17px] text-[#F43E3E] w-28 h-12 font-bold rounded-[12px] border-2 hover:bg-[#F43E3E] hover:text-black">Disconnect</button>
                :  <button onClick={handleConnect} className="bg-[#141312] text-[18px] border text-[#89ff13] border-[#dcdcdc] w-28 h-12 font-bold rounded-[12px] hover:bg-[#89ff13] hover:text-black hover:border-[#141312]">{loading ? 'Loading...' : 'Connect'}</button>
            }
        </>
    )
}

export default WalletConnect;