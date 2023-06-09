import React, { useState } from "react";
import createAxiosInstance from "../../services/axios-instance";
import BaseBackdrop from "../mui/backdrop";
import ResponsiveDialog from "../mui/dialog";
import QuickSearchTable from "../common/quick-search-table";
import { errorToast } from "../../utils/toast";
import BaseButton from "../common/base-button";

const QuickSearchForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    session: "",
    tableNumber: "",
  });
  const [result, setResult] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const axios = createAxiosInstance(form.session);
    try {
      const response = await axios.get(form.tableNumber);
      setResult(response.data);
      setOpen(true);
    } catch (error) {
      errorToast("Aucun candidat ne correspond à ce numéro.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <form
      className="h-full rounded-md border border-slate-700 p-10"
      onSubmit={handleSubmit}
    >
      <select
        className="flex h-10 w-full text-white font-medium rounded-md border border-slate-700 bg-slate-800 py-2 px-3 text-sm placeholder:text-slate-400 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 focus:border-white"
        name="session"
        id="session"
        value={form.session}
        onChange={handleChange}
      >
        <option value="" disabled defaultValue={""}>
          {" "}
          Choisir la session
        </option>
        {[2022, 2021].map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
      <input
        className="flex h-10 w-full text-white font-medium rounded-md border border-slate-700 bg-slate-800 py-2 px-3 text-sm placeholder:text-slate-400 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 focus:border-white my-5"
        type="text"
        placeholder="Entrer votre numéro de table"
        name="tableNumber"
        id="tableNumber"
        value={form.tableNumber}
        onChange={handleChange}
      />
      <BaseButton
        tag="button"
        title="Rechercher"
        theme="blue"
        variant="contain"
        type="submit"
        disabled={!form.session || !form.tableNumber}
      />
      <BaseBackdrop isLoading={isLoading} />
      <ResponsiveDialog
        open={open}
        setOpen={setOpen}
        title={`Résulats du BAC session de Juin ${form.session}`}
        setForm={setForm}
      >
        <QuickSearchTable result={result} />
      </ResponsiveDialog>
    </form>
  );
};

export default QuickSearchForm;
