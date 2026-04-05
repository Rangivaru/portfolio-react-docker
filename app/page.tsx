"use client"; // This is a client component 👈🏽
import { Header } from "./components/organisms/Hearder";
import { useRef, useState } from "react";
import { Sidebar } from "./components/organisms/Sidebar";
import { Presentation } from "./components/organisms/Presentation";
import Experiences from "./components/organisms/Experiences";
import Projects from "./components/organisms/Projects";

export default function Home() {
  const sectionRefs = [
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
  ];

  const [tab, setTab] = useState(0);

  const handleTabClick = (index: number) => {
    setTab(index);
    const sectionPosition = sectionRefs[index]?.current?.offsetTop ?? 0 - 64;
    window.scrollTo({ top: sectionPosition, behavior: "smooth" });
  };

  return (
    <main className="flex flex-col">
      <Header tab={tab} handleTabClick={handleTabClick} />
      <section className='w-full m-auto flex justify-center'>
        <div className="w-full max-w-[1216px] xl:px-0 px-4 flex flex-col md:flex-row gap-5">
          <Sidebar />
          <div className="flex flex-col min-w-0 w-full">
            <Presentation sectionRef={sectionRefs[0]} />
            <Experiences sectionRef={sectionRefs[1]} />
            <Projects sectionRef={sectionRefs[2]} />
          </div>
        </div>
      </section>
    </main>
  );
}
