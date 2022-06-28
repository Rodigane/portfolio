import Footer from "../../components/footer";
import Layout from "../../components/layout";
import Navbar from "../../components/navbar";
import "tw-elements";

const images = [
  {
    link: "/pouponcitation.png",
    alt: " Poupon citation page",
  },
  {
    link: "/pouponcontact.png",
    alt: " Contact page",
  },
  {
    link: "/pouponcontactmobile.png",
    alt: " Contact mobile page",
  },
  {
    link: "/pouponphotos.png",
    alt: " Poupon caroussel  page",
  },
  {
    link: "/pouponphoto.png",
    alt: " Poupon mansory  page",
  },
];

export default function poupon() {
  return (
    <Layout>
      <h3 className="text-7xl md:text-9xl text-center mt-10 ">
        <span className="gradient">Portfolio</span>
      </h3>
      <section className="text-white text-justify my-auto ">
        <div className=" flex justify-center  my-12">
          <button
            className="carousel-control-prev  top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0 "
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon inline-block bg-no-repeat"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <div
            id="carouselExampleControls"
            className="carousel slide w-1/2 relative flex justify-center "
            data-bs-ride="carousel"
          >
            <div className="carousel-inner relative  overflow-hidden">
              <div className="carousel-item active  relative ">
                <img
                  src="/flo.png"
                  className=" h-80 hidden lg:block"
                  alt="Portfolio Poupon home page"
                />
                <img
                  src="/pouponhomemobile.png"
                  className=" h-80  lg:hidden"
                  alt="Portfolio Poupon home page"
                />
              </div>
              {images.map((image) => (
                <div
                  className="carousel-item relative  w-full"
                  key={image.link}
                >
                  <img
                    src={image.link}
                    className=" h-80 object-scale-down shadow-cyan-500/50"
                    alt={image.alt}
                  />
                </div>
              ))}
            </div>
          </div>
          <button
            className="carousel-control-next  top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon inline-block bg-no-repeat"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className=" flex flex-col mt-10 px-5 mx-auto  w-full md:px-0 md:w-3/4 ">
          <h4 className="text-3xl text-left mb-4">Objectif</h4>
          <p>
            Florent is an actor and a traveler. He moved recently to Toronto,
            Canada. He needs a portfolio to showcase himself for casting and
            acting work. His website must be in English and French. He wants to
            display pictures, a resume, and texts about himself and his world
            vision. I try my best to help him achieve his goal and make the
            world know about him!
          </p>
        </div>
        <div className=" flex flex-col mt-10 px-5 mx-auto  w-full md:px-0 md:w-3/4 ">
          <h4 className="text-3xl text-left mb-4">Solution</h4>
          <p>
            I used WordPress with an Astra pro theme. To make the website
            multilanguage, I installed the plugin Polylang. Slate Admin Theme
            allows me to customize the dashboard and make it easier for a
            non-initiate to manage the website.
          </p>
        </div>
        <div className=" flex flex-col p-10 lg:w-3/4 ml-10">
          <p className="flex justify-around  ">
            <a href="http://flo.glenkorp.fr" target="_blank">
              <button className="text-indigo-500 px-8 py-4 font-bold  flex-1   space-x-3 border border-indigo-600  hover:animate-wiggle rounded-md shadow-cyan-500/50 ">
                link
              </button>
            </a>
          </p>
        </div>
      </section>
    </Layout>
  );
}
