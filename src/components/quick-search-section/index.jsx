import React from "react";
import QuickSearchForm from "../quick-search-form";

const QuickSearchSection = () => {
  return (
    <section
      id="recherche-rapide"
      className="w-full h-fit sm:h-[60vh] border-t border-slate-700 px-5 sm:px-10 grid sm:grid-cols-2 gap-10 py-10"
    >
      <div className="">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Recherche <span className="font-bold text-sky-400">rapide</span> de
          résultats du baccalauréat
        </h2>
        <p className="text-justify text-slate-400">
          Bienvenue sur notre section de recherche rapide de résultats du
          baccalauréat. Vous pouvez obtenir vos résultats du baccalauréat en
          temps réel en renseignant la{" "}
          <span className="text-white font-bold">session</span> et votre{" "}
          <span className="text-white font-bold">numéro de table</span>.
        </p>
      </div>
      <QuickSearchForm />
    </section>
  );
};

export default QuickSearchSection;
