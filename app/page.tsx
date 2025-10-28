import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import Project from "@/components/sections/Projects";


export default function Home() {
  return (
    <main className="overflow-hidden">
    <Hero />
    <About />
    <Project />
    
  </main>
  );
}
