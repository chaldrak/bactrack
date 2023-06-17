import { SiGoogleclassroom } from "react-icons/si";
import BaseButton from "../base-button";
import UploadExcelFile from "../xlsx-file-upload";
import { Link } from "react-router-dom";

const NewClassForm = ({ classData, onChange, data, onSubmit }) => {
  const { schoolYear, serie } = classData;
  const [students, setStudents] = data;
  return (
    <form onSubmit={onSubmit}>
      <div className="space-y-12">
        <div className="border-b border-t border-slate-800 pb-12 relative">
          <div className="hidden lg:flex justify-center items-center w-1/2 absolute right-0 top-1/2 -translate-y-1/2">
            <div className="lg:p-32 xl:p-40 rounded-full border border-dashed text-sky-400">
              <SiGoogleclassroom size={110} />
            </div>
          </div>
          <div className="sm:col-span-3 mt-10 lg:max-w-[50%]">
            <label
              htmlFor="schoolYear"
              className="block text-sm font-medium leading-6 text-white"
            >
              Année Scolaire
            </label>
            <div className="mt-2">
              <select
                id="schoolYear"
                name="schoolYear"
                value={schoolYear}
                onChange={onChange}
                autoComplete="schoolYear"
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

          <div className="sm:col-span-3 mt-10 lg:max-w-[50%]">
            <label
              htmlFor="serie"
              className="block text-sm font-medium leading-6 text-white"
            >
              Série
            </label>
            <div className="mt-2">
              <select
                id="serie"
                name="serie"
                value={serie}
                onChange={onChange}
                autoComplete="serie"
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

          <div className="mt-10 lg:max-w-[50%]">
            <UploadExcelFile data={data} />
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between gap-x-6">
        <Link
          type="button"
          className="text-sm font-semibold leading-6 text-white"
        >
          Cancel
        </Link>
        <div className="w-[200px] md:w-[300px]">
          <BaseButton
            tag="button"
            title="Créer"
            type="submit"
            disabled={students.length === 0}
          />
        </div>
      </div>
    </form>
  );
};

export default NewClassForm;
