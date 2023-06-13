import { toast } from "react-toastify";

const options = {
  theme: "colored",
  autoClose: 3000,
  hideProgressBar: true,
  position: "bottom-right",
};

export const errorToast = (message) => {
  toast.error(message, options);
};

export const successToast = (message) => {
  toast.success(message, options);
};
