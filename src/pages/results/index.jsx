import { useEffect, useState } from "react";
import Results from "../../components/section-results";
import { getDoc } from "firebase/firestore";
import { docRef } from "../../../firebase/config";
import { Link, useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import ResultsTable from "../../components/mui/table-results";
import BaseBackdrop from "../../components/mui/backdrop";

const ResultsPage = ({ isLoading, setOpen, results, data }) => {
  const { serie, schoolYear, students } = data;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-[calc(100vh-65px)] sm:px-10 py-10 px-5">
      <p
        onClick={() => setOpen(true)}
        className="flex items-center gap-x-2 mb-5 hover:text-slate-500 cursor-pointer"
      >
        <BiArrowBack /> <span>Retour à la liste</span>
      </p>
      <h1 className="text-3xl font-bold mb-1">Terminale {serie}</h1>
      <span className="text-slate-400 mb-10 inline-block">
        Année Scolaire : {`${schoolYear - 1} - ${schoolYear}`}
      </span>
      <section className="">
        {results.length === students.length ? (
          <Results students={students} results={results} />
        ) : (
          <div colSpan={5} className="animate-pulse py-20 text-center">
            <p>
              Chargement en cours . . .{" "}
              {Math.floor((results.length * 100) / students.length)} %
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

export default ResultsPage;
