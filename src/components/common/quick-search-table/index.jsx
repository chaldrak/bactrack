import React from "react";
import { isFailure } from "../../../utils";

const QuickSearchTable = ({ result }) => {
  return (
    <table className="min-w-full">
      <tbody className="divide-y divide-slate-700 bg-transparent [&_tr]:divide-x [&_tr]:divide-slate-700 [&_th]:text-white [&_th]:py-3 [&_th]:pl-4 [&_th]:pr-4 [&_th]:text-left [&_th]:font-semibold [&_th]:sm:pl-0 [&_td]:whitespace-nowrap [&_td]:py-3 [&_td]:px-4 text-sm [&_td]:text-gray-500">
        <tr>
          <th scope="col">Numéro de table</th>
          <td>{result.tableNumber}</td>
        </tr>
        <tr>
          <th scope="col">Nom</th>
          <td>{result.lastname}</td>
        </tr>
        <tr>
          <th scope="col">Prénoms</th>
          <td>{result.firstname}</td>
        </tr>
        <tr>
          <th scope="col">Sexe</th>
          <td>{result.gender}</td>
        </tr>
        <tr>
          <th scope="col">Etablissement</th>
          <td>{result.school}</td>
        </tr>
        <tr>
          <th scope="col">Centre de composition</th>
          <td>{result.examCenter}</td>
        </tr>
        <tr>
          <th scope="col">Série</th>
          <td>{result.serie}</td>
        </tr>
        <tr>
          <th scope="col">Jury</th>
          <td>{result.jury}</td>
        </tr>
        <tr>
          <th scope="col">Décision</th>
          <td>
            <span
              className={`${
                isFailure(result.verdict)
                  ? "bg-red-400 text-red-800"
                  : "bg-green-400 text-green-800"
              } px-4 py-1 rounded-full font-black uppercase`}
            >
              {result.verdict}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default QuickSearchTable;
