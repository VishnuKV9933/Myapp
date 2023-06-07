import React from 'react'

function Generel() {
  return (
    <div style={{height:"177px"}} className='bg-white w-1/2 p-4 flex flex-col gap-1'>
      General Information

        <div className='flex items-center'>
            <div className='w-16 text-sm  text-slate-300'>Projects</div>
            <div  style={{ backgroundColor: "#F6F6F6" }} className='w-4/6 bg-blue-300 h-4 rounded-full'>
                <div  style={{ backgroundColor: "blue" }} className='w-1/2 bg-blue-700 rounded-full h-4'></div>
            </div>
            <div className='ml-2  text-slate-300'>02/10</div>
        </div>


        <div className='flex items-center'>
            <div className='w-16 text-sm  text-slate-300'>Users</div>
            <div  style={{ backgroundColor: "#66E404" }} className='w-4/6 bg-blue-300 h-4 rounded-full'>
               
            </div>
            <div className='ml-2  text-slate-300'>03/03</div>
        </div>

        <div className='flex items-center'>
            <div className='w-16 text-sm  text-slate-300'>Channels</div>
            <div  style={{ backgroundColor: "#E40404" }} className='w-4/6 bg-blue-300 h-4 rounded-full'>
               
            </div>
            <div className='ml-2  text-slate-300'>10/10</div>
        </div>

        <div className='flex items-center'>
            <div className='w-16 text-sm  text-slate-300'>Device</div>
            <div  style={{ backgroundColor: "#F6F6F6" }} className='w-4/6 bg-blue-300 h-4 rounded-full'>
                <div  style={{ backgroundColor: " #0B3366" }} className='w-1/2 bg-blue-700 rounded-full h-4'></div>
            </div>
            <div className='ml-2  text-slate-300'>05/10</div>
        </div>
    </div>
  )
}

export default Generel
