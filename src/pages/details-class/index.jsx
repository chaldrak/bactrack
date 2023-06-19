import React, { useEffect, useState } from "react";
import BaseButton from "../../components/common/base-button";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Alert } from "@mui/material";
import { getDoc } from "firebase/firestore";
import { docRef } from "../../../firebase/config";
import useAuth from "../../hooks/authentication";
import { Link, useParams } from "react-router-dom";
import StickyHeadTable from "../../components/mui/table-students";
import DataTable from "../../components/mui/table-students";
import { BiArrowBack, BiEdit } from "react-icons/bi";
import Pagination from "../../components/common/pagination";
import { default_current_page } from "../../constants";

const DetailsClass = () => {
  const user = useAuth();
  const [classData, setClassData] = useState({ students: [] });
  const { id } = useParams();

  const [itemPerPage, setItemPerPage] = useState(40);
  const [currentPage, setCurrentPage] = useState(1);

  const lastItemIndex = currentPage * itemPerPage;
  const firstItemIndex = lastItemIndex - itemPerPage + 1;

  useEffect(() => {
    const fetchData = () => {
      getDoc(docRef(id))
        .then((doc) => {
          setClassData(doc.data());
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
      <Link
        to="/tableau-de-bord"
        className="flex items-center gap-x-2 mb-5 hover:text-slate-500"
      >
        <BiArrowBack /> <span>Retour</span>
      </Link>
      <h1 className="text-3xl font-bold mb-1">Terminale {classData?.serie}</h1>
      <span className="text-slate-400 mb-5 inline-block">
        Année Scolaire :{" "}
        {`${classData?.schoolYear - 1} - ${classData?.schoolYear}`}
      </span>
      <Alert className="mb-10" variant="outlined" severity="info">
        Sur cette page vous avez la liste des candidats. Cliquez{" "}
        <a href="" className="text-slate-500 font-bold hover:text-white">
          ICI
        </a>{" "}
        pour atteindre la section{" "}
        <span className="font-bold text-slate-500">résultat</span>
      </Alert>
      <div className="mb-10 border-b border-slate-700 pb-10 sm:flex space-y-5 sm:space-y-0 items-center justify-end sm:space-x-10">
        <BaseButton
          to="/mon-profil"
          title="Modifier"
          variant="outline"
          theme="gray"
          tag="Link"
          border={true}
        >
          <BiEdit size={20} />
        </BaseButton>
        <BaseButton
          to="/mon-profil"
          title="Supprimer"
          variant="contain"
          theme="red"
          tag="Link"
          border={true}
        >
          <RiDeleteBin5Line size={20} />
        </BaseButton>
      </div>

      <div className="mb-10 border-b border-slate-700 pb-10">
        {classData.students && (
          <Pagination
            itemPerPage={itemPerPage}
            totalItems={classData.students?.length}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
        <DataTable
          students={classData.students?.slice(
            firstItemIndex - 1,
            lastItemIndex
          )}
        />
      </div>
    </div>
  );
};

export default DetailsClass;
