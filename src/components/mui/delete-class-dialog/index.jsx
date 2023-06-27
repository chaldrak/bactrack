import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { schoolYears } from "../../../constants";

export default function DeleteClassDialog({
  open,
  setOpen,
  classData,
  onClick,
}) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClose = () => {
    setOpen(false);
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
          Confirmation de suppression
        </DialogTitle>
        <DialogContent>
          <form>
            <h2 className="text-lg font-bold">Terminale {classData?.serie}</h2>
            <p>
              Année Scolaire : {classData?.schoolYear - 1} -{" "}
              {classData?.schoolYear}
            </p>
            <em>
              Effectif : <span>{classData?.students.length}</span>
            </em>
            <div className="mt-5 min-w-[300px] text-red-600 italic">
              Vous êtes sur le point de supprimer toutes les données liées à
              cette classe. Cette opération est irréversible, êtes-vous sûr de
              vouloir continuer ?
            </div>
          </form>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            fermer
          </Button>
          <Button autoFocus onClick={onClick}>
            Continuer
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
