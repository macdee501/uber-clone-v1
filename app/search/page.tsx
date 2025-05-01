'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { CiCirclePlus, CiStar } from 'react-icons/ci'
import { PiLineVertical } from 'react-icons/pi'
import { VscArrowLeft, VscCircle, VscCircleFilled } from 'react-icons/vsc'

export default function Search() {





    const [pickup,setPickup] = useState("")
    const [dropof,setDropof] = useState("")

  return (
    <div className='bg-green-200 h-screen'>
      {/* Button Container */}
        <div className="bg-red-300 h-10 px-4">
            <Link href='/'>
                <VscArrowLeft className='text-3xl h-12' />
            </Link>
        </div>
      {/* Input Container */}
      <div className="flex bg-white items-center px-4">
        {/* left cons container */}
        <div className="bg-yellow-500 mr-2 items-center" id='fromToIcons'>
        <VscCircle className='h-2.5' />
        <PiLineVertical className=' h-10'/>
        <VscCircleFilled className='h-3'/>

        </div>
        {/* middle input container */}
        <div className="flex flex-col flex-1 bg-purple-500" id='inputContainer'>
            <input className='h-10 bg-gray-200 my-2 rounded-2 p-2 outline-none border-none' placeholder='Enter Pick Up Location' value={pickup} onChange={(e)=>setPickup(e.target.value)}/>
            <input className='h-10 bg-gray-200 my-2 rounded-2 p-2 outline-none border-none' placeholder='Enter Drop Off Location?' value={dropof} onChange={(e)=>setDropof(e.target.value)}/>
        </div>
        {/* right more locations container */}
        <div className="h-10  my-2 " id='addMoreLocationsContainer'>
        <CiCirclePlus className='text-5xl w-10 h-10 bg-gray-200 rounded-full ml-3 ' />
        </div>
      </div>
      {/* Saved Places */}
      <div className="flex items-center mt-2 bg-red-600 px-4 py-2" id='savedPlaces'>
      <CiStar className='bg-gray-400 w-10 h-10 mr-2 p-2 rounded-full' />
        <p>Saved Places</p>
      </div>
      {/* confirm location */}
      <div className="bg-black mt-2 mx-4 py-4 flex items-center text-white text-center text-2l" id='confirmedLocations'>
        <Link href={{pathname:'/confirm',
            query:{
                pickup:pickup,
                dropof:dropof
            }
        }} >
        
       Confirmed Destination
        </Link>
      </div>
    </div>
  )
}
