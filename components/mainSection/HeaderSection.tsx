import Image from 'next/image'
import React from 'react'

export default function HeaderSection() {
  return (
    <div className='flex justify-between items-center bg-purple-800'>
        <img src='https://images.seeklogo.com/logo-png/33/1/uber-logo-png_seeklogo-338872.png' width={100} height={100} alt='Company-logo'/>
    <div className="flex items-center">
        <h2 className='mr-4 w-20 text-sm'>Name Lastname</h2>
        <img src='https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1286&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='h-10 w-10 rounded-full border border-gray-200 p-px'/>
    </div>

</div>
  )
}
