/* eslint-disable @next/next/no-img-element */
import { sidebarData } from "@/app/data/sidebar";
import { EntrepriseIcon, SchoolIcon } from "../../atoms/icons/Experiences";
import { InfoSection } from "./_components";

export function Sidebar() {
  return (
    <div className="md:min-w-[289px] md:w-[289px] md:max-w-[289px] flex flex-col">

      {/* Photo + Nom : côte à côte sur mobile, empilés sur desktop */}
      <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-0">
        <img
          src="/profile.png"
          alt="Profile Picture"
          className="w-[72px] h-[72px] md:w-full md:h-[340px] shrink-0 border border-gray-border bg-black rounded-full md:rounded-[45%] object-cover object-top"
        />
        <div className="py-0 md:py-3">
          <h1 className="text-xl md:text-2xl font-semibold">{sidebarData.name}</h1>
          <h2 className="text-base md:text-xl text-gray-light">{sidebarData.job}</h2>
        </div>
      </div>

      {/* Email */}
      <a
        href="mailto:rangivaru.salem@gmail.com"
        className="w-full rounded-md py-2 font-medium text-sm bg-orange text-center hover:bg-orange-light mt-4"
      >
        rangivaru.salem@gmail.com
      </a>

      {/* Infos */}
      <div className="mt-4 flex flex-col gap-1">
        <p className="text-sm text-gray-light">
          {sidebarData.age} · {sidebarData.location}
        </p>
        <div className="flex items-center gap-1 mt-1">
          <EntrepriseIcon />
          <p className="text-sm">{sidebarData.enterprise}</p>
        </div>
        <div className="flex items-center gap-1 mt-1">
          <SchoolIcon />
          <p className="text-sm">{sidebarData.school}</p>
        </div>
      </div>

      {/* Liens utiles */}
      <InfoSection title="Liens utiles" className="mb-8">
        <div className="flex items-center gap-5">
          {sidebarData.links.map((link, index) => (
            <a href={link.href} target="_blank" key={index}>
              {link.icon}
            </a>
          ))}
          <a href="/cv" target="_blank" title="Voir mon CV">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" className="group">
              <circle cx="20" cy="20" r="20" fill="currentColor" className="group-hover:fill-[#F8937C]" />
              <text x="20" y="25" textAnchor="middle" fill="#0e1117" fontSize="13" fontWeight="700" fontFamily="sans-serif">CV</text>
            </svg>
          </a>
        </div>
      </InfoSection>
    </div>
  );
}
