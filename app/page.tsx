"use client"; // This is a client component 👈🏽
import { Header } from "./components/organisms/Hearder";
import { useRef, useState } from "react";

export default function Home() {

  const sectionRefs = [
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
];

  const [tab, setTab] = useState(0)

  const handleTabClick = (index: number) => {
    setTab(index);
    const sectionPosition = sectionRefs[index]?.current?.offsetTop ?? 0 - 64;
    window.scrollTo({ top: sectionPosition, behavior: 'smooth' });
  };
  
  return (
    <main className='flex flex-col'>
      <Header tab={tab} handleTabClick={handleTabClick} />
    </main>
  );
}
