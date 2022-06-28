import Glowingbutton from "./glowingbutton";
export default function Hero() {
  return (
    <container className="container mt-16 flex flex-wrap justify-around items-center mx-auto px-8 md:px-14 lg:px-24  lg:flex-nowrap">
      <div className="flex flex-wrap lg:ml-20 justify-center md:justify-start max-w-xl mt-10 md:my-36 text-white    ">
        <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl text-left ">
          Building
          <br /> <span className="gradient">beautifull</span> web <br />
          experiences.
        </h1>
        <Glowingbutton />
      </div>
      <div className=" mt-20 md:mt-0">
        <img
          className="  rounded-full h-64  ring-4 dark:ring-indigo-500 hover:animate-wiggle "
          src="/yakaillou.jpg"
          alt=" avatar"
        />
      </div>
    </container>
  );
}
