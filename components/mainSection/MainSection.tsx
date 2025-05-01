import React from 'react'
import ButtonSection from './ButtonSection'
import HeaderSection from './HeaderSection'
import SearchSection from './SearchSection'

export default function MainSection() {
  return (
    <>
        <div className='flex-1 bg-red-800'>
           
            <HeaderSection/>
            <ButtonSection/>
            <SearchSection/>

        </div>
    </>
    
  )
}


