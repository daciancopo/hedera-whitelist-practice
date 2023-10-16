import React from 'react';

function Home() {
  return (
    <div className='w-full h-full rounded-[25px] p-6 scrollbar-hide overflow-auto'>
        <div className='w-full h-[50%] flex justify-between items-center'>
            <div className='w-[65%] bg-[#ffffffde] border-2 border-[#292929] h-[85%] text-center rounded-[25px]'>
                Check Whitelist 
            </div>
            <div className='w-[30%] bg-[#292929] border-2 h-[85%] text-center rounded-[25px]'>
                Hello
            </div>
        </div>
        <div className='w-full h-[50%] flex justify-between items-center mb-8'>
            <div className='w-[47%] bg-[#ffffffde] border-2 border-[#292929] h-[85%] text-center rounded-[25px]'>
                Hello
            </div>
            <div className='w-[47%] bg-[#292929] border-2 h-[85%] text-center rounded-[25px]'>
                Hello
            </div>
        </div>
        <div className='w-full bg-[#292929] border-2 border-white h-[65%] text-center rounded-[25px]'>
            Hello
        </div>
    </div>
  )
}

export default Home