import React from "react";
import BaseButton from "../../components/common/base-button";
import { BiPlusCircle } from "react-icons/bi";
import NewClassForm from "../../components/common/new-class-form";

const CreateClass = () => {
  return (
    <div className="min-h-[calc(100vh-65px)] lg:p-10">
      <h1 className="text-3xl font-bold mb-1">Créer une nouvelle classe</h1>
      <span className="text-slate-400 mb-10 inline-block">
        Remplissez le formulaire ci-dessous pour ajouter vos candidats.
      </span>

      <NewClassForm />
    </div>
  );
};

export default CreateClass;
