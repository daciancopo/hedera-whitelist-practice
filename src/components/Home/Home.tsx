import React from 'react';
// import WalletConnect from '../Wallet/WalletConnect'

function Home() {
  return (
    <div className='w-full h-full  p-2 rounded-[25px]'>
        {/* <WalletConnect /> */}
        <div className='w-full h-[50%] flex justify-between items-center'>
            <div className='w-[65%] bg-[#ffffffde] border border-[#141414] h-[85%] text-center rounded-[25px]'>
                Hello
            </div>
            <div className='w-[30%] bg-[#141414] border hover:border-[#ffffffde] h-[85%] text-center rounded-[25px]'>
                Hello
            </div>
        </div>
        <div className='w-full bg-[#ffffffde] border border-[#141414] h-[55%] text-center rounded-[25px]'>
            Hello
        </div>
    </div>
  )
}

export default Home