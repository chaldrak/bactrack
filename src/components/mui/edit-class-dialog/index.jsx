import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { schoolYears } from "../../../constants";

export default function EditClassDialog({
  open,
  setOpen,
  value,
  onChange,
  classData,
  onSubmit,
}) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClose = () => {
    setOpen(false);
    // setForm({ schoolYear: 0 });
  };

  return (
    <>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        sx={{
          "& .MuiDialog-paper": {
            backgroundColor: "#0F172A",
            color: "#fff",
            borderWidth: 1,
            borderColor: "#334155",
            boxShadow: "none",
            maxWidth: 500,
          },
          "& .MuiDialogContentText-root": {
            backgroundColor: "#0F172A",
          },
        }}
      >
        <DialogTitle id="responsive-dialog-title">
          Modifier cette classe
        </DialogTitle>
        <DialogContent>
          <form>
            <h2 className="text-lg font-bold">Terminale {classData?.serie}</h2>
            <em>
              Effectif : <span>{classData?.students.length}</span>
            </em>
            <div className="mt-5 min-w-[300px]">
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
                  value={value}
                  onChange={onChange}
                  autoComplete="schoolYear"
                  defaultChecked={2021}
                  className="flex h-10 w-full text-white font-medium rounded-md border border-slate-700 bg-slate-800 py-2 px-3 text-sm placeholder:text-slate-400 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 focus:border-white"
                >
                  {schoolYears.map((item) => (
                    <option key={item} value={item}>
                      {item - 1 + "-" + item}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </form>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            fermer
          </Button>
          <Button autoFocus onClick={onSubmit}>
            Enregistrer
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
