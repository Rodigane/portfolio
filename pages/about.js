import Footer from "../components/footer";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import "tw-elements";
import DownloadResume from "../components/downloadResume";

export default function about() {
  return (
    <Layout>
      <h3 className="text-7xl md:text-9xl text-center mt-10  ">
        <span className="gradient">About me</span>
      </h3>

      <section className="container text-white text-justify my-auto mx-auto">
        <div className=" flex justify-center  my-12">
          <div className=" flex flex-col mt-10 px-5 mx-auto  w-full md:px-0 md:w-3/4">
            <p>
              Hi everyone, my name is Thibaut 34 years old. Father of Tom,
              9-month-old. Passionate about Music, Traveling, Nba, and new
              technologies. I started my developer journey about one year ago,
              taking online classes while raising my son. I focus my work around
              MERN/PERN stack. You can find some of my work{" "}
              <a href="http://localhost:3000/#works">
                <span className="underline underline-offset-3 italic">
                  here
                </span>
              </a>
              .
            </p>
            <br />
            <p>
              Typescript, solidity, and Cairo are on my short list of new things
              to learn.
            </p>
            <br />
            <p>
              I share my tech journey on{" "}
              <a href="https://twitter.com/Glenkurt_" target="_blank">
                <span className="text-blue-500 italic">Twitter</span>
              </a>
              , come and say hi ;)
            </p>

            <div className="flex flex-col md:flex-row justify-between mt-10">
              <DownloadResume />
              <img
                className="h-32 w-32 p-1  mt-10 md:mt-5 self-center rounded-full ring-2 ring-gray-300 dark:ring-indigo-500"
                src="/yakaillou.jpg"
                alt=" avatar"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
