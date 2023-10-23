import axios from 'axios';
import { hederaConst } from '../constants/hedera';


//  Mirror Node Contracts  API Call 
export const getMirrorContract = async (timestamp: any) => {
    try {
        const contractsResultsApi = hederaConst.contractsResultsApi+timestamp;

        const response = await axios.get(contractsResultsApi);

        const data = response.data;

        // const data = response.data;

        console.log("Resp Contract:", data);
        
        return data;
        
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}


//  Mirror Node Contracts Logs All Data API Call 
// export const getMirrorContractLogs = async () => {
//     try {
        
//         let dataCombine: any = [];
//         let nextLink: any = '';
        
//         if(nextLink === ''){
//             nextLink = hederaConst.contractsLogsApi;
//         }
        
//         while(nextLink){
//             const response = await axios.get(nextLink);
//             const logs = response.data.logs;
//             const linkNext = response.data.links?.next;
            
//             dataCombine = [...dataCombine, ...logs];
//             nextLink = linkNext ? hederaConst.mirrorUrl+linkNext : null;
//         }

//         console.log("Resp Contract Logs All Data:", dataCombine);

//     } catch (error) {
//         console.error("Error fetching data:", error);
//     }
// }