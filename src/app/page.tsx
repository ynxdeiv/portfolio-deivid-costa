"use client";
import Header from "./_components/header";
import Hero from "./_components/hero";
import About from "./_components/about";
import Projects from "./_components/projects";
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <section id="sobre">
        <About />
      </section>
      <section id="projetos">
        <Projects />
      </section>
    </>
  );
}
