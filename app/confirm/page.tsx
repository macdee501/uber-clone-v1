'use client'

import RideSelector from '@/components/confirmSection/RideSelector';
import Map from '@/components/Map'
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export default function Confirm() {



      const searchParams = useSearchParams()

      const pickupP = searchParams.get('pickup');
      const dropofP = searchParams.get('dropof');

    

    const [pickupCoordinats,setPickupCoordinates] = useState([0,0]);
    const [dropofCoordinats,setDropofCoordinates] = useState([0,0]);

    // get Geo coordinats function 
    function getPickupCoordinates(pickup:number)
    {

        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?`+ new URLSearchParams({

            access_token:"pk.eyJ1IjoibWFjZGVlNTAxIiwiYSI6ImNtYTBzc2QzOTB6cG0ycHBleDZseHF4eGQifQ.BcciGZZoSWk_KwtPswcONg",
            limit:1,
        }
        ))
        .then(
            response => response.json()
        )
        .then(
            data=> {


                setPickupCoordinates(data.features[0].center)
            }
        )


    }

    function getDropofCoordinates(dropOf:number)
    {

        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropOf}.json?`+ new URLSearchParams({
            access_token:"pk.eyJ1IjoibWFjZGVlNTAxIiwiYSI6ImNtYTBzc2QzOTB6cG0ycHBleDZseHF4eGQifQ.BcciGZZoSWk_KwtPswcONg",
            limit:1,
        }
        ))
        .then(
            response => response.json()
        )
        .then(
            data=>{         
                setDropofCoordinates(data.features[0].center)
            } 
        )


    }

    useEffect(()=>{
        getPickupCoordinates(pickupP);
        getDropofCoordinates(dropofP);
    },[pickupP,dropofP])


  return (
    <div className='bg-blue-300 h-screen flex flex-col' id='container'>
        {/* Map Import Container */}
        <Map pickupPoint={pickupCoordinats} dropofPoint={dropofCoordinats}/>
        {/* Confirm Ride Container */}
        <div className="flex flex-col flex-1" id='confirmdRideContainer'>
            {/* ride Selector */}
                <RideSelector pickupPoint={pickupCoordinats} dropofPoint={dropofCoordinats}/>
              
            {/* Confirm Button */}
            <div className=" border-t-2" id='confirmbutton'>
                <div className="bg-black text-white m-4  py-4 text-center text-xl">
                    Confirm Uber Car
                </div>
            </div>
        </div>
    </div>
  )
}
