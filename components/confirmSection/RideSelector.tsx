import { carList } from '@/data/carList';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export default function RideSelector({pickupPoint,dropofPoint}) {

   let [rideDuration,setRideDuration] = useState();


// Get ride duration from map box api
    useEffect(()=> {
    rideDuration = fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickupPoint[0]},${pickupPoint[1]};${dropofPoint[0]},${dropofPoint[1]}?access_token=pk.eyJ1IjoibWFjZGVlNTAxIiwiYSI6ImNtYTBzc2QzOTB6cG0ycHBleDZseHF4eGQifQ.BcciGZZoSWk_KwtPswcONg`)
    .then((res)=> res.json())
    .then(data => {
        setRideDuration(data.routes[0].duration/100)
    })


    },[pickupPoint,dropofPoint])

  return (
    <div className='flex-1 bg-red-500'>
        {/* Title */}
        <div className="">
            <h2 className='text-gray-500 text-center text-xs py-2 border-b'>Choose a ride, or swipe up for more</h2>
        </div>
        {/* Car List Options */}
        <div className="">

            {carList.map((car,key) => (

            <div className="flex p-4 items-center" id='car' key={key}>
              <Image
                    src='/uber-comfort.jpg'
                    width={100}
                    height={100}

                    alt=''
                    
                    />
                    <div className="flex-1" id='details'>
                        <p className='font-medium'>{car.servcice}</p>
                        <p className='text-xs text-blue-500'>5 mins Away</p>
                    </div>
                    <p className='text-sm'>{'R'+ (rideDuration*car.multiplier).toFixed(2)}</p>
            </div>
            ))}

        </div>
    </div>
  )
}
