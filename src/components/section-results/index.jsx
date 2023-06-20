import { useState } from "react";
import useAuth from "../../hooks/authentication";
import createAxiosInstance from "../../services/axios-instance";
import BaseBackdrop from "../mui/backdrop";

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
        className="fixed left-10 bottom-24 bg-sky-600 px-4 py-2 rounded-full hover:bg-sky-800"
      >
        Résultats
      </button>
      <h2 className="text-3xl font-bold mb-5">Résultats</h2>
      <div className="">
        <div className="mt-8 flow-root">
          <div className="-my-2 overflow-x-auto">
            <div className="inline-block min-w-full py-2 align-middle">
              <table className="text-slate-600 min-w-full">
                <thead>
                  <tr className="[&_th]:text-left [&_th]:border [&_th]:px-4 [&_th]:py-2 [&_th]:border-slate-700">
                    <th>N°</th>
                    <th>ID</th>
                    <th>NOM</th>
                    <th>PRENOMS</th>
                    <th>VERDICT</th>
                  </tr>
                </thead>
                {results.length === students.length ? (
                  <tbody className="divide-y divide-slate-700">
                    {results
                      .sort((a, b) => {
                        const nameA = a.lastname.toUpperCase();
                        const nameB = b.lastname.toUpperCase();

                        if (nameA < nameB) {
                          return -1;
                        }
                        if (nameA > nameB) {
                          return 1;
                        }
                        return 0;
                      })
                      .map((result, index) => (
                        <tr
                          key={index}
                          className="[&_td]:px-4 [&_td]:whitespace-nowrap [&_td]:py-2"
                        >
                          <td>{index + 1}</td>
                          <td>{result.id}</td>
                          <td>{result.lastname}</td>
                          <td>{result.firstname}</td>
                          <td>{result.verdict}</td>
                        </tr>
                      ))}
                  </tbody>
                ) : (
                  <tbody>
                    <tr>
                      <td
                        colSpan={5}
                        className="animate-pulse py-10 text-center"
                      >
                        Chargement en cours . . .{" "}
                        {Math.floor((results.length * 100) / students.length)} %
                      </td>
                    </tr>
                  </tbody>
                )}
              </table>
            </div>
          </div>
        </div>
      </div>

      <BaseBackdrop isLoading={isLoading} />
    </section>
  );
};

export default Results;
