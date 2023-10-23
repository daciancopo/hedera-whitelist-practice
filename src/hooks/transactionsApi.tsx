import axios from 'axios';
import { hederaConst } from '../constants/hedera';



// const transactionsApi = hederaConst.transactionsApi;
    
//  Mirror Node Transactions  API Call 
export const getMirrorTransactions = async (transactionId: any) => {
    try {
        const transationByIdApi = hederaConst.transactionsApi+transactionId;

        const response = await axios.get(transationByIdApi);
        const data = response.data;
        // const data = response.data;

        console.log("Resp Transation:", response);
        // console.log("Resp Transation Data:", data);
        
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}