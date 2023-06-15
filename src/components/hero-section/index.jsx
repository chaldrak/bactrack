import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { CgSpinner } from "react-icons/cg";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import BaseButton from "../common/base-button";
import { signInWithPopup } from "firebase/auth";
import { auth as aunthenticate, provider } from "../../../firebase/config";
import useAuth from "../../hooks/authentication";
import { errorToast, successToast } from "../../utils/toast";

const HeroSection = () => {
  const user = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const loginWithGoogle = () => {
    setIsLoading(true);
    signInWithPopup(aunthenticate, provider)
      .then((result) => {
        const user = result.user;
        console.log(result.user);
        // setAuth(user);
        successToast("Bienvenue sur BACTrack 👋 !!!");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        errorToast(errorMessage);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <section className="w-full lg:h-[calc(100vh_-_65px)]">
      <div className="w-full h-full mx-auto px-5 sm:px-10 lg:px-0 lg:max-w-3xl py-12 sm:py-32">
        <h1 className="text-3xl sm:text-5xl tracking-tight font-bold text-center">
          Obtenez vos résultats du{" "}
          <span className="text-sky-400">baccalauréat</span> en un clic!
        </h1>
        <p className="mt-6 text-slate-400 sm:text-center text-justify">
          Bienvenue sur <span className="font-bold text-white">BACTrack</span>,
          le site web qui vous permet de consulter facilement et rapidement les
          résultats du baccalauréat{" "}
          <span className="font-black text-lg text-sky-400">béninois</span> en
          ligne. Vous êtes chef d'établissement, plus besoin de perdre du temps
          à chercher un à un les résultats de vos candidats. Avec BACTrack, vous
          pouvez obtenir vos résultats en un seul clic. Pour en savoir plus,{" "}
          <Link
            to="/guide"
            className="text-sky-400 hover:underline whitespace-nowrap"
          >
            consulter le guide &rarr;
          </Link>
          .
        </p>
        <div className="mt-10 sm:flex space-y-5 sm:space-y-0 items-center justify-center sm:space-x-10">
          <BaseButton
            to="#recherche-rapide"
            title="Recherche rapide"
            variant="contain"
            tag="Link"
            border={true}
          />
          {!user ? (
            <BaseButton
              tag="google"
              title="Se connecter avec Google"
              iconLabel="Google"
              variant="outline"
              theme="blue"
              border={true}
              onClick={loginWithGoogle}
              disabled={isLoading}
            >
              {isLoading ? (
                <CgSpinner className="animate-spin" size={25} />
              ) : (
                <FcGoogle size={25} />
              )}
            </BaseButton>
          ) : (
            <BaseButton
              to="/tableau-de-bord"
              title="Votre tableau de bord"
              variant="outline"
              theme="blue"
              tag="Link"
              border={true}
            >
              <MdOutlineDashboardCustomize size={25} />
            </BaseButton>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
