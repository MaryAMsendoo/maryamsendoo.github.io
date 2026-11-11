import About from "@/components/About";
import Cta from "@/components/Cta";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
        <Hero />
      </header>

      <main>
        <Projects />
        <Experience />
        <Skills />
        <About />
        <Cta />
        <Footer />
      </main>
    </>
  );
}
