import React, { useState } from 'react';
// import * as contracts from "../../middleware/contractOperations.js";
import { Client, ContractId, AccountId, PrivateKey, ContractCallQuery, ContractExecuteTransaction, ContractFunctionParameters } from "@hashgraph/sdk";

// import {operatorId, operatorKey, network, client} from "../../middleware/contractOperations.js";


const CheckWhitelist: React.FC = () => {
  const [accountId, setAccountId] = useState<string>('');

  const contractId = ContractId.fromString('0.0.4528380');

  const operatorId = AccountId.fromString('0.0.4528272');
  const operatorKey = PrivateKey.fromString('1b01beb02610b1e735b1e54e6b4875049c06faeb9115122d5bb6af1a05d04961');
  
  const client = Client.forTestnet().setOperator(operatorId, operatorKey);


  // const operatorPublicKey = operatorKey.publicKey;
  // const operatorEvmAddress = operatorPublicKey.toEvmAddress();

  const handleCheckWhitelist = async () => {
    const callerResultExecution = await executeContractFcn(accountId);
    const callerResulQueryt = await callContractFcn(accountId);

    console.log("callerResultExecution: ", callerResultExecution);
    console.log("callerResulQueryt: ", callerResulQueryt);
  };


  async function executeContractFcn( accountId: any ) {

    const accountIdFormat = AccountId.fromString(accountId);

    const contractExecuteWhitelist = await new ContractExecuteTransaction()
      .setContractId('0.0.4528380')
      .setGas(100000)
      .setFunction("whitelist",
        new ContractFunctionParameters()
        .addAddress(accountIdFormat.toSolidityAddress()));

      
      const contractExecuteSubmit = await contractExecuteWhitelist.execute(client);
      const contractExecuteRecord = await contractExecuteSubmit.getRecord(client);

      console.log("The transaction result is ", contractExecuteRecord)
      
    return contractExecuteRecord;
  
  }


  // Call Query Whitelist Function

  async function callContractFcn( accountId: any ) {

    const accountIdFormat = AccountId.fromString(accountId);

    // console.log("Client:", client)
    
    const contractQueryWhitelist = await new ContractCallQuery()
    .setContractId('0.0.4528380')
    .setGas(100000)
    .setFunction("whitelist", new ContractFunctionParameters()
      .addAddress(accountIdFormat.toSolidityAddress()));
      
    
    console.log("contractQueryWhitelist:", contractQueryWhitelist)
    
    const contractQuerySubmit = await contractQueryWhitelist.execute(client);

    console.log("contractQuerySubmit:", contractQuerySubmit)

    const contractQueryResult = await contractQuerySubmit;

    console.log("The caller result is: ", contractQueryResult);
      
    return contractQueryResult;
  
  }

  return (
    <div>
      <h2>Check Whitelist</h2>
      <input
        type="text"
        placeholder="Account ID"
        value={accountId}
        onChange={(e) => setAccountId(e.target.value)}
      />

      <button onClick={handleCheckWhitelist}>Check Whitelist</button>
      {/* {isWhitelisted === true && <p>Account is whitelisted.</p>} */}
      {/* {isWhitelisted === false && <p>Account is not whitelisted.</p>} */}
    </div>
  );
};

export default CheckWhitelist;
