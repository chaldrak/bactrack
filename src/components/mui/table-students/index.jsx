export default function DataTable({ students }) {
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
                    N° Ins
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3.5 text-left text-sm font-semibold text-slate-900"
                  >
                    NOM ET PRENOMS
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3.5 text-left text-sm font-semibold text-slate-900"
                  >
                    N° TABLE
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-slate-900 sm:pr-0"
                  >
                    DATE ET LIEU DE NAISSANCE
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-slate-900 sm:pr-0"
                  >
                    TELEPHONE
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 bg-transparent">
                {students.map((person, index) => (
                  <tr
                    key={person["N°Ins."]}
                    className="divide-x divide-slate-800"
                  >
                    <td className="whitespace-nowrap p-4 text-sm font-medium text-slate-500">
                      {index + 1}
                    </td>
                    <td className="whitespace-nowrap p-4 text-sm font-medium text-slate-500">
                      {person["N°Ins."]}
                    </td>
                    <td className="whitespace-nowrap p-4 text-sm text-slate-500">
                      {person["NOMS ET PRENOMS"]}
                    </td>
                    <td className="whitespace-nowrap p-4 text-sm text-slate-500">
                      {person["N°Tab"]}
                    </td>
                    <td className="whitespace-nowrap p-4 text-sm text-slate-500">
                      {person["DATE ET LIEU DE NAIS."]}
                    </td>
                    <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-slate-500 sm:pr-0">
                      {person["TELEPHONE"]}
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
