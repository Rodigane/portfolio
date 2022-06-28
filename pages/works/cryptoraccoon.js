import Footer from "../../components/footer";
import Layout from "../../components/layout";
import Navbar from "../../components/navbar";
import "tw-elements";

const images = [
  {
    link: "/raccoonmobilehome.png",
    alt: " crypto raccoon sign in page for mobile",
  },
  {
    link: "/raccoonmobilesignin.png",
    alt: " crypto raccoon sign in page for mobile",
  },
  {
    link: "/raccoonportfolio.png",
    alt: " crypto form and doughnut chart",
  },
  {
    link: "/raccoonmobileform.png",
    alt: "crypto form and doughnut chart for mobile",
  },
];

export default function Raccoon() {
  return (
    <Layout>
      <h3 className="text-7xl md:text-9xl text-center mt-10 ">
        <span className="gradient"> Crypto Raccoon</span>
      </h3>
      <section className="text-white text-justify my-auto">
        <div className=" flex justify-center  my-12">
          <div
            id="carouselExampleControls"
            className="carousel slide relative"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner relative w-full overflow-hidden">
              <div className="carousel-item active relative float-left w-full">
                <img
                  src="/raccoon.png"
                  className=" h-80 block object-scale-down "
                  alt="crypto raccoon home page"
                />
              </div>
              {images.map((image) => (
                <div
                  className="carousel-item relative float-left  w-full"
                  key={image.link}
                >
                  <img
                    src={image.link}
                    className="h-80 block object-scale-down "
                    alt={image.alt}
                  />
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
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
            <button
              className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
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
        </div>
        <div className=" flex flex-col mt-10 px-5 mx-auto  w-full md:px-0 md:w-3/4 ">
          <h4 className="text-3xl text-left mb-4">Objectif</h4>
          <p>
            CryptoRaccoon is a website to keep track of your Cryptocurrencies.
            Once you're connected, you can fill out a form with three fields.
            The name of the Crypto, How many you've got, and where it's stock.
            For each of your lines, you can see the logo, the current price, and
            the worth of the crypto. At the bottom of the array is the global
            value of your wallet. You can see the repartition of your assets,
            displayed as a doughnut chart. The website is still in beta. You can
            access it at the link below.
          </p>
        </div>
        <div className=" flex flex-col mt-10 px-5 mx-auto  w-full md:px-0 md:w-3/4 ">
          <h4 className="text-3xl text-left mb-4">Solution</h4>
          <p>
            I built this project with the <i>MERN stack</i>, as well as Firebase
            for authentication and Realtime database. I use
            <i>Tailwindcss</i> as CSS framework.
          </p>
        </div>
        <div className=" flex flex-col p-10 lg:w-3/4 ml-10">
          <p className="flex justify-around  ">
            <a href="http://raccoon.glenkurt.online" target="_blank">
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
