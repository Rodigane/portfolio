import Footer from "../../components/footer";
import Layout from "../../components/layout";
import Navbar from "../../components/navbar";
import "tw-elements";

const images = [
  {
    link: "/hypnoshoteldesktop.png",
    alt: " Hypnos home page",
  },
  {
    link: "/hypnoshotelmobile.png",
    alt: " Hypnos hotels mobile page",
  },
  {
    link: "/hypnoscontact.png",
    alt: " Hypnos contact  page",
  },
  {
    link: "/datepicker.png",
    alt: " Hypnos reservation  page",
  },
  {
    link: "/hypnospanel.png",
    alt: " Hypnos pannel  page",
  },
];
export default function hypnos() {
  return (
    <Layout>
      <h3 className="text-7xl md:text-9xl text-center mt-10 ">
        <span className="gradient">Hypnos</span>
      </h3>
      <section className="text-white text-justify my-auto">
        <div className=" flex justify-center  my-12 ">
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
                  src="/hypnos.png"
                  className=" h-80 hidden lg:block "
                  alt="crypto raccoon home page"
                />
                <img
                  src="/hypnoshomemobile.png"
                  className=" h-80  lg:hidden "
                  alt="crypto raccoon home page"
                />
              </div>
              {images.map((image) => (
                <div
                  className="carousel-item relative  w-full"
                  key={image.link}
                >
                  <img
                    src={image.link}
                    className=" h-80 object-scale-down"
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
            This project was built during my online training. It’s a website for
            a hotel group with a dashboard for employees. Customers can look at
            the hotels catalog, make reservations, fill out a contact form and
            access their client account.
          </p>
        </div>
        <div className=" flex flex-col mt-10 px-5 mx-auto  w-full md:px-0 md:w-3/4 ">
          <h4 className="text-3xl text-left mb-4">Solution</h4>
          <p>
            I use React JS, Redux Toolkit, Rtk Query, Node js, Express,
            PostgreSQL.
          </p>
        </div>
        <div className=" flex flex-col p-10 lg:w-3/4 ml-10">
          <p className="flex justify-around  ">
            <a href="http://glenkurt.online" target="_blank">
              <button className="text-indigo-500 px-8 py-4 font-bold  flex-1   space-x-3 border border-indigo-600  hover:animate-wiggle rounded-md shadow-cyan-500/50 ">
                link
              </button>
            </a>
            <a href="https://github.com/Rodigane/ECF" target="_blank">
              <img src="/logo/icons8-github.svg" />
            </a>
          </p>
        </div>
      </section>
    </Layout>
  );
}
