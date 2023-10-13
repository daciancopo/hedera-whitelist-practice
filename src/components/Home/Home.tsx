import React from 'react';

function Home() {
  return (
    <div className='w-full h-full rounded-[25px] overflow-x-hidden overflow-scroll pr-6'>
        <div className='w-full h-[50%] flex justify-between items-center'>
            <div className='w-[65%] bg-[#ffffffde] border border-[#292929] h-[85%] text-center rounded-[25px]'>
                Hello
            </div>
            <div className='w-[30%] bg-[#292929] border hover:border-[#ffffffde] h-[85%] text-center rounded-[25px]'>
                Hello
            </div>
        </div>
        <div className='w-full h-[50%] flex justify-between items-center'>
            <div className='w-[47%] bg-[#ffffffde] border border-[#292929] h-[85%] text-center rounded-[25px]'>
                Hello
            </div>
            <div className='w-[47%] bg-[#292929] border hover:border-[#ffffffde] h-[85%] text-center rounded-[25px]'>
                Hello
            </div>
        </div>
        <div className='w-full bg-[#ffffffde] border border-[#292929] h-[55%] text-center rounded-[25px]'>
            Hello
        </div>
    </div>
  )
}

export default Home