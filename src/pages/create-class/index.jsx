import React, { useState } from "react";
import BaseButton from "../../components/common/base-button";
import { BiPlusCircle } from "react-icons/bi";
import NewClassForm from "../../components/common/new-class-form";
import ResponsiveDialog from "../../components/mui/dialog";
import AlertDialogSlide from "../../components/mui/confirm-dialog";
import useAuth from "../../hooks/authentication";
import { schoolYears, series } from "../../constants";
import { addDoc } from "firebase/firestore";
import { colRef } from "../../../firebase/config";
import { useNavigate } from "react-router-dom";
import BaseBackdrop from "../../components/mui/backdrop";
import { errorToast, successToast } from "../../utils/toast";

const CreateClass = () => {
  const user = useAuth();
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    schoolYear: `${schoolYears[0]}`,
    serie: series[0],
  });

  const [students, setStudents] = useState([]);
  const [studentsPerSerie, setStudentsPerSerie] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const studentPerSerie = students.filter(
      (item) => item["SER"] === formData.serie
    );

    setStudentsPerSerie(studentPerSerie);

    setOpen(true);
  };

  const saveClass = () => {
    setIsLoading(true);
    const credentials = {
      ...formData,
      students: studentsPerSerie,
      user_id: user.uid,
    };
    addDoc(colRef, credentials)
      .then(() => {
        navigate("/tableau-de-bord", { replace: true });
        setStudents([]);
        setStudentsPerSerie([]);
        successToast("La classe a été créée avec succès.");
      })
      .catch((error) => {
        console.log(error);
        errorToast(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
    console.log(credentials);
  };

  return (
    <div className="min-h-[calc(100vh-65px)] sm:px-10 px-5 py-10">
      <h1 className="text-3xl font-bold mb-1">Créer une nouvelle classe</h1>
      <span className="text-slate-400 mb-10 inline-block">
        Remplissez le formulaire ci-dessous pour ajouter vos candidats.
      </span>

      <NewClassForm
        classData={formData}
        onChange={handleChange}
        data={[students, setStudents]}
        onSubmit={handleSubmit}
      />

      <BaseBackdrop isLoading={isLoading} />
      <AlertDialogSlide open={open} setOpen={setOpen} onClick={saveClass}>
        <span className="text-white [&_strong]:text-sky-400">
          Le fichier chargé contient <strong>{studentsPerSerie.length}</strong>{" "}
          candidats de la série <strong>{formData.serie}</strong>. <br />{" "}
          Cliquez sur <span className="font-bold">CONTINUER</span> pour
          enregistrer.
        </span>
      </AlertDialogSlide>
    </div>
  );
};

export default CreateClass;
