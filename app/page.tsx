import MainSection from "@/components/mainSection/MainSection";
import Map from "@/components/Map";
import Image from "next/image";
import tw from "tailwind-styled-components"





export default function Home() {
  return (
    <>

    <div className="bg-blue-300 h-screen flex flex-col">
  <Map></Map>
  <MainSection/>

    </div>

    </>
  );
}



