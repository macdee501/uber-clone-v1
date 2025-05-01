import React from 'react'
import tw from "tailwind-styled-components"
import ActionButton from './ButtonSection'
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


