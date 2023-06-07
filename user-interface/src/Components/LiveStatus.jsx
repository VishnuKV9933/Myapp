import React from 'react'

function LiveStatus() {
  return (
    <div className='bg-white w-1/2'>

        <div>Live Statistics</div>

        <div className='flex'>


         <div className=''>
            <div className=" w-24 h-24 rounded-full border-8 border-gray-300 bg-transparent border-l-[#FF9618] ml-2 mr-8">
                <p className='m-6 flex items-center  text-2xl text-gray-400'>15</p>
            </div>
            <button class="border border-blue-500 text-gray-700 font-bold w-16 rounded ml-6 mt-2">
            <span className='font-normal text-sm pb-1 text-blue-400 '>Info</span>
         
          </button>
          </div>

      

          <div className=' '>
            <div className=" w-24 h-24 rounded-full border-8 border-gray-300 bg-transparent border-l-[#0B3366] border-t-[#0B3366] border-r-[#0B3366]    mr-6 ">
                <p className='m-6 flex items-center  text-2xl text-gray-400'>27</p>
            </div>
            <button class="border border-blue-500 text-gray-700 font-bold rounded ml-6 mt-2 px-1 h-6" >
              <span className='font-normal text-sm pb-1 text-blue-400 '>   Warnings</span>
         
          </button>
          </div>


          <div className=' '>
            <div className=" w-24 h-24 rounded-full border-8 border-gray-300 bg-transparent border-b-[#C4FF96]  ml- ">
                <p className='m-6 flex items-center pl-2 text-2xl text-gray-400'>1</p>
            </div>
            <button class="border border-blue-500 text-gray-700 font-bold w-16 rounded ml-6 mt-2">
            <span className='font-normal text-sm pb-1 text-blue-400'>Errors</span>
          </button>
          </div>
        </div>
        


        
    </div>
  )
}

export default LiveStatus
