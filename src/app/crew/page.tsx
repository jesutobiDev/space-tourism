"use client";
import data from "../../data/data.json";
import { useState, useEffect } from "react";
import Image from "next/image";

interface CrewMember {
  role: string;
  name: string;
  bio: string;
  images: {
    webp: string;
    png: string;
  };
}

const Crew = () => {
  const crew: CrewMember[] = data.crew;
  const [selectedCrewMember, setSelectedCrewMember] = useState<number>(0);

  const member = crew[selectedCrewMember];

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        setSelectedCrewMember((prev) => (prev + 1) % crew.length);
      } else if (event.key === "ArrowLeft") {
        setSelectedCrewMember((prev) => (prev - 1 + crew.length) % crew.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [crew.length]);

  return (
    <div className="h-auto flex flex-col flex-1 mt-10 lg:ml-[184px] mr-5 md:mr-10 lg:pr-0 lg:mr-32 ml-5 md:ml-10 ">
      <h1 className="text-white font-barlow-condensed font-light tracking-widest text-xl md:text-3xl flex items-center justify-center md:justify-start">
        <span className="text-white/20 font-semibold mr-4">02</span>
        MEET YOUR CREW
      </h1>
      <div className="flex gap-10 mt-10 flex-1 flex-col lg:flex-row">
        <div className="lg:flex-1 flex flex-col gap-10 items-center lg:items-start p-3">
          <div className="flex-1 flex-col flex justify-center items-center lg:items-start text-center lg:text-left gap-3 md:gap-5 lg:gap-2">
            <p className="text-white/40 uppercase font-bellefair text-2xl md:text-4xl lg:text-2xl">{member.role}</p>
            <p className="font-bellefair text-white uppercase text-3xl md:text-5xl lg:text-4xl mb-2 md:mb-4 lg:mb-2">{member.name}</p>
            <p className="font-barlow text-powderBlue tracking-wide md:text-xl lg:text-base md:mx-10 lg:mx-0">{member.bio}</p>
          </div>
          <div className="w-full justify-center lg:justify-start items-baseline flex md:gap-7 lg:gap-3 h-10">
            {
              crew.map((crewMember, index) => (
                <div key={index} 
                  className={`w-10 h-full flex items-center justify-center cursor-pointer`}
                  onClick={() => setSelectedCrewMember(index)}
                >
                  <div className={`w-3 h-3 md:h-4 md:w-4 rounded-full ${index === selectedCrewMember ? "bg-white" : "bg-white/20"}`}></div>
                </div>
              ))
            }
          </div>
        </div>
        <div className="lg:flex-1 flex flex-col lg:flex-row items-center lg:items-end justify-end lg:justify-center">
          <div className="w-full max-w-[300px] md:max-w-[450px] lg:max-w-[350px]">
            <picture>
              <source srcSet={member.images.webp} type="image/webp" />
              <Image
                src={member.images.png}
                alt={member.name}
                layout="responsive"
                width={1}
                height={1}
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crew;
