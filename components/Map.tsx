'use client'

import React from 'react' 
import { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'pk.eyJ1IjoibWFjZGVlNTAxIiwiYSI6ImNtYTBzc2QzOTB6cG0ycHBleDZseHF4eGQifQ.BcciGZZoSWk_KwtPswcONg'


export default function Map({pickupPoint,dropofPoint}) {


    // UseEffect to initliaze the map and the coordinates
    useEffect(() => {

        const map = new mapboxgl.Map({
            container: 'map', // container ID
            style: 'mapbox://styles/mapbox/streets-v12', // style URL
            center: [-73.990593, 40.740121], // starting position [lng, lat]
            zoom:3, // starting zoom
        });


        if(pickupPoint)
            {
                addToMap(map,pickupPoint)
            }
        if(dropofPoint)
            {
                addToMap(map,dropofPoint)
            }

            if(pickupPoint && dropofPoint)
            {   //if for zoom effect
                map.fitBounds([
                    pickupPoint,
                    dropofPoint

                ],{
                    padding:60
                })
            }
 
       
    },[pickupPoint,dropofPoint])


    // add marker to map function
    function addToMap(map,coordinates)
    {
        // const marker1 = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
         new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
       
    }

  





  return (


        <div className='flex-1' id='map'></div>
  )
}
