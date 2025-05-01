import React from 'react'
import ActionButton from './ActionButton'
import Link from 'next/link'


export default function ButtonSection() {
  return (
    <div className='bg-green-500 flex p-4 justify-between items-center '>
      <Link href='/search'>
      <ActionButton value='Ride' />
      </Link>
      <ActionButton value='2-Wheels'/>
      <ActionButton value='Reserve'/>
    
    </div>
  )
}


