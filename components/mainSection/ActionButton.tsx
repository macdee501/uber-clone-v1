import React from 'react'
import Image from 'next/image'

export default function ActionButton({ value }) {
  return (
    <>
    <div className="bg-gray-200 flex  flex-col flex-1 m-1 h-32 items-center justify-center rounded-lg transform hover:scale-105 transition text-xl">
      <Image
      src='/uber-comfort.jpg'
      width={100}
      height={100}
      
      />
      <h2>{value}</h2>
    </div>
    </>
  )
}
