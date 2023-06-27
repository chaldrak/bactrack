import { useRef, useState } from "react";
import ResultsTable from "../mui/table-results";
import BaseTabs from "../common/base-tabs";
import { sortInAlphabeticOrder } from "../../utils";
import { useReactToPrint } from "react-to-print";

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

  const documentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => documentRef.current,
    documentTitle: `PNL_Solution_reporting`,
  });

  return (
    <section className="">
      <div ref={documentRef}>
        <BaseTabs tabs={tabs} current={current} setCurrent={setCurrent} />
        {current !== 3 && (
          <ResultsTable
            students={students}
            results={sortInAlphabeticOrder(results)}
          />
        )}
        {current === 3 && <div>Yo</div>}
      </div>
      <button
        onClick={handlePrint}
        className="fixed right-5 md:right-10 bottom-10 md:bottom-[75px] bg-sky-600 px-4 py-2 rounded-full hover:bg-sky-800"
      >
        Télécharger
      </button>
    </section>
  );
};

export default Results;
