import React, { useState } from "react";
import Mars from "../imageAsset/destination/image-mars.png";
import Moon from "../imageAsset/destination/image-moon.png";
import Europa from "../imageAsset/destination/image-europa.png";
import Titan from "../imageAsset/destination/image-titan.png";
import data from "../data.json";

type Props = {};
type dest = "Moon" | "Mars" | "Europa" | "Titan";
type destiny = {
  name: string;
  images: Record<string, string>;
  description: string;
  distance: string;
  travel: string;
};

const DestinationContent = (props: Props) => {
  const notActiveDestination = "text-center text-xl text-slate-300 font-robotoCondensed mr-4"
  const activeDestination = "text-center text-xl text-slate-300 font-robotoCondensed border-b-2 mr-4"
  const destinations: destiny[] = data.destinations;
  const [selectedDestination, setSelectedDestination] = useState<dest>("Mars");
  const oneDestination = destinations.find(
    (destination: destiny) => destination.name === selectedDestination
  )!;

  const { name, description, distance, travel } = oneDestination;
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
            src={
              selectedDestination === "Moon"
                ? Moon
                : selectedDestination === "Mars"
                ? Mars
                : selectedDestination === "Europa"
                ? Europa
                : Titan
            }
            alt={selectedDestination}
            className="flex items-center mt-8 lg:w-[60%]"
          />
        </div>
      </div>
      <div className="lg:w-[50%] lg:mt-20">
        <div className="flex">
          <h1
            className={selectedDestination === "Moon" ? activeDestination : notActiveDestination}
            onClick={() => {
              setSelectedDestination("Moon");
            }}
          >
            MOON
          </h1>
          <h1
            className={selectedDestination === "Mars" ? activeDestination : notActiveDestination}
            onClick={() => {
              setSelectedDestination("Mars");
            }}
          >
            MARS
          </h1>
          <h1
            className={selectedDestination === "Europa" ? activeDestination : notActiveDestination}
            onClick={() => {
              setSelectedDestination("Europa");
            }}
          >
            EUROPA
          </h1>
          <h1
            className={selectedDestination === "Titan" ? activeDestination : notActiveDestination}
            onClick={() => {
              setSelectedDestination("Titan");
            }}
          >
            TITAN
          </h1>
        </div>
        <h1 className="font-serif text-4xl leading-tight md:text-7xl font-light text-slate-300 my-8">
          {name}
        </h1>
        <p className="lg:w-[70%] text-xl text-slate-300 font-robotoCondensed mb-12">
          {description}
        </p>
        <hr className="lg:w-[75%] text-slate-300 mb-8" />
        <div className="flex text-slate-300 font-robotoCondensed lg:w-[50%] justify-between items-center">
          <div>
            <p>AVG. DISTANCE</p>
            <h1 className="text-3xl">{distance}</h1>
          </div>
          <div>
            <p>EST. TRAVEL TIME</p>
            <h1 className="text-3xl">{travel}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationContent;
