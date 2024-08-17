import Link from "next/link";

export default function Home() {
  return (
    <div className="h-full flex flex-col lg:flex-row justify-center lg:justify-between items-end w-full lg:pb-20 text-center lg:text-left md:px-16 lg:px-0 gap-20">
      <div className="lg:w-1/2 w-full  lg:h-full lg:mt-auto flex justify-end flex-col gap-5">
      <p className="font-barlow-condensed text-powderBlue text-2xl md:text-4xl tracking-wider mb-3 lg:mb-0">SO, YOU WANT TO TRAVEL TO</p>
        <h1 className="text-white text-8xl md:text-[180px] lg:text-[150px] font-bellefair mb-3 lg:mb-0">SPACE</h1>
        <p className="text-powderBlue text-lg md:text-2xl leading-7 md:leading-10 lg:text-lg font-barlow">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="lg:w-1/2 w-full lg:h-full flex lg:items-end justify-center items-center font-bellefair text-xl md:text-4xl lg:text-lg">
        <Link
          href="/destination"
          className=" rounded-full flex items-center justify-center hover:bg-white/15 transition-all duration-300 ease-in-out bg-transparent md:w-[] md:h-[] lg:h-80 lg:w-80"
        >
          <p className="bg-white w-40 h-40 md:w-80 md:h-80 lg:w-40 lg:h-40 rounded-full flex items-center justify-center">EXPLORE</p>
        </Link>
      </div>
    </div>
  );
}
