import React from "react";

const BaseClassCard = ({ serie, students }) => {
  return (
    <li className="relative">
      <div className="group aspect-h-5 aspect-w-10 block w-full overflow-hidden rounded-lg bg-slate-800 hover:ring-2 hover:ring-sky-50">
        <button type="button" className="absolute inset-0 focus:outline-none">
          <span className="sr-only">View details for {serie}</span>
          <p className="group-hover:text-white pointer-events-none mt-2 block truncate text-sm font-medium text-slate-300">
            Terminale {serie}
          </p>
          <p className="pointer-events-none group-hover:text-white block mt-1 text-sm font-medium text-slate-400">
            {students.length} candidats
          </p>
        </button>
      </div>
    </li>
  );
};

export default BaseClassCard;
