import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import FeaturedProjects from "./components/FeaturedProjects/FeaturedProjects";
import Pricing from "./components/Pricing/Pricing";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";


export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <FeaturedProjects />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

