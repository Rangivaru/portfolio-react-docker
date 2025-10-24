/* eslint-disable @next/next/no-img-element */
import { sidebarData } from "@/app/data/sidebar";
import { EntrepriseIcon, SchoolIcon } from "../../atoms/icons/Experiences";
import { InfoSection } from "./_components";

export function Sidebar() {
  return (
    <div className="md:min-w-[289px] md:w-[289px] md:max-w-[289px]  flex flex-col ">
      <div className="flex md:flex-col items-center md:items-start md:gap-0 gap-6 md:mb-0 mb-4 ">
        <img
          src="/logo.png"
          alt={"Profile Picture"}
          className="w-full max-w-[120px] md:max-w-full md:w-full border border-gray-border aspect-square bg-black rounded-full"
        />
        <div className="py-3">
          <h1 className="text-2xl font-semibold">{sidebarData.name}</h1>
          <h2 className="text-xl text-gray-light">{sidebarData.job}</h2>
        </div>
        <a
          href="mailto:rangivaru.salem@gmail.com"
          className="w-full rounded-md py-2 font-medium text-sm bg-orange text-center hover:bg-orange-light">
          rangivaru.salem@gmail.com
        </a>
        <div className="my-4">
          <p className="text-sm">
            {" "}
            {sidebarData.age} · {sidebarData.location}
          </p>
        </div>
        <div className="flex items-center gap-1">
          <EntrepriseIcon />
          <p className="text-sm">{sidebarData.enterprise}</p>
        </div>
        <div className="flex items-center gap-1 pt-1">
          <SchoolIcon />
          <p className="text-sm">{sidebarData.school}</p>
        </div>
        <InfoSection title="Liens utiles" className="mb-8">
          <div className="flex items-center gap-5">
            {sidebarData.links.map((link, index) => (
              <a href={link.href} target="_blank" key={index}>
                {link.icon}
              </a>
            ))}
          </div>
        </InfoSection>
      </div>
    </div>
  );
}
