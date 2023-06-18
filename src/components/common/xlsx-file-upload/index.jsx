import { useState } from "react";
import { SiMicrosoftexcel } from "react-icons/si";
import { utils, read } from "xlsx";
import { errorToast } from "../../../utils/toast";
import SpinLoader from "../spin-loader";

const UploadExcelFile = ({ data }) => {
  const [students, setStudents] = data;
  const [fileInfo, setFileInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (e) => {
    setIsLoading(true);
    const file = e.target.files[0];
    if (
      file.type !==
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    ) {
      errorToast("Format non supporté.");
      setIsLoading(false);
      return;
    }
    setFileInfo(file);
    try {
      const data = await file.arrayBuffer();
      const excelFile = read(data);
      const excelSheet = excelFile.Sheets[excelFile.SheetNames[0]];
      const excelJson = utils.sheet_to_json(excelSheet);
      setStudents(excelJson);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="col-span-full">
      <label
        htmlFor="excel-file"
        className="block text-sm font-medium leading-6 text-white"
      >
        Liste des candidats
      </label>
      <div className="mt-2 flex justify-center rounded-lg border border-dashed border-slate-700 px-6 py-10">
        {!isLoading ? (
          <div className="text-center">
            <SiMicrosoftexcel
              className="mx-auto h-12 w-12 text-gray-500"
              aria-hidden="true"
            />
            {fileInfo ? (
              <>
                <div className="mt-4 text-sm leading-6 text-slate-400 truncate">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md font-semibold text-white focus-within:outline-none focus-within:ring-offset-gray-900 hover:text-sky-600"
                  >
                    <span className="text-xs">Choisir un autre fichier</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      onChange={fetchData}
                      type="file"
                      className="sr-only"
                    />
                  </label>
                  <p className="pl-1 mt-2">{fileInfo.name}</p>
                </div>
                <p className="text-xs leading-5 text-slate-400">
                  {(fileInfo.size / 1000).toFixed(1)} KB
                </p>
                {/* <p className="text-xs leading-5 text-slate-400">
                  <span className="text-sky-600 font-bold">
                    {students.length}
                  </span>{" "}
                  Candidats trouvés
                </p> */}
              </>
            ) : (
              <>
                <div className="mt-4 flex text-sm leading-6 text-slate-400">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md font-semibold text-white focus-within:outline-none focus-within:ring-offset-gray-900 hover:text-sky-600"
                  >
                    <span>Choisir le fichier</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      onChange={fetchData}
                      type="file"
                      className="sr-only"
                    />
                  </label>
                  <p className="pl-1">ou glisser et déposer</p>
                </div>
                <p className="text-xs leading-5 text-slate-400">
                  fichier <span className="text-sky-600 font-bold">EXCEL</span>{" "}
                  uniquement
                </p>
              </>
            )}
          </div>
        ) : (
          <div className="h-[105px] flex flex-col justify-center items-center gap-y-4">
            <SpinLoader loading={isLoading} />
            <span className="text-slate-600 animate-pulse">
              Lecture du fichier en cours . . .
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadExcelFile;
