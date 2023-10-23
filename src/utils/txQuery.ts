import axios from "axios";

import { hederaConst } from '../constants/hedera';

export async function mirrorTxQueryFcn(txRec: any) {
	// Query a mirror node for information about the transaction
	const delay = (ms: any) => new Promise((res) => setTimeout(res, ms));
	await delay(10000); // Wait for 10 seconds before querying a mirror node to allow for info propagation

	// const txTimestamp = txRec.consensusTimestamp;
	const txIdRaw = txRec.transactionId;
	const txIdPretty = prettify(txIdRaw.toString());
	const mirrorNodeExplorerUrl = `${hederaConst.hashScanUrl}/transaction/${txIdPretty}`;
	const mirrorNodeRestApi = `${hederaConst.mirrorUrl}/api/v1/transactions/${txIdPretty}`;
	// let mQuery: any = [];
	let data: any = {};
	try {
		const mQuerys = await axios.get(mirrorNodeRestApi);
		const response = mQuerys.data.transactions[0];
		data=response;
	} catch {}
	return [data, mirrorNodeExplorerUrl];
}

export function prettify(txIdRaw: any) {
	const a = txIdRaw.split("@");
	const b = a[1].split(".");
	return `${a[0]}-${b[0]}-${b[1]}`;
}