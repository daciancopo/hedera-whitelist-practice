import axios from 'axios';
import { hederaConst } from '../constants/hedera';



// const initialCallContractApi = hederaConst.contractsLogsApi;
    
//  Mirror Node Accounts API Call 
export const getMirrorAccounts = async (accId: any) => {
    try {
        const accountsByIdApi = hederaConst.accountsApi+accId;

        const response = await axios.get(accountsByIdApi);

        const data = response.data;
        // const data = response.data;

        console.log("Resp Accounts:", data);
        // console.log("Resp Accounts Data:", data);

        return data;

    } catch (error) {
        console.error("Error fetching data:", error);
    }
}