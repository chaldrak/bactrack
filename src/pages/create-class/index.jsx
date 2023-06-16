import React, { useState } from "react";
import BaseButton from "../../components/common/base-button";
import { BiPlusCircle } from "react-icons/bi";
import NewClassForm from "../../components/common/new-class-form";

const CreateClass = () => {
  const [formData, setFormData] = useState({
    schoolYear: new Date().getFullYear(),
    serie: "A1",
  });

  const [students, setStudents] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const studentsPerSerie = students.filter(
      (item) => item["SER"] === formData.serie
    );

    const credentials = { ...formData, students: studentsPerSerie };

    console.log(credentials);
  };

  return (
    <div className="min-h-[calc(100vh-65px)] lg:p-10">
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
    </div>
  );
};

export default CreateClass;
