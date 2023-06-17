import React from "react";
import BaseButton from "../../components/common/base-button";
import { FiUser } from "react-icons/fi";
import { BiPlusCircle } from "react-icons/bi";
import { Alert } from "@mui/material";
import BaseClassCard from "../../components/common/class-card";

const files = [
  {
    title: "TERMINALE A1",
    size: "17",
  },
  {
    title: "TERMINALE A2",
    size: "65",
  },
  {
    title: "TERMINALE B",
    size: "73",
  },
  {
    title: "TERMINALE C",
    size: "9",
  },
];

const Dashboard = () => {
  return (
    <div className="min-h-[calc(100vh-65px)] sm:px-10 py-10 px-5">
      <h1 className="text-3xl font-bold mb-1">Tableau de bord</h1>
      <span className="text-slate-400 mb-5 inline-block">
        Ici vous pouvez gérer vos candidats des différentes séries.
      </span>
      {/* <Alert className="my-5" variant="outlined" severity="info">
        This is a success alert — check it out!
      </Alert> */}
      <div className="mb-10 border-b border-slate-700 pb-10 sm:flex space-y-5 sm:space-y-0 items-center justify-between sm:space-x-10">
        <BaseButton
          to="/creer-une-classe"
          title="Créer une nouvelle classe"
          variant="contain"
          theme="white"
          tag="Link"
          border={true}
        >
          <BiPlusCircle size={25} />
        </BaseButton>
        <BaseButton
          to="/mon-profil"
          title="Mon profil"
          variant="outline"
          theme="gray"
          tag="Link"
          border={true}
        >
          <FiUser size={20} />
        </BaseButton>
      </div>
      <div>
        <h3 className="text-sm font-medium text-slate-400 mb-5">2022 - 2023</h3>
        <ul
          role="list"
          className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
        >
          {files.map((file) => (
            <BaseClassCard {...file} />
          ))}
        </ul>
      </div>
      <div className="mt-10">
        <h3 className="text-sm font-medium text-slate-400 mb-5">2021 - 2022</h3>
        <ul
          role="list"
          className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
        >
          {files.map((file) => (
            <BaseClassCard {...file} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
