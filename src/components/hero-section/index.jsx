import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import BaseButton from "../common/base-button";

const HeroSection = () => {
  return (
    <section className="w-full h-[calc(100vh_-_65px)]">
      <div className="w-full h-full mx-auto text-center max-w-3xl py-32">
        <h1 className="text-5xl tracking-tight font-bold">
          Obtenez vos résultats du{" "}
          <span className="text-sky-400">baccalauréat</span> en un clic!
        </h1>
        <p className="mt-6 text-slate-400">
          Bienvenue sur <span className="font-bold text-white">BACTrack</span>,
          le site web qui vous permet de consulter facilement et rapidement les
          résultats du baccalauréat{" "}
          <span className="font-black text-lg text-sky-400">béninois</span> en
          ligne. Vous êtes chef d'établissement, plus besoin de perdre du temps
          à chercher un à un les résultats de vos candidats. Avec BACTrack, vous
          pouvez obtenir vos résultats en un seul clic. Pour en savoir plus,{" "}
          <Link to="/guide" className="text-sky-400 hover:underline">
            consulter le guide &rarr;
          </Link>
          .
        </p>
        <div className="mt-10 flex items-center justify-center space-x-10">
          <BaseButton
            to="#recherche-rapide"
            title="Recherche rapide"
            variant="contain"
            tag="Link"
            border={true}
          />
          <BaseButton
            to=""
            tag="Link"
            title="Se connecter avec Google"
            iconLabel="GitHub"
            href="/"
            variant="outline"
            border={true}
          >
            <FcGoogle size={25} />
          </BaseButton>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
