import { useEffect, useState } from "react";
import useAuth from "../../hooks/authentication";
import createAxiosInstance from "../../services/axios-instance";
import BaseBackdrop from "../mui/backdrop";
import ResultsTable from "../mui/table-results";
import BaseTabs from "../common/base-tabs";
import { sortInAlphabeticOrder } from "../../utils";

const tabs = [
  { name: "Général", index: 0 },
  { name: "Admissibles", index: 1 },
  { name: "Refusés", index: 2 },
  { name: "Statistiques", index: 3 },
];

const Results = ({ results, students }) => {
  const [current, setCurrent] = useState(0);

  switch (current) {
    case 1:
      results = results.filter((item) => item.verdict !== "Refuse");
      break;

    case 2:
      results = results.filter((item) => item.verdict === "Refuse");
      break;

    default:
      break;
  }
  return (
    <section className="">
      <BaseTabs tabs={tabs} current={current} setCurrent={setCurrent} />
      {current !== 3 && (
        <ResultsTable
          students={students}
          results={sortInAlphabeticOrder(results)}
        />
      )}
      {current === 3 && <div>Yo</div>}
    </section>
  );
};

export default Results;
