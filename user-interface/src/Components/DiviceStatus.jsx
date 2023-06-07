import React from 'react'

function DiviceStatus() {
  return (
    <div className='w-1/2 pt-4 bg-white pl-3'>
      Device Status

<div className='flex flex-col gap-1 overflow-y-scroll'>



<div style={{fontSize:"13px"}} className='flex text-slate-600 '>
    <div className=' w-28'>Device Name</div>
    <div>Status</div>
    <div className='ml-8'>Last Response</div>
</div>

<div style={{fontSize:"13px" ,backgroundColor:"#F6F6F6"}} className='flex text-slate-600 '>
    <div className=' w-28'>FutureIk device 01</div>
    <div style={{backgroundColor:"#E40404"}}  className='bg-red-600 px-1 rounded text-white'>Offline</div>
    <div className='ml-5'>Fri Apr 26 2023;03:00:10</div>
</div>

<div style={{fontSize:"13px"}} className='flex text-slate-600 '>
    <div className=' w-28'>FutureIk device 01</div>
    <div style={{backgroundColor:"#009421"}}  className='bg-red-600 px-1 rounded text-white'>Offline</div>
    <div className='ml-5'>Fri Apr 26 2023;03:00:10</div>
</div>

<div style={{fontSize:"13px",backgroundColor:"#F6F6F6"}} className='flex text-slate-600 '>
    <div className=' w-28'>FutureIk device 01</div>
    <div style={{backgroundColor:"#E40404"}}  className='bg-red-600 px-1 rounded text-white'>Offline</div>
    <div className='ml-5'>Fri Apr 26 2023;03:00:10</div>
</div>

<div style={{fontSize:"13px"}} className='flex text-slate-600 '>
    <div className=' w-28'>FutureIk device 01</div>
    <div style={{backgroundColor:"#009421"}}  className='bg-red-600 px-1 rounded text-white'>Offline</div>
    <div className='ml-5'>Fri Apr 26 2023;03:00:10</div>
</div>

<div style={{fontSize:"13px",backgroundColor:"#F6F6F6"}} className='flex text-slate-600 '>
    <div className=' w-28'>FutureIk device 01</div>
    <div style={{backgroundColor:"#E40404"}}  className='bg-red-600 px-1 rounded text-white'>Offline</div>
    <div className='ml-5'>Fri Apr 26 2023;03:00:10</div>
</div>
</div>


    </div>
  )
}

export default DiviceStatus
