import { useEffect } from "react";
import Results from "../../components/section-results";
import { BiArrowBack } from "react-icons/bi";
import { errorToast } from "../../utils/toast";

const ResultsPage = ({ setOpen, results, data, errors }) => {
  const { serie, schoolYear, students } = data;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (errors.length > 0 && errors.at(0) === "ERR_BAD_REQUEST") {
        setOpen(true);
        errorToast(
          "L'opération a échouée. Vérifiez que vous avez mis la bonne année scolaire."
        );
      }
      if (errors.length > 0 && errors.at(0) === "ERR_NETWORK") {
        setOpen(true);
        errorToast(
          "Problème de connexion internet. Vérifiez votre connexion puis réésayez."
        );
      }
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="min-h-[calc(100vh-65px)] sm:px-10 py-10 px-5">
      <p
        onClick={() => setOpen(true)}
        className="flex w-fit items-center gap-x-2 mb-5 hover:text-slate-500 cursor-pointer"
      >
        <BiArrowBack /> <span>Retour à la liste</span>
      </p>
      <h1 className="text-3xl font-bold mb-1">Terminale {serie}</h1>
      <span className="text-slate-400 mb-10 inline-block">
        Année Scolaire : {`${schoolYear - 1} - ${schoolYear}`}
      </span>
      <section className="">
        {results.length === students.length ? (
          <Results
            students={students}
            results={results}
            serie={serie}
            schoolYear={schoolYear}
          />
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
