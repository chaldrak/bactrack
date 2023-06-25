import { useEffect, useState } from "react";
import useAuth from "../../hooks/authentication";
import createAxiosInstance from "../../services/axios-instance";
import BaseBackdrop from "../mui/backdrop";
import ResultsTable from "../mui/table-results";
import BaseTabs from "../common/base-tabs";

const tabs = [
  { name: "Général", index: 0 },
  { name: "Admissibles", index: 1 },
  { name: "Refusés", index: 2 },
  { name: "Statistiques", index: 3 },
];

const Results = ({ results, students }) => {
  const [current, setCurrent] = useState(0);
  return (
    <section className="">
      <BaseTabs tabs={tabs} current={current} setCurrent={setCurrent} />
      {current !== 3 && (
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
      )}
      {current === 3 && <div>Yo</div>}
    </section>
  );
};

export default Results;
