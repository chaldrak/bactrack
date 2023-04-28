import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

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
          <Link
            to="/"
            className="py-2 px-4 border border-slate-500 hover:bg-slate-800 rounded-md bg-slate-700 font-medium"
          >
            Recherche rapide
          </Link>
          <Link
            to="/"
            className="flex items-center space-x-2 font-medium rounded-md border py-2 px-4 border-sky-700 text-sky-400 hover:bg-sky-950"
          >
            <FcGoogle size={25} />
            <span>Se connecter avec Google</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
