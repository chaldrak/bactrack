import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function ResponsiveDialog({
  open,
  setOpen,
  title,
  children,
  setForm,
}) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClose = () => {
    setOpen(false);
    setForm({ session: "", tableNumber: "" });
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
        <DialogTitle id="responsive-dialog-title">{title}</DialogTitle>
        <DialogContent>{children}</DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            fermer
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
