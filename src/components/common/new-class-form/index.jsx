import { SiMicrosoftexcel } from "react-icons/si";
import BaseButton from "../base-button";

const NewClassForm = () => {
  return (
    <form>
      <div className="space-y-12">
        <div className="border-b border-t border-slate-800 pb-12 mx-auto">
          <div className="sm:col-span-3 mt-10 max-w-xl">
            <label
              htmlFor="country"
              className="block text-sm font-medium leading-6 text-white"
            >
              Année Scolaire
            </label>
            <div className="mt-2">
              <select
                id="country"
                name="country"
                autoComplete="country-name"
                className="flex h-10 w-full text-white font-medium rounded-md border border-slate-700 bg-slate-800 py-2 px-3 text-sm placeholder:text-slate-400 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 focus:border-white"
              >
                {[2023, 2022, 2021].map((item) => (
                  <option key={item} value={item}>
                    {item - 1 + "-" + item}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="sm:col-span-3 mt-10 max-w-xl">
            <label
              htmlFor="country"
              className="block text-sm font-medium leading-6 text-white"
            >
              Série
            </label>
            <div className="mt-2">
              <select
                id="country"
                name="country"
                autoComplete="country-name"
                className="flex h-10 w-full text-white font-medium rounded-md border border-slate-700 bg-slate-800 py-2 px-3 text-sm placeholder:text-slate-400 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 focus:border-white"
              >
                {["A1", "A2", "B", "C", "D", "E", "F", "G1", "G2", "G3"].map(
                  (item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  )
                )}
              </select>
            </div>
          </div>

          <div className="mt-10 max-w-xl">
            <div className="col-span-full">
              <label
                htmlFor="excel-file"
                className="block text-sm font-medium leading-6 text-white"
              >
                Liste des candidats
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-slate-700 px-6 py-10">
                <div className="text-center">
                  <SiMicrosoftexcel
                    className="mx-auto h-12 w-12 text-gray-500"
                    aria-hidden="true"
                  />
                  <div className="mt-4 flex text-sm leading-6 text-slate-400">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md font-semibold text-white focus-within:outline-none focus-within:ring-offset-gray-900 hover:text-sky-600"
                    >
                      <span>Choisir le fichier</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1">ou glisser et déposer</p>
                  </div>
                  <p className="text-xs leading-5 text-slate-400">
                    fichier{" "}
                    <span className="text-sky-600 font-bold">EXCEL</span>{" "}
                    uniquement
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-white"
        >
          Cancel
        </button>
        <div className="w-[300px]">
          <BaseButton
            tag="button"
            title="Créer"
            type="submit"
            disabled={true}
          />
        </div>
      </div>
    </form>
  );
};

export default NewClassForm;
