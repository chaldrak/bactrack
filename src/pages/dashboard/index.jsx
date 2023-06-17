import React, { useEffect, useState } from "react";
import BaseButton from "../../components/common/base-button";
import { FiUser } from "react-icons/fi";
import { BiPlusCircle } from "react-icons/bi";
import { Alert } from "@mui/material";
import BaseClassCard from "../../components/common/class-card";
import { getDocs, query, where } from "firebase/firestore";
import { colRef } from "../../../firebase/config";
import { schoolYears } from "../../constants";
import useAuth from "../../hooks/authentication";

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
  const user = useAuth();
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const q = query(colRef, where("user_id", "==", user.uid));
    const fetchData = () => {
      getDocs(q)
        .then((snapshot) => {
          let data = [];
          snapshot.docs.forEach((doc) => {
            data.push({ ...doc.data(), id: doc.id });
          });
          setClasses(data);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {});
    };
    fetchData();
  }, []);
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
      {schoolYears.map((item) => (
        <div className="mt-10" key={item}>
          <h3 className="text-sm font-medium text-slate-400 mb-5">
            {`${item - 1} - ${item}`}
          </h3>
          <ul
            role="list"
            className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
          >
            {classes
              .filter((c) => c.schoolYear === String(item))
              .map((file) => (
                <BaseClassCard key={file.id} {...file} />
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
