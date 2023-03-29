import React, { useState, useEffect } from "react";
import Mars from "../imageAsset/destination/image-mars.png";
import { getDestinationData } from "../helpers/services";

type Props = {};

const DestinationContent = (props: Props) => {
  const { name, images, description, distance, travel } = destinations;
  return (
    <div className="flex justify-center mt-12">
      <div className="flex flex-col lg:w-[50%]">
        <h1 className="text-left text-xl text-slate-50 font-robotoCondensed mb-8 ml-28">
          <span className="text-3xl text-slate-500 font-robotoCondensed">
            01
          </span>{" "}
          PICK YOUR DESTINATION
        </h1>
        <div className="flex items-center justify-center">
          <img
            src={Mars}
            alt="Mars"
            className="flex items-center mt-8 lg:w-[60%]"
          />
        </div>
      </div>
      <div className="lg:w-[50%] lg:mt-20">
        <div className="flex">
          <h1 className="text-center text-xl text-slate-300 font-robotoCondensed mr-4">
            MOON
          </h1>
          <h1 className="text-center text-xl text-slate-300 font-robotoCondensed border-b-2 mr-4">
            MARS
          </h1>
          <h1 className="text-center text-xl text-slate-300 font-robotoCondensed mr-4">
            EUROPA
          </h1>
          <h1 className="text-center text-xl text-slate-300 font-robotoCondensed mr-4">
            TITAN
          </h1>
        </div>
        <h1 className="font-serif text-4xl leading-tight md:text-7xl font-light text-slate-300 my-8">
          MARS
        </h1>
        <p className="lg:w-[70%] text-xl text-slate-300 font-robotoCondensed mb-12">
          Don’t forget to pack your hiking boots. You’ll need them to tackle
          Olympus Mons, the tallest planetary mountain in our solar system. It’s
          two and a half times the size of Everest!
        </p>
        <hr className="lg:w-[75%] text-slate-300 mb-8" />
        <div className="flex text-slate-300 font-robotoCondensed lg:w-[50%] justify-between items-center">
          <div>
            <p>AVG. DISTANCE</p>
            <h1 className="text-3xl">225 MIL. KM</h1>
          </div>
          <div>
            <p>EST. TRAVEL TIME</p>
            <h1 className="text-3xl">9 MONTHS</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

type dest = "Moon" | "Mars" | "Europa" | "Titan"

const DestinationSelected = () =>{
  const [destinations, setDestinations] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState<dest>("Moon");
  useEffect(() => {
    const fetchData = async () => {
      setDestinations(await getDestinationData());
      console.log(destinations);
    };
    fetchData();
    const OneDestination = destinations.find((destination:{})=> {destination.name == selectedDestination})
  }, []);



  const handleClick = (destination: string) => {
      setSelectedDestination(destination)
  };
  return(

  )
}

export default DestinationContent;
