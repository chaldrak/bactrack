import { useState } from "react";
import useAuth from "../../hooks/authentication";
import createAxiosInstance from "../../services/axios-instance";
import BaseBackdrop from "../mui/backdrop";
import ResultsTable from "../mui/table-results";

const Results = ({ data }) => {
  const user = useAuth();
  const [results, setResults] = useState([]);
  const { serie, schoolYear, students } = data;
  const [isLoading, setIsLoading] = useState(false);

  const axios = createAxiosInstance(schoolYear);

  const getResults = async () => {
    setResults([]);
    await students.forEach((person) => {
      fetchResult(person["N°Tab"]);
    });
  };

  const fetchResult = async (tableNumber) => {
    setIsLoading(true);
    try {
      const response = await axios.get(tableNumber);
      setResults((prev) => [...prev, response.data]);
      return response.data;
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="">
      <button
        onClick={getResults}
        className="fixed right-5 md:right-10 bottom-10 md:bottom-[75px] bg-sky-600 px-4 py-2 rounded-full hover:bg-sky-800"
      >
        Résultats
      </button>
      <h2 className="text-3xl font-bold mb-5">Résultats</h2>
      <ResultsTable
        students={students}
        results={results?.sort((a, b) => {
          const nameA = a.lastname.toUpperCase();
          const nameB = b.lastname.toUpperCase();

          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        })}
      />

      <BaseBackdrop isLoading={isLoading} />
    </section>
  );
};

export default Results;
