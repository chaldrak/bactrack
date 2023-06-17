import React, { useState } from "react";
import BaseButton from "../../components/common/base-button";
import { BiPlusCircle } from "react-icons/bi";
import NewClassForm from "../../components/common/new-class-form";
import ResponsiveDialog from "../../components/mui/dialog";
import AlertDialogSlide from "../../components/mui/confirm-dialog";

const CreateClass = () => {
  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    schoolYear: new Date().getFullYear(),
    serie: "A1",
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
    const credentials = { ...formData, students: studentsPerSerie };

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
