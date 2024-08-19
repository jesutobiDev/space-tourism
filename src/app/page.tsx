import Link from "next/link";

export default function Home() {
  return (
    <div className="h-full flex flex-col lg:flex-row flex-1 justify-center lg:my-10 lg:ml-[184px] mr-5 md:mr-10 lg:pr-0 lg:mr-32 gap-20 lg:gap-0 ml-5 md:ml-10 ">
      <div className="lg:w-1/2 w-full lg:h-full lg:mt-auto flex justify-end flex-col gap-5 items-center lg:items-start text-center lg:text-left">
        <p className="font-barlow-condensed text-powderBlue text-2xl md:text-4xl lg:text-2xl tracking-wider lg:tracking-widest mb-3 lg:mb-0">
          SO, YOU WANT TO TRAVEL TO
        </p>
        <h1 className="text-white text-8xl md:text-[180px] lg:text-[120px] font-bellefair mb-3 lg:mb-0">
          SPACE
        </h1>
        <p className="text-powderBlue text-lg md:text-2xl leading-7 md:leading-10 lg:text-lg font-barlow">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="lg:w-1/2 w-full lg:h-full lg:mt-auto flex justify-end flex-col gap-5 items-center text-center lg:text-left font-bellefair text-xl md:text-4xl lg:text-2xl lg:items-end">
        <Link
          href="/destination"
          className=" rounded-full flex items-center justify-center hover:bg-white/15 transition-all duration-300 ease-in-out bg-transparent md:w-[] md:h-[] lg:h-80 lg:w-80"
        >
          <p className="bg-white w-40 h-40 md:w-80 md:h-80 lg:w-48 lg:h-48 rounded-full flex items-center justify-center">
            EXPLORE
          </p>
        </Link>
      </div>
    </div>
  );
}

// h-full bg-red-500 flex flex-col lg:flex-row justify-center lg:justify-between items-end w-full lg:pb-20 text-center lg:text-left md:px-16 lg:px-0 gap-20 mt-10 flex-1 lg:ml-36 mr-5 md:mr-10 lg:mr-32 lg:pr-0
