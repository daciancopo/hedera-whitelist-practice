import React from 'react';
import { HWBridgeConnector, useAccountId, useWallet } from "@buidlerlabs/hashgraph-react-wallets"
import { useState } from "react";


function Home() {
  return (
    <div className='w-full h-full p-4 md:scrollbar-hide overflow-auto'>
        <div className='w-full h-[56%] flex justify-between items-center'>
            <div className='w-[65%] h-[90%] text-center rounded-[25px]'>
                Check Whitelist
            </div>
            <div className='w-[30%] bg-[#151413] border h-[85%] text-center rounded-[25px] text-[#dcdcdc]'>
                Hello
            </div>
        </div>
        <div className='w-full h-[50%] flex justify-between items-center mb-8'>
            <div className='w-[47%] bg-[#151413] border-2 border-[#1b1b1b] h-[85%] text-center rounded-[25px] text-[#1B1B1B]'>
                Hello
            </div>
            <div className='w-[47%] bg-[#242324] border h-[85%] text-center rounded-[25px] text-[#dcdcdc]'>
                Hello
            </div>
        </div>
        <div className='w-full bg-[#151413] border border-[#dcdcdc] h-[65%] text-center rounded-[25px] text-[#dcdcdc]'>
            Hello
        </div>
    </div>
  )
}

export default Home