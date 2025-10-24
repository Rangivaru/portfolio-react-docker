import Separator from "../atoms/Separator";
import Stack from "./Stack";

interface PresentationProps {
  sectionRef: any;
}
export function Presentation({ sectionRef }: PresentationProps) {
  return (
    <div
      ref={sectionRef[0]}
      id="presentation"
      className="w-full border p-6 border-gray-border rounded-md">
      <p className="text-sm">
        Rangivaru Salem <span className="text-gray-light">/</span> portfolio
        <span className="text-gray-light">.md</span>
      </p>
      <p className="text-4xl mt-4 uppercase font-semibold">
        Bienvenue sur <span className="text-orange">mon portfolio</span>
      </p>
      <Separator />
      <p className="mt-4 mb-16 sm:text-base text-sm ">
        blabla presentation blabla presentation blabla presentation blabla
      </p>
      <Stack />
    </div>
  );
}
