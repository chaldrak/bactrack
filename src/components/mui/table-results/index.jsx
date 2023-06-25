export default function ResultsTable({ results }) {
  return (
    <div className="">
      <div className="mt-8 flow-root">
        <div className="-my-2 overflow-x-auto">
          <div className="inline-block min-w-full py-2 align-middle">
            <table className="min-w-full divide-y divide-slate-700">
              <thead className="bg-slate-500">
                <tr className="divide-x divide-slate-700 [&_th]:whitespace-nowrap">
                  <th
                    scope="col"
                    className="py-3.5 px-4 text-left text-sm font-semibold text-slate-900"
                  >
                    N°
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 px-4 text-left text-sm font-semibold text-slate-900"
                  >
                    NOM
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3.5 text-left text-sm font-semibold text-slate-900"
                  >
                    PRENOMS
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-slate-900 sm:pr-0"
                  >
                    CENTRE DE COMPOSITION
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 text-center text-sm font-semibold text-slate-900 sm:pr-0"
                  >
                    JURY
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-slate-900 sm:pr-0"
                  >
                    VERDICT
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 bg-transparent">
                {results.map((person, index) => (
                  <tr key={index} className="divide-x divide-slate-800">
                    <td className="whitespace-nowrap p-4 text-sm font-medium text-slate-500">
                      {index + 1}
                    </td>
                    <td className="whitespace-nowrap p-4 text-sm font-medium text-slate-500">
                      {person.lastname}
                    </td>
                    <td className="whitespace-nowrap p-4 text-sm text-slate-500">
                      {person.firstname}
                    </td>
                    <td className="whitespace-nowrap p-4 text-sm text-slate-500">
                      {person.examCenter}
                    </td>
                    <td className="whitespace-nowrap text-center p-4 text-sm text-slate-500">
                      {person.jury}
                    </td>
                    <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-slate-500 sm:pr-0">
                      {person.verdict}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
