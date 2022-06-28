import Head from "next/head";
import Footer from "./footer";
import Navbar from "./navbar";
import dynamic from "next/dynamic";

export default function Layout({ children }) {
  const MouseTrick = dynamic(() => import("../components/mouse"), {
    ssr: false,
  });

  return (
    <>
      <Head>
        <title>My Portfolio</title>
      </Head>
      <main className="scroll-smooth">
        <Navbar />
        {children}
        <Footer />
        <MouseTrick />
      </main>
    </>
  );
}
