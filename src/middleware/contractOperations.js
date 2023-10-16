
// import { Client, ContractId, AccountId, PrivateKey, ContractCallQuery, ContractExecuteTransaction, ContractFunctionParameters } from "@hashgraph/sdk";

// const contractId = ContractId.fromString('0.0.4528380');

// const operatorId = AccountId.fromString(process.env.OPERATOR_ID);
// const operatorKey = PrivateKey.fromString(process.env.OPERATOR_PVKEY);
// // const network = process.env.HEDERA_NETWORK;

// const client = Client.forTestnet().setOperator(operatorId, operatorKey);
// // const client = Client.forNetwork(network).setOperator(operatorId, operatorKey);


// // const operatorId = AccountId.fromString('0.0.4528272');
// // const operatorKey = PrivateKey.fromString('1b01beb02610b1e735b1e54e6b4875049c06faeb9115122d5bb6af1a05d04961');


// // export {operatorId, operatorKey, network, client}

// async function executeContractFcn( accountId ) {

//     const accountIdFormat = AccountId.fromString(accountId);

//     const contractExecuteWhitelist = await new ContractExecuteTransaction()
//       .setContractId(contractId)
//       .setGas(100000)
//       .setFunction("whitelist",
//         new ContractFunctionParameters()
//         .addAddress(accountIdFormat.toSolidityAddress()));

      
//       const contractExecuteSubmit = await contractExecuteWhitelist.execute(client);
//       const contractExecuteRecord = await contractExecuteSubmit.getRecord(client);

//       console.log("The transaction result is ", contractExecuteRecord)
      
//     return contractExecuteRecord;
  
//   }


//   // Call Query Whitelist Function

//   async function callContractFcn( accountId ) {

//     const accountIdFormat = AccountId.fromString(accountId);

//     // console.log("Client:", client)
    
//     const contractQueryWhitelist = await new ContractCallQuery()
//     .setContractId(contractId)
//     .setGas(100000)
//     .setFunction("whitelist", new ContractFunctionParameters()
//       .addAddress(accountIdFormat.toSolidityAddress()));
    
      
    
//     console.log("contractQueryWhitelist:", contractQueryWhitelist)
    
//     const contractQuerySubmit = await contractQueryWhitelist.execute(client);

//     console.log("contractQuerySubmit:", contractQuerySubmit)

//     const contractQueryResult = await contractQuerySubmit;

//     console.log("The caller result is: ", contractQueryResult);
      
//     return contractQueryResult;
  
//   }

