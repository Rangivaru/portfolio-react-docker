import { tabs } from "@/app/data/tabs";
import Image from "next/image";
import { useState } from "react";

interface Props {
  handleTabClick: (index: number) => void;
  tab: number;
}

export function Header({ handleTabClick, tab }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="mb-8 w-full  bg-black">
      <div className="flex items-center px-4 justify-between w-full">
        <div className="w-full h-[56px] pt-4 sm:pb-2 pb-4 flex items-center gap-2">
          <Image
            width={32}
            height={32}
            className="rounded-full bg-black border border-gray-border"
            src="/logo.png"
            alt="logo-jérémie-barrière"
          />
          <h1 className="font-medium">Rangivaru Salem</h1>
        </div>
        {/* <SunIcon /> */}
        <div className="relative sm:hidden">
          <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24">
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 17h14M5 12h14M5 7h14"
              />
            </svg>
          </div>
          {isOpen && (
            <div className="rounded-md absolute  p-6 bg-black shadow-[0_0_25px_2px_rgba(255,255,255,0.1)] right-0">
              <ul className="h-full flex flex-col gap-5">
                {tabs.map((item, index) => (
                  <li key={index} className={`h-full group`}>
                    <button
                      onClick={() => handleTabClick(index)}
                      className={`h-full relative flex items-center text-sm ${
                        tab === index && "font-semibold"
                      }`}>
                      {tab === index && (
                        <span className="w-full h-0.5 bg-orange  absolute -bottom-2 rounded-md "></span>
                      )}
                      <span className="text-white py-1 px-2 group-hover:bg-gray rounded-md flex items-center gap-2">
                        {item.icon}
                        {item.title}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="w-full h-12 sm:block hidden">
        <ul className="h-full pl-4 flex gap-2">
          {tabs.map((item, index) => (
            <li key={index} className={`h-full group relative`}>
              {tab === index && (
                <span className="w-full h-0.5 bg-orange absolute bottom-0 rounded-md "></span>
              )}
              <button
                onClick={() => handleTabClick(index)}
                className={`h-full flex items-center text-sm ${
                  tab === index && "font-semibold"
                }`}>
                <span className="text-white py-1 px-2 group-hover:bg-gray rounded-md flex items-center gap-2">
                  {item.icon}
                  {item.title}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
