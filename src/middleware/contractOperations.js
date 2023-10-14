
import { Client, AccountId, PrivateKey, ContractCallQuery, ContractExecuteTransaction, ContractFunctionParameters } from "@hashgraph/sdk";

const operatorId = AccountId.fromString(process.env.OPERATOR_ID);
const operatorKey = PrivateKey.fromString(process.env.OPERATOR_PVKEY);
const network = process.env.HEDERA_NETWORK;

const client = Client.forNetwork(network).setOperator(operatorId, operatorKey);


export async function executeContractFcn( accountId ) {

	const contractExecuteWhitelist = await new ContractExecuteTransaction()
		.setContractId('0.0.4528380')
		.setGas(100000)
		.setFunction("whitelist",
		new ContractFunctionParameters()
		.addString(accountId));
		
		const contractExecuteSubmit = await contractExecuteWhitelist.execute(client);
		const contractExecuteReceipt = await contractExecuteSubmit.getReceipt(client);
		
		console.log("The transaction status is ", contractExecuteReceipt.status.toString());
		
	return contractExecuteReceipt.status;

}


export async function callContractFcn( accountId ) {

	const contractQueryWhitelist = await new ContractCallQuery()
		.setContractId('0.0.4528380')
		.setGas(100000)
		.setFunction("whitelist",
			new ContractFunctionParameters()
			.addString(accountId));
		
		const contractQuerySubmit = await contractQueryWhitelist.execute(client);
		const contractQueryResult = await contractQuerySubmit.getString(0);
		
		console.log("The transaction status is ", contractQueryResult);
		
	return contractQueryResult;

}




