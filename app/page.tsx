import MainSection from "@/components/mainSection/MainSection";
import Map from "@/components/Map";






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



