import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({ open, setOpen, children, onClick }) {
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOk = () => {
    setOpen(false);
    onClick();
  };

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      aria-describedby="alert-dialog-slide-description"
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
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          {children}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Annuler</Button>
        <Button onClick={handleOk}>Continuer</Button>
      </DialogActions>
    </Dialog>
  );
}
