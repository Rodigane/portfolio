import Contact from "../components/contact";
import Hero from "../components/hero";
import Layout from "../components/layout";
import Tech from "../components/tech";
import Works from "../components/works";

//
export default function Home() {
  return (
    <Layout>
      <Hero />
      <Works />
      <Tech />
      <Contact />
    </Layout>
  );
}
