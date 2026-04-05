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
        Développeur Full-Stack passionné basé à Bordeaux, j'évolue dans le monde du développement depuis plus de 10 ans.
        Actuellement <strong>Lead Développeur chez Cdiscount</strong>, je conçois et pilote des solutions techniques à fort impact,
        de l'architecture back-end à l'expérience utilisateur.
        <br /><br />
        Mon parcours, jalonné d'expériences en alternance et de formations en informatique, m'a permis de développer une expertise
        solide sur des environnements complexes et des stacks modernes. J'aime relever des défis techniques, travailler en équipe
        et contribuer à des projets ambitieux.
      </p>
      <Stack />
    </div>
  );
}
