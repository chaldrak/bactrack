import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

export default function Pagination({
  itemPerPage,
  totalItems,
  currentPage,
  setCurrentPage,
}) {
  const totalPages = Math.ceil(totalItems / itemPerPage);
  const lastItemIndex = currentPage * itemPerPage;
  const firstItemIndex = lastItemIndex - itemPerPage + 1;
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          href="#"
          className="relative inline-flex items-center rounded-md border border-slate-500 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-800 hover:text-slate-400"
        >
          Préc
        </a>
        <a
          href="#"
          className="relative inline-flex items-center rounded-md border border-slate-500 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-800 hover:text-slate-400"
        >
          Suiv
        </a>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-slate-600">
            De <span className="font-medium">{firstItemIndex}</span> à{" "}
            <span className="font-medium">
              {lastItemIndex > totalItems ? totalItems : lastItemIndex}
            </span>{" "}
            sur <span className="font-medium">{totalItems}</span> candidats
          </p>
        </div>
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <span
              href="#"
              className="relative inline-flex items-center px-2 py-2 text-slate-400 hover:text-slate-100 focus:z-20"
            >
              <span className="sr-only">Previous</span>
              <BiChevronLeft size={20} aria-hidden="true" />
            </span>
            {/* <span
              href="#"
              aria-current="page"
              className="relative z-10 inline-flex items-center bg-sky-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 rounded-full"
            >
              1
            </span> */}
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (item) => (
                <span
                  key={item}
                  className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold  focus:z-20 cursor-pointer ${
                    item === currentPage
                      ? "z-10 bg-sky-600 text-white rounded-md"
                      : "text-slate-500  hover:text-slate-50"
                  }`}
                  onClick={() => {
                    setCurrentPage(item);
                    localStorage.setItem("currentPage", `${item}`);
                  }}
                >
                  {item}
                </span>
              )
            )}
            <a
              href="#"
              className="relative inline-flex items-center px-2 py-2 text-slate-400 hover:text-slate-100 focus:z-20"
            >
              <span className="sr-only">Next</span>
              <BiChevronRight size={20} aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
