import { Navbar, Footer } from "@/exports/ui";
import { Hero, About, Experience, Projects } from "@/exports/sections";

export default function Home() {
  return (
    <div className="h-screen w-full text-white">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}
