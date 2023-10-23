
import logo from "../assets/hashpack-icon.png";


const metadata = {
    description: "Hashgraph React Whitelist MVP",
    icons: [logo],
    name: "Whitelist MVP",
    url: location.href
};

const contractId = '0.0.4528380';


const mirrorUrl = 'https://testnet.mirrornode.hedera.com';

const hashScanUrl = 'https://hashscan.io/testnet'

//  Mirror Contract Endpoints
const contractsApi = mirrorUrl+`/api/v1/contracts/${contractId}`;
const contractsResultsApi = mirrorUrl+`/api/v1/contracts/${contractId}/results/`;

//  Mirror Account Endpoints
const transactionsApi = mirrorUrl+'/api/v1/transactions/';


//  Mirror Account Endpoints
const accountsApi = mirrorUrl+'/api/v1/accounts/';



export const hederaConst = {
    metadata,
    mirrorUrl,
    hashScanUrl,
    contractId,
    contractsResultsApi,
    contractsApi,
    transactionsApi,
    accountsApi
}