function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function BaseTabs({ tabs, current, setCurrent }) {
  return (
    <div>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-slate-300 py-2 pl-3 pr-10 text-base focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
          //   defaultValue={tabs.find((tab) => tab.current).name}
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <div className="border-b border-slate-700">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                className={classNames(
                  current === tab.index
                    ? "border-sky-500 text-sky-600"
                    : "border-transparent text-slate-400 hover:border-slate-300 hover:text-slate-300",
                  "whitespace-nowrap border-b-2 py-4 px-1 text-sm"
                )}
                aria-current={current === tab.index ? "page" : undefined}
                onClick={() => setCurrent(tab.index)}
              >
                {tab.name}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
