"use client";
import data from "../../data/data.json";
import { useState } from "react";
import Image from "next/image";

interface Technology {
  name: string;
  description: string;
  images: {
    portrait: string;
    landscape: string;
  };
}

const technologies: Technology[] = data.technology;

const Technology = () => {
  const [selectedTechnology, setSelectedTechnology] = useState<number>(0);
  const technology = technologies[selectedTechnology];

  return (
    <div className="h-auto flex flex-col flex-1 mt-10 lg:ml-[184px] md:mr-0 lg:mr-0 lg:pr-0">
      <h1 className="text-white font-barlow-condensed font-light tracking-widest text-xl md:text-3xl flex items-center justify-center md:justify-start ml-5 md:ml-10">
        <span className="text-white/20 font-semibold mr-4">03</span>
        SPACE LAUNCH 101
      </h1>
      <div className="flex gap-10 lg:gap-5 mt-10 flex-1 flex-col lg:flex-row-reverse">
        <div className="flex-1 flex flex-col lg:flex-row md:mt-10 mb-10 lg:my-0 items-center justify-center lg:items-end lg:justify-end relative">
          <div className="w-full max-w-[500px] lg:max-w-[450px]">
            <picture>
              {/* For mobile and tablet, use the landscape image */}
              <source
                srcSet={technology.images.landscape}
                media="(max-width: 1024px)"
              />
              {/* Fallback to landscape image for larger screens as well */}
              <Image
                src={technology.images.portrait}
                alt={technology.name}
                layout="responsive"
                width={1}
                height={1}
                className="object-cover absolute -z-10 lg:static left-0 top-0 inset-0"
              />
            </picture>
          </div>
        </div>
        <div className="flex-1 flex flex-col lg:flex-row gap-10 lg:items-center h-fit self-center mt-28">
          <div className="flex lg:flex-col gap-10 md:gap-20 lg:gap-10 justify-center lg:justify-between">
            {technologies.map((tech, index) => (
              <button
                key={index}
                className={`border border-white h-12 w-12 md:w-20 md:h-20 lg:h-12 lg:w-12 rounded-full flex items-center justify-center text-xl md:text-4xl lg:text-2xl uppercase font-bellefair  ${
                  index === selectedTechnology
                    ? " text-darkBlue bg-white"
                    : "text-white"
                }`}
                onClick={() => setSelectedTechnology(index)}
              >
                {index}
              </button>
            ))}
          </div>
          <div className="flex-1 flex flex-col gap-5 items-center lg:items-start w-full text-center">
            <p className="text-white/50 md:mt-10 lg:mt-0 font-bellefair md:text-4xl lg:text-2xl text-2xl">
              THE TERMINOLOGY...
            </p>
            <p className="font-bellefair uppercase text-white text-3xl md:text-6xl lg:text-5xl tracking-wider">
              {technology.name}
            </p>
            <p className="font-barlow text-powderBlue text-base text-center md:text-2xl tracking-wide lg:text-base lg:text-left px-7 md:px-24 lg:px-0">
              {technology.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
