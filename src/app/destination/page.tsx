'use client'
import data from "../../data/data.json"
import { useState } from "react";
import Image from "next/image";

const destinations = data.destinations;
const destinationTabs = [
  { name: "moon" },
  { name: "mars" },
  { name: "europa" },
  { name: "titan" }
];

const Destination = () => {
  const [selectedDestination, setSelectedDestination] = useState(0);
  const destination = destinations[selectedDestination];

  return (
    <div className="h-auto flex flex-col">
      <h1 className="text-white font-barlow-condensed font-light tracking-widest text-xl md:text-3xl flex items-center justify-center md:justify-start">
        <span className="text-white/20 font-semibold mr-4">01</span>
        PICK YOUR DESTINATION
      </h1>
      <div className="flex gap-10 mt-10 flex-1 flex-col lg:flex-row">
        <div className="flex-1 flex flex-col lg:flex-row items-center justify-center mt-10">
          <div className="w-full max-w-[300px] md:max-w-[500px] lg:max-w-[400px]">
            <Image
              src={destination.images.webp}
              alt={destination.name}
              layout="responsive"
              width={1}
              height={1}
              className="object-contain"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-10 items-center lg:items-start">
          <div className="flex gap-10 h-10 items-center justify-center lg:justify-start py-5">
            {destinationTabs.map((tab, index) => (
              <button
                key={index}
                className={`pb-2 tracking-widest md:text-2xl lg:text-lg uppercase font-barlow-condensed ${
                  index === selectedDestination
                    ? "border-b-2 border-white text-white"
                    : "text-powderBlue"
                }`}
                onClick={() => setSelectedDestination(index)}
              >
                {tab.name}
              </button>
            ))}
          </div>
          <div className="flex-1 flex flex-col gap-5 items-center lg:items-start w-full md:w-3/4 lg:w-full">
            <p className="font-bellefair uppercase text-white text-5xl md:text-8xl lg:text-7xl tracking-wider">
              {destination.name}
            </p>
            <p className="font-barlow text-powderBlue text-base border-b-2 border-white/20 pb-10 text-center md:text-xl lg:text-lg lg:text-left ">
              {destination.description}
            </p>
            <div className="flex flex-col md:flex-row gap-5 md:gap-20 py-3 text-center">
              <div className="flex flex-col gap-2">
                <p className="text-powderBlue font-barlow-condensed tracking-wider">AVG. DISTANCE</p>
                <p className="font-bellefair text-white uppercase tracking-widest lg:tracking-normal text-2xl">{destination.distance}</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-powderBlue font-barlow-condensed tracking-widest">EST. TRAVEL TIME</p>
                <p className="font-bellefair text-white uppercase tracking-widest lg:tracking-normal text-2xl">{destination.travel}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
