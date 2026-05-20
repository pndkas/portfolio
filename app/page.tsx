import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Project from "./components/Project";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";

export default function Home() {
  return (
    <>
      <Cursor />
      <Navbar />

      <main className="flex flex-col items-center w-full overflow-hidden">
        <Hero />
        <Project />
        <About />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
