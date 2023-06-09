import React, { useEffect, useState } from "react";
import BaseButton from "../../components/common/base-button";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Alert } from "@mui/material";
import {
  deleteDoc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { colRef, docRef } from "../../../firebase/config";
import { Link, useNavigate, useParams } from "react-router-dom";
import DataTable from "../../components/mui/table-students";
import { BiArrowBack, BiEdit } from "react-icons/bi";
import Pagination from "../../components/common/pagination";
import ResultsPage from "../results";
import createAxiosInstance from "../../services/axios-instance";
import { errorToast, successToast, infoToast } from "../../utils/toast";
import ResponsiveDialog from "../../components/mui/dialog";
import EditClassDialog from "../../components/mui/edit-class-dialog";
import { schoolYears } from "../../constants";
import useAuth from "../../hooks/authentication";
import DeleteClassDialog from "../../components/mui/delete-class-dialog";

const DetailsClass = () => {
  const user = useAuth();
  const [classData, setClassData] = useState({ students: [] });
  const { id } = useParams();
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const [editSchoolYear, setEditSchoolYear] = useState(`${schoolYears[0]}`);

  const [results, setResults] = useState([]);
  const [classes, setClasses] = useState([]);
  const [errors, setErrors] = useState([]);
  const { schoolYear, students } = classData;
  const [isLoading, setIsLoading] = useState(false);

  const axios = createAxiosInstance(schoolYear);

  const [itemPerPage, setItemPerPage] = useState(40);
  const [currentPage, setCurrentPage] = useState(1);

  const lastItemIndex = currentPage * itemPerPage;
  const firstItemIndex = lastItemIndex - itemPerPage + 1;

  const deleteClass = async () => {
    await deleteDoc(docRef(id))
      .then(() => {
        navigate("/tableau-de-bord", { replace: true });
        infoToast("Classe supprimée avec succès.");
      })
      .catch((error) => console.log(error));
  };

  const handleEdit = () => {
    if (classAlreadyExists()) {
      setIsLoading(false);
      return errorToast(
        "Cette classe existe déjà pour l'année scolaire choisie."
      );
    }

    updateDoc(docRef(id), { schoolYear: editSchoolYear })
      .then(() => {
        setOpenEditModal(false);
        successToast("Cette classe a été mise à jour avec succès.");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleResults = () => {
    setIsLoading(true);
    setOpen(false);
    getResults();
  };

  useEffect(() => {
    const fetchData = () => {
      onSnapshot(docRef(id), (doc) => {
        setClassData(doc.data());
      });
    };
    fetchData();
  }, []);

  const getResults = async () => {
    if (!axios) {
      errorToast(
        "Les résultats que vous désirez ne sont pas encore disponibles. Merci de réessayer plus tard."
      );
      setOpen(true);
      return;
    }
    setResults([]);
    let errorsData = [];
    setIsLoading(true);
    try {
      students.forEach(async (person) => {
        const response = await fetchResult(person["N°Tab"]);
        errorsData.push(response);
      });
      setErrors(errorsData);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchResult = async (tableNumber) => {
    try {
      const response = await axios.get(tableNumber);
      setResults((prev) => [...prev, response.data]);
      return response.data;
    } catch (error) {
      return error.code;
    }
  };

  const classAlreadyExists = () => {
    const data = classes.filter(
      (c) => c.schoolYear == editSchoolYear && c.serie == classData.serie
    );
    return data.length > 0;
  };

  useEffect(() => {
    const q = query(colRef, where("user_id", "==", user.uid));
    const fetchData = () => {
      onSnapshot(q, (snapshot) => {
        let data = [];
        snapshot.docs.forEach((doc) => {
          data.push({ ...doc.data(), id: doc.id });
        });
        setClasses(data);
      });
    };
    fetchData();
  }, []);

  if (!open)
    return (
      <ResultsPage
        data={classData}
        results={results}
        isLoading={isLoading}
        setOpen={setOpen}
        errors={errors}
      />
    );
  return (
    <div className="min-h-[calc(100vh-65px)] sm:px-10 py-10 px-5">
      <Link
        to="/tableau-de-bord"
        className="flex w-fit items-center gap-x-2 mb-5 hover:text-slate-500"
      >
        <BiArrowBack /> <span>Retour</span>
      </Link>
      <h1 className="text-3xl font-bold mb-1">Terminale {classData?.serie}</h1>
      <span className="text-slate-400 mb-10 inline-block">
        Année Scolaire :{" "}
        {`${classData?.schoolYear - 1} - ${classData?.schoolYear}`}
      </span>
      <Alert className="mb-10" variant="filled" severity="info">
        Sur cette page vous avez la liste des candidats. Cliquez sur le bouton{" "}
        <span className="text-slate-900 font-bold">Résultats</span> pour
        rechercher les résultats de cette classe.
      </Alert>
      <div className="mb-10 border-b border-slate-700 pb-10 sm:flex space-y-5 sm:space-y-0 items-center justify-end sm:space-x-10">
        <BaseButton
          to="#"
          title="Modifier"
          variant="outline"
          theme="gray"
          tag="Link"
          border={true}
          onClick={() => setOpenEditModal(true)}
        >
          <BiEdit size={20} />
        </BaseButton>
        <BaseButton
          to="#"
          title="Supprimer"
          variant="contain"
          theme="red"
          tag="Link"
          border={true}
          onClick={() => setOpenDeleteModal(true)}
        >
          <RiDeleteBin5Line size={20} />
        </BaseButton>
      </div>

      <div className="mb-10">
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

      {/* Results button */}
      <button
        onClick={handleResults}
        className="fixed right-5 md:right-10 bottom-10 md:bottom-[75px] bg-sky-600 px-4 py-2 rounded-full hover:bg-sky-800"
      >
        Résultats
      </button>

      <EditClassDialog
        open={openEditModal}
        setOpen={setOpenEditModal}
        value={editSchoolYear}
        onChange={(e) => setEditSchoolYear(e.target.value)}
        classData={classData}
        onSubmit={handleEdit}
      />
      <DeleteClassDialog
        open={openDeleteModal}
        setOpen={setOpenDeleteModal}
        onClick={deleteClass}
        classData={classData}
      />
    </div>
  );
};

export default DetailsClass;
