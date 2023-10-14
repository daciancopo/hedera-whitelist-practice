import { useWallet } from "@buidlerlabs/hashgraph-react-wallets"
import { HashpackConnector } from "@buidlerlabs/hashgraph-react-wallets/connectors";
import { useCallback, useState } from "react"

const WalletConnect = () => {
    const [loading, setLoading] = useState(false);
    const { isConnected, connect, disconnect } = useWallet(HashpackConnector);

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
        <div>
            {
                isConnected
                ?  <button onClick={handleDisconnect} disabled={loading} className="bg-[#292929] text-white border border-[#ffffffde] w-28 h-12 font-bold rounded-[12px] hover:bg-[#ff005d] hover:font-bold">Disconnect</button>
                :  <button onClick={handleConnect} className="bg-[#292929] text-white border border-[#ffffffde] w-28 h-12 font-bold rounded-[12px] hover:bg-[#00ffc3] hover:text-black hover:border-[#292929] hover:font-bold">{loading ? 'Loading...' : 'Connect'}</button>
            }
        </div>
    )
}

export default WalletConnect;