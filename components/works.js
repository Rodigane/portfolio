import Link from "next/link";

const website = [
  {
    image: "/hypnos.png",
    link: "/works/hypnos",
    externalLink: "https://glenkurt.online",
    name: "hypnos",
  },
  {
    image: "/flo.png",
    link: "/works/poupon",
    externalLink: "http://flo.glenkorp.fr",
    name: "Crypto Raccoon",
  },
  {
    image: "/raccoon.png",
    link: "/works/cryptoraccoon",
    externalLink: "http://raccoon.glenkurt.online",
    name: "Florent Poupon",
  },
];

export default function Works() {
  return (
    <container className="container mt-52 md:mt-64 mx-auto text-white  flex justify-between items-center    lg:px-24 w-full  ">
      <section className="w-full" id="works">
        <h2 className=" text-5xl md:text-6xl mx-8">My work</h2>
        <p className="mx-8 mt-6">
          These are some projects I've been working on.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 mx-6   ">
          {website.map((site) => (
            <div
              key={site.name}
              className="my-10 relative flex flex-col items-center "
            >
              <Link href={site.link}>
                <img
                  src={site.image}
                  className="  lg:w-full lg:px-5    lg:h-72 object-contain lg:border lg:rounded-md  border-indigo-400 hover:scale-110  transition-transform"
                />
              </Link>
              <div className="flex items-center mt-5  ">
                <Link href={site.link}>
                  <button className="text-white px-8 py-4 font-bold  mr-3 flex-1 leading-none   space-x-3 bg-indigo-600 hover:bg-indigo-700  rounded-md ">
                    <span>See more</span>
                  </button>
                </Link>
                <a href={site.externalLink} target="_blank">
                  <button className="text-indigo-500 px-8 py-4 font-bold  flex-1 leading-none   space-x-3 border border-indigo-600  hover:animate-wiggle rounded-md ">
                    link
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </container>
  );
}
