import React, { useState } from 'react';
import axios from 'axios';

import { HWBridgeConnector, useWallet } from "@buidlerlabs/hashgraph-react-wallets"
import { ContractExecuteTransaction, ContractFunctionParameters } from "@hashgraph/sdk";

import {mirrorTxQueryFcn} from "../../utils/txQuery"

import { getMirrorAccounts } from '../../hooks/accountsApi';
import { getMirrorContract } from '../../hooks/contractsApi'
import { hederaConst } from '../../constants/hedera';


interface IProps {
  connector?: HWBridgeConnector
}

const CheckWhitelist = ({ connector }: IProps) => {

  const [accId, setAccId] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>({});
  const [hashLink, setHashLink] = useState<string>('');
  const [hashLinkCheck, setHashLinkCheck] = useState<string>('');

  const { signer } = useWallet(connector);
  // const { accountId } = useAccountId(connector);
  
  const handleAddToWhitelist = async () => {
      const callerResultExecution = await executeContractFcn();
      console.log("Added To Whitelist: ", callerResultExecution);
    }



  const handleCheckWhitelist = async () => {

      const getAcc = await getMirrorAccounts(accId);
     
        const consensusTimestamp = getAcc.transactions[0].consensus_timestamp;
        console.log("Get Acc Value: ", consensusTimestamp);
   
        const getContract = await getMirrorContract(consensusTimestamp);
 
        console.log("Get Contract Value: ", getContract);

        const txId = consensusTimestamp.split(".");
        const transactionId = `${accId}-${txId[0]}-${txId[1]}`;

        const hashScanLink = `${hederaConst.hashScanUrl}/transactions/${transactionId}`;

        setHashLinkCheck(hashScanLink);

        console.log("hashScanLink Value: ", hashScanLink);

        return getContract;
        
  };


  //  Contract Execution Function
  const executeContractFcn = async () => {
    try {
        if (!signer) return;

        // --------  Execute Contract  ----------
        const contractExecuteWhitelist = await new ContractExecuteTransaction()
          .setContractId(hederaConst.contractId)
          .setGas(100000)
          .setFunction("whitelist", new ContractFunctionParameters().addAddress(signer.getProvider()));
        
        const contractExecuteWhitelistFreeze = (await contractExecuteWhitelist.freezeWithSigner(signer));
        const contractExecuteWhitelistResponse = (await contractExecuteWhitelistFreeze.executeWithSigner(signer));

        
        const tx = await mirrorTxQueryFcn(contractExecuteWhitelistResponse).then((res: any) => {
          setLoading(true)
          setData(res[0]);
          setHashLink(res[1]);

          console.log("Tx Res Value:", res)
          console.log("Data Value:", res[0])

        });
        
        console.log("HashLink Value:", contractExecuteWhitelistResponse)
        // console.log("Executed Contract Function:", contractExecuteWhitelistResponse.transactionId.toString())
        setLoading(false)
        return tx;
      } catch (error: any) {
        console.error(error)
      }
  }


  return (
    <div className='w-full h-[500px] p-4'>
      <div className='w-full text-center h-[150px]'>
        {loading && !hashLink &&(
          <div className='w-full h-100px text-[#4DFE59] text-[25px]'>
            <h1 className='text-[30px]'>Loading..</h1>
          </div>
        )}
        {hashLink && (
          <>
            <h1 className='text-[30px]'>Whitelisted With Success!</h1>
            <div className='w-full h-100px text-[#4DFE59] text-[25px]'>
              <a href={hashLink} target="_blank">Check Here - HashScan</a>
            </div>
          </>
        )}
        {hashLinkCheck && (
          <>
            <h1 className='text-[30px]'>Account is Whitelisted!</h1>
            <div className='w-full h-100px text-[#4DFE59] text-[25px]'>
              <a href={hashLink} target="_blank">Check Here - HashScan</a>
            </div>
          </>
        )}
      </div>
      <div className='h-full flex flex-col justify-between items-center'>
        <input
          type="text"
          placeholder="Account ID"
          value={accId}
          onChange={(e) => setAccId(e.target.value)}
          />
          <button className='border p-2' onClick={handleAddToWhitelist}>Add To Whitelist</button>
          <br/>
          <button className='border p-2' onClick={handleCheckWhitelist}>Check Whitelist</button>
        </div>
    </div>
  );
};

export default CheckWhitelist;
